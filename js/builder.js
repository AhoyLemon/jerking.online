// jshint -W083
// jshint -W117
// jshint -W004
//@prepros-prepend partials/_functions.js
//@prepros-prepend partials/_titles.js
//@prepros-prepend data/_data.js

var topMovies = [];
var todayArray = [];
var allDays = {};
//var r;

var avoidList = [];



function parseHistoricalData(startDate) {
  for (z = 10; z > 0; z--) { 
    var thisDaysData = pornData[moment(startDate).subtract(z,'days').format('YYYYMMDD')];
    $.each(thisDaysData, function(key, value) {
      if (avoidList.indexOf(thisDaysData[key].title) == -1) {
        avoidList.push(thisDaysData[key].title);
      }
    });
    if (z == 1) {
      $.each(thisDaysData, function(key, value) {
        topMovies.push(thisDaysData[key].title);
      });
      todayArray = thisDaysData;
    }
  }
}


function rankPornTitles(startDate) {
  console.log('there are '+pornTitles.length+' titles');
  
  parseHistoricalData(startDate);
  
  //console.log(avoidList);
  //console.log(topMovies);
  
  // Begin of newDay loop
  var z = 0;
  while (z < 22) {
    var yesterdayArray = topMovies;
    topMovies = [];
    $.each(todayArray, function(key, value) {
      topMovies.push(todayArray[key].title);
    });
    var i = 0;
    var r = Math.floor((Math.random() * 6)) + 6;
    while (i < r) {
      var r = Math.floor((Math.random() * pornTitles.length));
      if (topMovies.indexOf(pornTitles[r]) == -1 && avoidList.indexOf(pornTitles[r]) == -1) {
        var a = Math.floor((Math.random() * 19));
        topMovies.splice(a,0,pornTitles[r]);
        i++;
      }
    }
    $.each(topMovies, function(key, value) {
      var txt = topMovies[key];
      r = Math.floor((Math.random() * 12)) - 5;
      var m = key + r;
      if (m < 0) { m = 0; }
      topMovies.splice(key,1);
      topMovies.splice(m,0,txt);
    });
    topMovies.length = 20;
    $.each(topMovies, function(key,value) {
      if (avoidList.indexOf(topMovies[key]) == -1) {
        avoidList.push(topMovies[key]);
      }
    });

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
    var dy = moment(startDate).add(z,'days').format('YYYYMMDD');
    allDays[dy] = todayArray;

    $('#JSArray').append('  "'+ dy+ '": [');
    $('#JSArray').append('<br />');
    $.each(todayArray, function(key, value) {
      $('#JSArray').append('    {title: "'+todayArray[key].title+'", take: '+todayArray[key].take+', change: "'+todayArray[key].change+'" }');
      if (key < 19) { $('#JSArray').append(','); }
      $('#JSArray').append('<br />');
    });
    $('#JSArray').append('], ');
    $('#JSArray').append('<br />');
    z++;
  }
  $('#JSArray').append('  };');
}

var today = moment().format('YYYYMMDD');

$(document).ready(function() {
  rankPornTitles('20171204');
  console.log('I processed '+avoidList.length+' titles.');
  //console.log(avoidList);
});