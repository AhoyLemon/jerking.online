// jshint -W098
// jshint -W117
var hairColors = [
  "brunette",
  "brunette",
  "blonde",
  "blonde",
  "blonde",
  "redhead",
  "redhead",
  "bald",
  "blue"
];

var races = [
  "white",
  "black",
  "asian",
  "hispanic",
  "jewish",
];

var possibleKinks = [
  { name: "anal", odds: 40 },
  { name: "bdsm", odds: 25 },
  { name: "peeing", odds: 12 },
  { name: "foot stuff", odds: 12 },
  { name: "stuffed animals", odds: 3 },
  { name: "aspyxiation", odds: 7 },
  { name: "pie sitting", odds: 11 }
];

var possibleTags = [
  { name: "glasses", odds: 26 },
  { name: "hairy", odds: 16 },
  { name: "goth", odds: 16 },
  { name: "bald", odds: 16 },
  { name: "huge penis", odds:23, gender:"male" },
  { name: "tiny breasts", odds:16, gender:"female" },
  { name: "squirts", odds: 11, gender:"female" },
  { name: "many piercings", odds: 9 },
  { name: "excessive tattoos", odds: 11 }
];

var names = {
  female: {
    first: [
      "Crystal",
      "Tyffani",
      "Kristi",
      "Cynnymyn"
    ],
    last: [
      "Squirts",
      "Shameless",
    ],
    full: [
      "Candi Schoppe",
      "Tilda Sweatin",
      "Katherine Rugburn",
      "Audrey Rugburn",
      "Meryl Streaks",
      "Vivian Lay",
      "Miss Direction",
      "Wanda Cannons",
      "Kathy 'bates",
      "Faye Runaway",
      "Glenn Closer",
      "Kate Winslut",
      "Mary Steamvirgin",
      "Anna Can Dick",
      "Imogen Toots",
      "Hillary Skank",
      "Cherry Ontop"
    ]
  },
  male: {
    first: [
      "Lance",
      "Greg",
      "Garry",
    ],
    last: [
      "Hammers",
      "Bone",
      "Screw",
      "Bigg",
      "Tool"
    ],
    full: [
      "Ramm Rodd",
      "Juggalo Jake",
      "Romeo Void",
      "Slammy Haggar",
      "Keith Gayvids",
      "James Gandalf Weenie"
    ]
  },
  other: {
    first: [
      "X.",
      "Casey",
      "Bobbie",
      "Frankie",
      "Skylar"
    ],
    last: [
      "X",
      "Lixxx",
      "Fuxxx",
      "Dares",
      "Suxxx"
    ],
    full: [
      "Oxigin"
    ]
  }
};

var actor = {
  race: "",
  height: {}
};

var availableActors = [];

//var height;

function generateHeight() {
  var height = {
    feet: 0,
    inches: 0,
    cm: 0,
    description: "",
    english: "",
    metric: ""
  };
  var x = Math.floor(Math.random() * (8 - 1)) + 1;
  var h;
  if (x == 1) {
    // This person is very short
    height.description = "short";
    h = (Math.random() * (4.5 - 3.5) + 3.5).toFixed(1);
  } else if (x == 2) {
    height.description = "tall";
    // This person is very tall
    h = (Math.random() * (7.5 - 6.5) + 6.5).toFixed(1);
  } else {
    height.description = "normal";
    // This person is average height.
    h = (Math.random() * (6 - 5) + 5).toFixed(1);
  }
  
  var z = h.toString().split('.');
  var i = parseInt(z[1]) * 1.2;
  height.feet = parseInt(z[0]);
  height.inches = parseInt(z[1]);
  
  if (z[1] > 0) {
    height.english = z[0] +"' " +z[1]+'"';
  } else {
    height.english = z[0] +" feet";
  }
  
  var c = (height.feet * 30.48) + (height.inches * 2.54);
  height.cm = parseInt(c);
  height.metric = height.cm + "cm";
  //console.log(height);
  return height;
}

function generateRace() {
  var x = Math.floor(Math.random() * races.length);
  return races[x];
}

function generateHair() {
  var x = Math.floor(Math.random() * hairColors.length);
  return hairColors[x];
}

function assignGender() {
  var gender;
  var x = Math.floor(Math.random() * (10 - 1)) + 1;
  if (x < 5) {
    gender = "female";
  } else if (x < 8) {
    gender = "male";
  } else {
    gender = "other";
  }
  return gender;
}

