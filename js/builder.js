// jshint -W117
//@prepros-prepend partials/_functions.js
//@prepros-prepend partials/_titles.js

var topMovies = [];

function rankPornTitles(startDate) {
  console.log('there are '+pornTitles.length+' titles');
  //$('#TitleCount').text(pornTitles.length);
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
  var c;
  var change;
  var todayArray = [];
  var allDays = {};
  
  $.each(topMovies, function(key, value) {
    c = Math.floor((Math.random() * 3) + 1);
    if (c == 1) {
      change = "up";
    } else if (c == 2) {
      change = "down";
    } else if (c == 3) {
      change = "same";
    }
    
    p = ((Math.random() * (99.999 - 88.8888)) + 88) / 100;
    g = parseInt(g * p);
    s = Math.floor((Math.random() * 600) + 1);
    d = moment().subtract(s, 'days').format('l');
    $('#PornTitles').append('<tr><td class="rank">'+(key+1)+'</td><td class="title">'+value+'</td><td><span class="s">$</span>'+numberWithCommas(g)+'</td><td class="change '+change+'"> </td></tr>');
    var a = {
      title: value,
      take: g,
      change: change
    };
    todayArray.push(a);
  });
  
  //$('#JSArray').html(titleArray);
  //console.log(todayArray);
  allDays[startDate] = todayArray;
  //allDays[tweetDay].push(todayArray);
  console.log(allDays);
  
  $('#JSArray').append('var pornData = {');
  $('#JSArray').append('<br />');
  $('#JSArray').append('  '+ startDate+': [');
  $('#JSArray').append('<br />');
  $.each(todayArray, function(key, value) {
    $('#JSArray').append('    {title: "'+todayArray[key].title+'", take: '+todayArray[key].take+', change: "'+todayArray[key].change+'" }');
    if (key < 19) { $('#JSArray').append(','); }
    $('#JSArray').append('<br />');
  });
  
  $('#JSArray').append('  ],');
  $('#JSArray').append('<br />');
  
  
  // Begin of newDay loop
  var z = 1;
  while (z < 31) {
    var yesterdayArray = topMovies;
    topMovies = [];
    //todayArray = []
    $.each(todayArray, function(key, value) {
      topMovies.push(todayArray[key].title);
    });
    i = 0;
    var r = Math.floor((Math.random() * 10)) + 2;
    while (i < 5) {
      r = Math.floor((Math.random() * pornTitles.length));
      if (topMovies.indexOf(pornTitles[r]) == -1) {
        var a = Math.floor((Math.random() * 19));
        topMovies.splice(a,0,pornTitles[r])
        i++;
      }
    }
    $.each(topMovies, function(key, value) {
      var txt = topMovies[key];
      r = Math.floor((Math.random() * 6)) - 6;
      var m = key + r;
      if (m < 0) { m = 0; }
      topMovies.splice(key,1);
      topMovies.splice(m,0,txt);
    });

    topMovies.length = 20;

    console.log(yesterdayArray);
    console.log(topMovies);

    todayArray = [];
    var g = Math.floor(Math.random() * (60000 - 50000)) + 50000;
    $.each(topMovies, function(key, title) {
      var c;
      if (yesterdayArray.indexOf(title) < 0) {
        c = "new";
      } else if (yesterdayArray.indexOf(title) == key) {
        c = "same";
      } else if (yesterdayArray.indexOf(title) < key) {
        c = "down";
      } else if (yesterdayArray.indexOf(title) > key) {
        c = "up";
      }
      p = ((Math.random() * (99.999 - 88.8888)) + 88) / 100;
      g = parseInt(g * p);
      var a = {
        title: title,
        take: g,
        change: c
      };
      todayArray.push(a);
    });
    var dy = parseInt(startDate)+z;
    allDays[dy] = todayArray;

    $('#JSArray').append('  '+ dy+ ': [');
    $('#JSArray').append('<br />');
    $.each(todayArray, function(key, value) {
      $('#JSArray').append('    {title: "'+todayArray[key].title+'", take: '+todayArray[key].take+', change: "'+todayArray[key].change+'" }');
      if (key < 19) { $('#JSArray').append(','); }
      $('#JSArray').append('<br />');
    });
    $('#JSArray').append('], ');
    $('#JSArray').append('<br />');
    z++
  }
  $('#JSArray').append('  };');
}

$(document).ready(function() {
  $('main, header').remove();
  $('pre').show();
  rankPornTitles(20170101);
});