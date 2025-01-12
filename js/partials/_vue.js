const { createApp, ref, computed, onBeforeMount } = Vue;

const app = createApp({
  setup() {
    const expanded = ref(false);
    const titleCount = ref(pornTitles.length);
    const days = ref(pornData);
    const today = ref(moment());
    const displayDate = ref('');
    const displayDatePretty = ref('');
    const firstDay = ref(Object.keys(pornData)[0]);
    const lastDay = ref(Object.keys(pornData)[Object.keys(pornData).length - 1]);
    const list = ref({});
    const actorList = ref({}); 
    const share = ref({
      visible: false,
      date: false,
      msg: false,
      title: false,
      titlePretty: false,
      via: false,
      url: 'https://jerking.ahoylemon.xyz',
      isCopySuccess: false,
      isCopyFailure: false
    });

    const showNextDay = computed(() => {
      return moment().format('YYYYMMDD') > moment(displayDate.value).format('YYYYMMDD');
    });

    const showPrevDay = computed(() => true);

    const computedShareText = computed(() => {
      if (!share.value.msg || !share.value.url) {
        return null;
      }
      const msg = decodeURIComponent(share.value.msg);
      const url = decodeURIComponent(share.value.url);
      return `${msg}${url}`;
    });

    // const randomActors = computed(() => {
    //   const getRandomActors = (namesArray, count) => {
    //     const shuffled = namesArray.sort(() => 0.5 - Math.random());
    //     return shuffled.slice(0, count);
    //   };

    //   const femaleActors = getRandomActors(names.female, 2);
    //   const maleActors = getRandomActors(names.male, 2);
    //   const remainingActors = getRandomActors([...names.female, ...names.male], 1);

    //   const allActors = [...femaleActors, ...maleActors, ...remainingActors];
    //   const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * (300 - 30 + 1)) + 30).sort((a, b) => b - a);

    //   return allActors.map((actor, index) => ({
    //     name: actor,
    //     films: randomNumbers[index]
    //   }));
    // });

    const formatDate = (x) => {
      displayDate.value = moment(x).format('YYYYMMDD');
      displayDatePretty.value = moment(x).format('MMMM Do, YYYY');
    };

    const pullTitles = (pullDate) => {
      list.value = pornData[pullDate.substr(4)].titles;
    };
    const pullActors= (pullDate) => {
      actorList.value = pornData[pullDate.substr(4)].actors;
    };

    const dollars = (x) => {
      return '$' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const showChange = (x) => {
      if (x == 'up') {
        return 'up';
      }
    };

    const prevDay = () => {
      formatDate(moment(displayDate.value).subtract(1, 'days'));
      pullTitles(displayDate.value);
      pullActors(displayDate.value)
      let url = new URL(window.location);
      url.searchParams.set('date', displayDate.value);
      window.history.pushState({ date: displayDate.value, action: "Previous Day" }, '', url);
      sendEvent('Previous Day', displayDatePretty.value);
    };

    const nextDay = () => {
      formatDate(moment(displayDate.value).add(1, 'days'));
      pullTitles(displayDate.value);
      pullActors(displayDate.value);
      let url = new URL(window.location);
      url.searchParams.set('date', displayDate.value);
      window.history.pushState({ date: displayDate.value, action: "Next Day" }, '', url);
      sendEvent('Next Day', displayDatePretty.value);
    };

    const shareMovie = (n, t) => {
      share.value.date = moment(displayDate.value).format('MMM Do');
      share.value.msg = encodeURIComponent('The #' + n + ' parody porn for ' + share.value.date + ':\n ' + t + '\n');
      share.value.url = encodeURIComponent('https://jerking.ahoylemon.xyz?date=' + displayDate.value);
      share.value.title = encodeURIComponent(t);
      share.value.titlePretty = t;
      share.value.visible = true;
      sendEvent('Share Movie', t, '#' + n);
    };

    const shareVia = (m) => {
      const shareData = share.value;
      let w, h, l, t;

      if (m == "Twitter") {
        w = 520;
        h = 270;
      } else if (m == "Facebook") {
        w = 650;
        h = 520;
      } else if (m == "Reddit") {
        w = 980;
        h = 780;
      } else if (m == "Tumblr") {
        w = 555;
        h = 850;
      } else if (m == "Google Plus") {
        w = 400;
        h = 640;
      } else if (m == "LiveJournal") {
        w = 790;
        h = 640;
      } else if (m == "Telegram") {
        window.open('tg://msg_url?text=' + shareData.msg + '\n' + shareData.url);
        return;
      } else if (m == "SMS") {
        window.open('sms:?body=' + shareData.msg);
        return;
      } else if (m == "Email") {
        window.location.href = 'mailto:?subject=' + shareData.title + '&body=' + shareData.msg + '\n\n' + shareData.url;
        return;
      }

      l = (window.screen.width / 2) - ((w / 2) + 10);
      t = (window.screen.height / 2) - ((h / 2) + 50);
      window.open(`https://${m.toLowerCase()}.com/share?url=${shareData.url}&title=${shareData.msg}`, m, `width=${w}, height=${h}, left=${l}, top=${t}`);

      sendEvent('Share via ' + m, shareData.titlePretty, m);
      share.value.visible = false;
    };

    const copyShareInfo = () => {
      navigator.clipboard.writeText(computedShareText.value).then(() => {
        share.value.isCopySuccess = true;
        share.value.isCopyFailure = false;
      }, () => {
        share.value.isCopySuccess = false;
        share.value.isCopyFailure = true;
      });
    };

    const closeShareScreen = () => {
      share.value.visible = false;
      share.value.isCopyFailure = false;
      share.value.isCopySuccess = false;
    };

    onBeforeMount(() => {
      if (window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('date')) {
          const urlDate = urlParams.get('date').toString();
          pullTitles(urlDate);
          pullActors(urlDate);
          formatDate(urlDate);
        }
      }
      if (!displayDate.value || !list.value) {
        pullTitles(today.value.format('YYYYMMDD'));
        pullActors(today.value.format('YYYYMMDD'));
        formatDate(today.value);
      }
    });

    return {
      expanded,
      titleCount,
      days,
      today,
      displayDate,
      displayDatePretty,
      firstDay,
      lastDay,
      list,
      actorList,
      share,
      showNextDay,
      showPrevDay,
      computedShareText,
      // randomActors,
      formatDate,
      pullTitles,
      dollars,
      showChange,
      prevDay,
      nextDay,
      shareMovie,
      shareVia,
      copyShareInfo,
      closeShareScreen
    };
  }
});

app.mount('#app');