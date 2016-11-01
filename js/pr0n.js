// jshint -W117
//@prepros-prepend partials/_functions.js
//@prepros-prepend partials/_titles.js
//@prepros-prepend partials/_actors.js

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var topMovies = [];

var actor = {
  race: "",
  height: {}
};

var availableActors = [];



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
      if (v == false) {
        avoidArray.push(k)
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

function rankPornTitles() {
  console.log('there are '+pornTitles.length+' titles');
  var i = 0;
  while (i < 20) {
    var r = Math.floor((Math.random() * pornTitles.length));
    if (topMovies.indexOf(pornTitles[r]) == -1) {
      topMovies.push(pornTitles[r]);
      i++;
    }
  }
  var g = Math.floor(Math.random() * (60000 - 50000)) + 50000;
  var p;
  var s;
  var d;
  $.each(topMovies, function(key, value) {
    p = ((Math.random() * (99.999 - 88.8888)) + 88) / 100;
    g = parseInt(g * p);
    s = Math.floor((Math.random() * 100) + 1);
    d = moment().subtract(s, 'days').format('l');
    $('#PornTitles').append('<tr><td>'+(key+1)+'</td><td>'+value+'</td><td><span class="s">$</span>'+numberWithCommas(g)+'</td><td>'+d+'</td></tr>');
  });
}



$(document).ready(function() {
  lookForActors();
  rankPornTitles();
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
  })
}

$('.porn-maker').on('click', 'article.cast', function() {
  $s = $(this);
  if (!$(this).hasClass('incompatible')) {
    $s.toggleClass('active');
    findMismatches();
  }
});

$('button[data-opens]').click(function() {
  var d = $(this).attr('data-opens');
  $('[data-drawer="'+d+'"]').addClass('visible');
  $('[data-open="'+d+'"]').addClass('invisible');
  $('[data-closes="'+d+'"]').removeClass('invisible');
});

$('button[data-closes]').click(function() {
  var d = $(this).attr('data-closes');
  $('[data-drawer="'+d+'"]').removeClass('visible');
  $('[data-closes="'+d+'"]').addClass('invisible');
  $('[data-opens="'+d+'"]').removeClass('invisible');
});