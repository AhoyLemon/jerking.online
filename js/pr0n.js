// jshint -W117
//@prepros-prepend partials/_functions.js
//@prepros-prepend partials/_titles.js 
//@prepros-prepend data/_january.js

$('header .logo').click(function() {
  $('header').toggleClass('expanded');
});

$('header .logo').hover(function() {
  $('header .fist').addClass('shaking');
}, function() {
  $('header .fist').removeClass('shaking');
});


$('.top-porn').on('click', 'td.title', function() {
  var title = $(this).text();
  var rank = $(this).siblings('.rank').text();
  var intentText = encodeURI("Number "+rank+" Porn for "+currentDay.short+": "+title);
  var intentURL = "https://twitter.com/intent/tweet?text="+intentText+'%0ahttp://jerking.online';
  sendEvent('share title', 'Twitter', title);
  window.open(intentURL, "popupWindow", "width=550,height=340");
});

//

function todaysPorn(date) {
  $('#TitleCount').text(pornTitles.length);
  console.log(pornTitles);
  var todaysData = pornData[date];
  console.log('there are '+todaysData.length+' titles');
  $('#PornTitles').empty();
  $.each(todaysData, function(key, value) {
    $('#PornTitles').append('<tr><td class="rank">'+(key+1)+'</td><td class="title">'+todaysData[key].title+'</td><td class="gross"><span class="s">$</span>'+numberWithCommas(todaysData[key].take)+'</td><td class="change '+todaysData[key].change+'"> </td></tr>');
  });
  $('#TheDay').text(currentDay.verbose);
}

var currentDay = {
  raw: moment().subtract(1, 'days'),
  verbose: "",
  short: "",
  utc: 0
};

function formatDay(d) {
  currentDay.raw = moment(d);
  currentDay.verbose = moment(d).format('dddd, MMMM Do YYYY');
  currentDay.short = moment(d).format('MMM D');
  currentDay.utc = parseInt(moment(d).format('YYYYMMDD'));
}

var yesterday = moment().subtract(1, 'days').format('dddd, MMMM Do YYYY');
var tweetDay = moment().subtract(1, 'days').format('MMM D');
var utiDay = moment().subtract(1, 'days').format('YYYYMMDD');
formatDay(currentDay.raw);


$(document).ready(function() {
  todaysPorn(utiDay);
  checkArrows();
});

function checkArrows() {
  var n = parseInt(moment(currentDay.raw).subtract(1,'days').format('YYYYMMDD'));
  if (pornData[n]) {
    $('.prev-day').show();
  } else {
    $('.prev-day').hide();
  }
  
  if (parseInt(currentDay.raw.format('YYYYMMDD')) < parseInt(moment().subtract(1,'days').format('YYYYMMDD'))) {
    $('.next-day').show();
  } else {
    $('.next-day').hide();
  }
}

$('.prev-day').click(function() {
  formatDay(moment(currentDay.raw).subtract(1, 'days'));
  todaysPorn(currentDay.utc);
  checkArrows();
});


$('.next-day').click(function() {
  formatDay(moment(currentDay.raw).add(1, 'days'));
  todaysPorn(currentDay.utc);
  checkArrows();
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