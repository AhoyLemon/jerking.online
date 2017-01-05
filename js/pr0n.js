// jshint -W117
//@prepros-prepend partials/_functions.js
//@prepros-prepend partials/_titles.js
//@prepros-prepend partials/_actors.js
//@prepros-prepend data/_january.js

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var topMovies = [];

var actor = {
  race: "",
  height: {}
};

var availableActors = [];


$('header .logo').click(function() {
  $(this).parent().toggleClass('expanded');
});


$('.top-porn').on('click', 'td.title', function() {
  var title = $(this).text();
  var rank = $(this).siblings('.rank').text();
  var intentText = encodeURI("Number "+rank+" Porn for "+tweetDay+": "+title);
  var intentURL = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fjerking.online&via=AhoyLemon&text="+intentText;
  window.open(intentURL, "popupWindow", "width=550,height=340");
});

//


// Let's get the available actors

function lookForActors() {
  
  // First let's generate some actors...
  var i = 0;
  while (i < 6) { 
    actor = {};
    actor.height = generateHeight();
    actor.race = generateRace();
    actor.hair = generateHair();
    actor.gender = assignGender();
    actor.name = generateName(actor.gender);
    var nameUsed = false;
    $.each( availableActors, function(k, v) {
      if (availableActors[k].name == actor.name) {
        nameUsed = true;
      }
    });
    if (nameUsed === false) {
      availableActors.push(actor);
      i++;
    }
    actor.sex = generateSexuality(actor.gender);
    actor.kinks = generateKinks(actor.height.description);
    actor.tags = generateTags(actor);
  }
  console.log(availableActors);

  // Then let's set up the selections for them.
  $.each(availableActors, function(key, value) {
    var d = '<article class="cast" data-gender="'+availableActors[key].gender+'"';
    var avoidArray = [];
    $.each(availableActors[key].sex, function(k,v) {
      if (v === false) {
        avoidArray.push(k);
      }
    });
    d = d + 'data-avoid="'+avoidArray+'" ';
    d = d + '>';
    d = d + '<h3 class="name">'+availableActors[key].name+'</h3>';
    d = d + '<ul class="stats">';
    d = d + '<li class="gender '+availableActors[key].gender+'">'+availableActors[key].gender+'</li>';
    d = d + '<li class="sexuality">'+availableActors[key].sex.description+'</li>';
    d = d + '<li class="height">'+availableActors[key].height.english+'</li>';
    d = d + '</ul>';
    if (availableActors[key].tags.length > 0) {
      d = d + "<h4>Tags</h4>";
      d = d + '<ul class="tags">';
      $.each(availableActors[key].tags, function(key, value) {
        d = d + "<li>"+value+'</li>';
      });
      d = d + "</ul>";
    }
    if (availableActors[key].kinks.length > 0) {
      d = d + "<h4>Kinks</h4>";
      d = d + '<ul class="kinks">';
      $.each(availableActors[key].kinks, function(key, value) {
        d = d + "<li>"+value+'</li>';
      });
      d = d + "</ul>";
    }
    d = d + '</article>';
    $('#CastSelection').append(d);
  });
  
}


function todaysPorn(date) {
  console.log(pornTitles);
  var todaysData = pornData[date];
  console.log('there are '+todaysData.length+' titles');
  $.each(todaysData, function(key, value) {
    $('#PornTitles').append('<tr><td class="rank">'+(key+1)+'</td><td class="title">'+todaysData[key].title+'</td><td><span class="s">$</span>'+numberWithCommas(todaysData[key].take)+'</td><td class="change '+todaysData[key].change+'"> </td></tr>');
  });
}

//var thisweek = moment().subtract(1, 'week').startOf('week').add(1, 'days').format('MMMM Do');
//$('#WeekOf').text(thisweek);
var yesterday = moment().subtract(1, 'days').format('dddd, MMMM Do YYYY');
var tweetDay = moment().subtract(1, 'days').format('MMM D');
var utiDay = moment().subtract(1, 'days').format('YYYYMMDD');
$('#TheDay').text(yesterday);

$(document).ready(function() {
  //lookForActors();
  todaysPorn(utiDay);
});

function findMismatches() {
  $('article.cast').removeClass('incompatible');
  $('article.cast.active').each(function() {
    $s = $(this);
    var avoids = $s.attr('data-avoid').split(',');
    $(this).siblings('.cast').each(function() {
      $t = $(this);
      if (avoids.indexOf($t.attr('data-gender')) > -1) {
        $t.addClass('incompatible');
      } else {
        var av = $t.attr('data-avoid').split(',');
        if (av.indexOf($s.attr('data-gender')) > -1) {
          $t.addClass('incompatible');
        }
      }
    });
  });
}

$('.porn-maker').on('click', 'article.cast', function() {
  $s = $(this);
  if (!$(this).hasClass('incompatible')) {
    $s.toggleClass('active');
    findMismatches();
  }
  var castNum = $('article.cast.active').length;
  if (castNum > 0) {
    $('#NextStep').attr('disabled', false);
    $('button[data-switch="plot"]').attr('disabled', false);
  } else {
    $('#NextStep').attr('disabled', true);
    $('button[data-switch="plot"]').attr('disabled', true);
  }
});

$('button[data-opens]').click(function() {
  var d = $(this).attr('data-opens');
  $('[data-drawer="'+d+'"]').addClass('visible');
  $('[data-open="'+d+'"]').addClass('invisible');
  $('[data-closes="'+d+'"]').removeClass('invisible');
  if (d == "casting") {
    $('.maker-steps').addClass('visible');
  }
});

$('button[data-closes]').click(function() {
  var d = $(this).attr('data-closes');
  $('[data-drawer="'+d+'"]').removeClass('visible');
  $('[data-closes="'+d+'"]').addClass('invisible');
  $('[data-opens="'+d+'"]').removeClass('invisible');
  if (d == "casting") {
    $('.maker-steps').removeClass('visible');
  }
});