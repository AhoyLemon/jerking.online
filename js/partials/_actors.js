// jshint -W098
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

var actorTags = [
  "short",
  "glasses",
  "chubby",
  "hairy",
  "giant",
  "goth",
];

var actorDoes = [
  "watersports",
  "diapers",
  "foot stuff",
  "stuffed animals"
];

var names = {
  female: {
    white: [
      "Crystal",
      "Tyffani",
      "Libby",
      "Pepsi",
      "Jenny",
    ],
    black: [
      
    ],
    asian: [
      
    ],
    hispanic: [
      "Shu",
    ],
    jewish: [
      
    ],
    generic: [
      
      "Amber",
      "Brandy",
      "Candi",
      "Anastasia",
      "Jade",
      
      
      "Chantel",
      
      
    ]
  },
  male: [
    "Eddie",
    "Carlos",
  ],
  other: [
    
  ]
};

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
  var x = Math.floor(Math.random() * (10 - 1)) + 10;
  var h;
  if (x == 1) {
    height.description = "normal";
    h = (Math.random() * (4.5 - 3.5) + 3.5).toFixed(1);
  } else if (x == 2) {
    // This person is very tall
    h = (Math.random() * (7.5 - 6.5) + 6.5).toFixed(1);
  } else {
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
  var x = Math.floor(Math.random() * (10 - 1)) + 10;
  if (x < 4) {
    gender = "female";
  } else if (x < 8) {
    gender = "female";
  } else {
    gender = "intersectional";
  }
}