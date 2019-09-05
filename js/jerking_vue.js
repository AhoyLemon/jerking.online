// jshint -W117
//@prepros-prepend partials/_functions.js
//@prepros-prepend partials/_titles.js 
//@prepros-prepend data/_data.js

var app = new Vue({
  el: '#app',
  data: {
    //message: 'Hello Vue!',
    expanded: false,
    titleCount: pornTitles.length,
    days: pornData,
    today: moment(),
    displayDate: '',
    displayDatePretty: '',
    firstDay: Object.keys(pornData)[0],
    lastDay: Object.keys(pornData)[Object.keys(pornData).length - 1],
    list: {},
    share: {
      visible: false,
      date: false,
      msg: false,
      title: false,
      titlePretty: false,
      via: false,
      url: 'https://ahoylemon.github.io/jerking.online'
    }
  },
  computed: {
    showNextDay: function() {
      var self = this;
      if ( (moment().format('YYYYMMDD') <= moment(self.displayDate).format('YYYYMMDD')) ) {
        return false;
      } else {
        return true;
      }
    },
    showPrevDay: function() {
      var self = this;
      return true;
      /*
      if ( moment(self.today).subtract(14,'days').format('YYYYMMDD') >= moment(self.displayDate).format('YYYYMMDD') ) {
        return false;
      } else {
        return moment(self.displayDate).format('YYYYMMDD');
      }
      */
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
      self.list = pornData[pullDate.substr(4)];
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
      sendEvent('Previous Day', this.displayDatePretty);
    },
    nextDay: function() {
      this.formatDate(moment(this.displayDate).add(1,'days'));
      this.pullTitles(this.displayDate);
      sendEvent('Next Day', this.displayDatePretty);
    },
    shareMovie: function(n, t) {
      var self = this;
      self.share.date = moment(self.displayDate).format('MMM Do');
      self.share.msg = encodeURIComponent('The #'+n+' porno title for '+self.share.date+': '+t+'\n');
      self.share.url = encodeURIComponent('https://ahoylemon.github.io/jerking.online');
      self.share.title = encodeURIComponent(t);
      self.share.titlePretty = t;
      self.share.visible = true;
      sendEvent('Share Movie',t, '#'+n);

    },
    shareVia: function(m) {
      var share = this.share;
      var w;
      var h;
      var l;
      var t;
      
      if (m == "Twitter") {
        w = 520;
        h = 270;
        l = (window.screen.width / 2) - ((w / 2) + 10);
        t = (window.screen.height / 2) - ((h / 2) + 50);
        window.open('https://twitter.com/intent/tweet?text='+share.msg+share.url, m, 'width='+w+', height='+h+', left='+l+',top='+t);
      } else if (m == "Facebook") {
        w = 650;
        h = 520;
        l = (window.screen.width / 2) - ((w / 2) + 10);
        t = (window.screen.height / 2) - ((h / 2) + 50);
        window.open('https://www.facebook.com/sharer/sharer.php?u='+share.url, m, 'width='+w+', height='+h+', left='+l+',top='+t);
      } else if (m == "Reddit") {
        w = 980;
        h = 780;
        l = (window.screen.width / 2) - ((w / 2) + 10);
        t = (window.screen.height / 2) - ((h / 2) + 50);
        window.open('https://reddit.com/submit?url='+share.url+'&title='+share.msg, m, 'width='+w+', height='+h+', left='+l+',top='+t);
      } else if (m == "Tumblr") {
        w = 555;
        h = 850;
        l = (window.screen.width / 2) - ((w / 2) + 10);
        t = (window.screen.height / 2) - ((h / 2) + 50);
        window.open('https://www.tumblr.com/widgets/share/tool?canonicalUrl='+share.url+'&title='+share.title+'&caption='+share.msg, m, 'width='+w+', height='+h+', left='+l+',top='+t);
      } else if (m == "Google Plus") {
        w = 400;
        h = 640;
        l = (window.screen.width / 2) - ((w / 2) + 10);
        t = (window.screen.height / 2) - ((h / 2) + 50);
        window.open('https://plus.google.com/share?url='+share.url+'&text='+share.msg, m, 'width='+w+', height='+h+', left='+l+',top='+t);
      } else if (m == "LiveJournal") {
        w = 790;
        h = 640;
        l = (window.screen.width / 2) - ((w / 2) + 10);
        t = (window.screen.height / 2) - ((h / 2) + 50);
        window.open('http://www.livejournal.com/update.bml?subject='+share.msg+'&event='+share.url, m, 'width='+w+', height='+h+', left='+l+',top='+t);
      } else if (m == "Email") {
        window.location.href = 'mailto:?subject='+share.title+'&body='+share.msg+'\n'+share.url;
      }

      sendEvent('Share via '+m, share.titlePretty, m);

      share.visible = false;
    }
  },
  beforeMount: function() {
    this.pullTitles(this.today.format('YYYYMMDD'));
    this.formatDate(this.today);
  }
});