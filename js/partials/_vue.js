var app = new Vue({
  el: '#app',
  data: {
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
      url: 'https://ahoylemon.github.io/jerking.online',
      isCopySuccess: false,
      isCopyFailure: false
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
    },
    computedShareText() {
      const self = this;
      if (!self.share.msg || !self.share.url) {
        return null;
      }
      const msg = decodeURIComponent(self.share.msg);
      const url = decodeURIComponent(self.share.url);
      return `${msg}${url}`;
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
      const self = this;
      this.formatDate(moment(this.displayDate).subtract(1,'days'));
      this.pullTitles(this.displayDate);
      let url = new URL(window.location);
      url.searchParams.set('date', self.displayDate);
      window.history.pushState({date: self.displayDate, action:"Previous Day"}, '', url);
      sendEvent('Previous Day', this.displayDatePretty);
    },
    nextDay: function() {
      this.formatDate(moment(this.displayDate).add(1,'days'));
      this.pullTitles(this.displayDate);
      let url = new URL(window.location);
      url.searchParams.set('date', self.displayDate);
      window.history.pushState({date: self.displayDate, action:"Previous Day"}, '', url);
      sendEvent('Next Day', this.displayDatePretty);
    },
    shareMovie: function(n, t) {
      var self = this;
      self.share.date = moment(self.displayDate).format('MMM Do');
      self.share.msg = encodeURIComponent('The #'+n+' parody porn for '+self.share.date+':\n '+t+'\n');
      // self.share.msgUnencoded = `The #${n} parody porn title for ${self.share.date}: \n ${t}`;
      self.share.url = encodeURIComponent('https://ahoylemon.github.io/jerking.online?date='+self.displayDate);
      // self.share.urlUnencoded = `'https://ahoylemon.github.io/jerking.online?date=${self.displayDate}`
      // const lineBreak = "%0D%0A";
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
        window.open('https://www.livejournal.com/update.bml?subject='+share.msg+'&event='+share.url, m, 'width='+w+', height='+h+', left='+l+',top='+t);
      } else if (m == "Telegram") {
        window.open('tg://msg_url?text='+share.msg+'\n'+share.url);
      } else if (m == "SMS") {
        window.open('sms:?body='+share.msg);
      } else if (m == "Email") {
        window.location.href = 'mailto:?subject='+share.title+'&body='+share.msg+'\n\n'+share.url;
      }

      sendEvent('Share via '+m, share.titlePretty, m);

      share.visible = false;
    },
    copyShareInfo: function() {
      const self = this;
      navigator.clipboard.writeText(self.computedShareText).then(() => {
        self.share.isCopySuccess = true;
        self.share.isCopyFailure = false;
        /* Resolved - text copied to clipboard successfully */
      },() => {
        self.share.isCopySuccess = false;
        self.share.isCopyFailure = true;
        /* Rejected - text failed to copy to the clipboard */
      });
    },
    closeShareScreen: function() {
      const self = this;
      console.log('close share screen');
      self.share.visible = false;
      self.share.isCopyFailure = false;
      self.share.isCopySuccess = false;
    }
  },
  beforeMount: function() {
    const self = this;
    
    
    if (window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('date')) {
        const urlDate = urlParams.get('date').toString();
        self.pullTitles(urlDate);
        self.formatDate(urlDate);
      }
    }
    if (!self.displayDate || !self.list) {
      self.pullTitles(self.today.format('YYYYMMDD'));
      self.formatDate(self.today);
    }
  }
});