function generateName(g) {
  var name;
  var n;
  var x;
  var y;
  if (g == "female") {
    n = names.female.first.length + names.female.full.length;
    x = Math.floor(Math.random() * n);
    if (x > names.female.first.length) {
      y = x - names.female.first.length;
      name = names.female.full[y];
    } else {
      x = Math.floor(Math.random() * names.female.first.length);
      y = Math.floor(Math.random() * names.female.last.length);
      name = names.female.first[x] + " " + names.female.last[y];
    }
  } else if (g == "male") {
    n = names.male.first.length + names.male.full.length;
    x = Math.floor(Math.random() * n);
    if (x > names.male.first.length) {
      y = x - names.male.first.length;
      name = names.male.full[y];
    } else {
      x = Math.floor(Math.random() * names.male.first.length);
      y = Math.floor(Math.random() * names.male.last.length);
      name = names.male.first[x] + " " + names.male.last[y];
    }
  } else if (g == "other") {
    n = names.other.first.length + names.other.full.length;
    x = Math.floor(Math.random() * n);
    if (x > names.other.first.length) {
      y = x - names.other.first.length;
      name = names.other.full[y];
    } else {
      x = Math.floor(Math.random() * names.other.first.length);
      y = Math.floor(Math.random() * names.other.last.length);
      name = names.other.first[x] + " " + names.other.last[y];
    }
  }
  return name;
}

function generateSexuality(g) {
  var sex = {
    female: false,
    male: false,
    other: false,
    description: "asexual"
  };
  var x;
  if (g == "female") {
    x = Math.floor(Math.random() * 10) + 1;
    if (x < 3) {
      sex.male = true;
      sex.description = "straight";
    } else if (x < 5) {
      sex.female = true;
      sex.description = "lesbian";
    } else if (x < 7) {
      sex.male = true;
      sex.female = true;
      sex.description = "bisexual";
    } else if (x < 10) {
      sex.male = true;
      sex.female = true;
      sex.other = true;
      sex.description = "undiscerning";
    }
  } else if (g == "male") {
    x = Math.floor(Math.random() * 10) + 1;
    if (x < 3) {
      sex.male = true;
      sex.description = "gay";
    } else if (x < 5) {
      sex.female = true;
      sex.description = "straight";
    } else if (x < 7) {
      sex.male = true;
      sex.female = true;
      sex.description = "bisexual";
    } else if (x < 10) {
      sex.male = true;
      sex.female = true;
      sex.other = true;
      sex.description = "undiscerning";
    }
  } else if (g == "other") {
    x = Math.floor(Math.random() * 10) + 1;
    if (x < 3) {
      sex.male = true;
      sex.description = "prefers men";
    } else if (x < 5) {
      sex.female = true;
      sex.description = "prefers women";
    } else if (x < 10) {
      sex.male = true;
      sex.female = true;
      sex.description = "undiscerning";
    }
  }
  return sex;
}

function generateKinks() {
  var k = shuffle(possibleKinks);
  console.log(k);
  var kinks = [];
  var x;
  $.each(possibleKinks, function(key, value) {
    x = Math.floor(Math.random() * 100);
    if (x < possibleKinks[key].odds) {
      kinks.push(possibleKinks[key].name);
    }
  });
  return kinks;
}

function generateTags(a) {
  var tags = [];
  if (a.height.description == "short" || a.height.description == "tall") {
    tags.push(a.height.description);
  }
  $.each(possibleTags, function(key, value) {
    x = Math.floor(Math.random() * 100);
    if (x < possibleTags[key].odds) {
      if (!possibleTags[key].gender || possibleTags[key].gender == a.gender) {
        tags.push(possibleTags[key].name);
      }
    }
  });
  return tags;
}

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
      if (v === false) {
        avoidArray.push(k);
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
  });
}

$('.porn-maker').on('click', 'article.cast', function() {
  $s = $(this);
  if (!$(this).hasClass('incompatible')) {
    $s.toggleClass('active');
    findMismatches();
  }
  var castNum = $('article.cast.active').length;
  if (castNum > 0) {
    $('#NextStep').attr('disabled', false);
    $('button[data-switch="plot"]').attr('disabled', false);
  } else {
    $('#NextStep').attr('disabled', true);
    $('button[data-switch="plot"]').attr('disabled', true);
  }
});