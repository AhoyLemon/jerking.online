// jshint -W117
//@prepros-append partials/_titles.js
//@prepros-append partials/_actors.js

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var topMovies = [];

$(document).ready(function() {
  
  generateHeight();
  
  console.log('there are '+pornTitles.length+' titles')
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
  $.each( topMovies, function(key, value) {
    p = ((Math.random() * (99.999 - 88.8888)) + 88) / 100;
    g = parseInt(g * p);
    s = Math.floor((Math.random() * 100) + 1);
    d = moment().subtract(s, 'days').format('l');
    $('#PornTitles').append('<tr><td>'+(key+1)+'</td><td>'+value+'</td><td><span class="s">$</span>'+numberWithCommas(g)+'</td><td>'+d+'</td></tr>');
  });
});