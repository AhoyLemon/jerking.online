// jshint -W117
// jshint -W098
function sendEvent(c, a, l, v) {
  if (v) {
    ga('send', 'event', { eventCategory: c, eventAction: a, eventLabel: l, eventValue:v });
    if (testing) {
      
    }
    
  } else if (l) {
    ga('send', 'event', { eventCategory: c, eventAction: a, eventLabel: l });
    if (testing) {
      console.log('CATEGORY: '+c+', ACTION:'+a+', LABEL:'+l);
    }
  } else {
    ga('send', 'event', { eventCategory: c, eventAction: a });
    if (testing) {
      console.log('CATEGORY: '+c+', ACTION:'+a);
    }
  }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}