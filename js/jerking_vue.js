// jshint -W117
//@prepros-prepend partials/_functions.js
//@prepros-prepend partials/_titles.js 
//@prepros-prepend data/_data.js

var app = new Vue({
  el: '#app',
  data: {
    //message: 'Hello Vue!',
    days: pornData,
    today: moment(),
    displayDate: '',
    displayDatePretty: '',
    list: {}
  },
  computed: {
    showNextDay: function() {
      var self = this;
      if (moment().format('YYYYMMDD') <= moment(self.displayDate).format('YYYYMMDD')) {
        return false;
      } else {
        return moment().format('YYYYMMDD');
      }
    }
  },
  methods: {
    formatDate: function(x) {
      var self = this;
      this.displayDate = moment(x).format('YYYYMMDD');
      this.displayDatePretty = moment(x).format('MMMM Do, YYYY');
    },
    pullTitles: function(pullDate) {
      var self = this;
      self.list = pornData[pullDate];
    },
    dollars: function(x) {
      return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    showChange: function(x) {
      if (x == 'up') {
        return 'up';
      }
    },
    prevDay: function() {
      this.formatDate(moment(this.displayDate).subtract(1,'days'));
      this.pullTitles(this.displayDate);
    },
    nextDay: function() {
      this.formatDate(moment(this.displayDate).add(1,'days'));
      this.pullTitles(this.displayDate);
    }
  },
  beforeMount: function() {
    this.pullTitles(this.today.format('YYYYMMDD'));
    this.formatDate(this.today);
  }
});


// HEADER
var app = new Vue({
  el: '#header',
  data: {
    expanded: false
  }
});



//alert('hi');