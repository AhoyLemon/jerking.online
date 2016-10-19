// jshint -W098
var hairColors = [
  "brunette",
  "blonde",
  "redhead",
  "bald"
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
  female: [
  
  ],
  male: [
  
  ]
};

function generateHeight() {
  var x = Math.floor(Math.random() * (10 - 1)) + 10;
  var h;
  if (x == 1) {
    // This person is  very short.
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
  z[1] = parseInt(i);
  var height;
  if (z[1] > 0) {
    height = z[0] +"' " +z[1]+'"';
  } else {
    height = z[0] +" feet";
  }
  console.log(height);
}