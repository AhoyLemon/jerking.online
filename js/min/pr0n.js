// jshint -W117
function sendEvent(c, a, l, v) {
  if (v) {
    //ga('send', 'event', { eventCategory: c, eventAction: a, eventLabel: l, eventValue:v });
    console.log('CATEGORY: '+c+', ACTION:'+a+', LABEL:'+l+', VALUE:'+v);
  } else if (l) {
    //ga('send', 'event', { eventCategory: c, eventAction: a, eventLabel: l });
    console.log('CATEGORY: '+c+', ACTION:'+a+', LABEL:'+l);
  } else {
    //ga('send', 'event', { eventCategory: c, eventAction: a });
    console.log('CATEGORY: '+c+', ACTION:'+a);
  }
  return false;
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
;// jshint -W098
var pornTitles = [
  "Trans Formers 2: Revenge of the Ballin'",
  "Das Booty",
  "Rogerin' Me",
  "Big Trouble in Little Vagina",
  "28 Cocks Later",
  "50 Fist Dates",
  "The Filth Element",
  "Let the White One In",
  "Fill Bill, vol 2",
  "Me, Myself in Irene",
  "Indiana Bones and the Temple of Poon",
  "I Broke My Back Mounting",
  "Rub, Lola! Rub!",
  "Even Reverse Cowgirls Get the Blues",
  "Raging Balls",
  "Dog Dick Afternoon",
  "Full Metal Dildo",
  "The Stepfather, Part II",
  "The African Drag Queen",
  "One Flew Into The Poopoo's Nest",
  "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum",
  "The Maltese Fistin",
  "The Pleasure of Sierra's Madre",
  "Midnight Ladyboy",
  "Rear Entry Widow",
  "A Streetwalker Named Desire&eacute;",
  "The Curious Case of Benjamin's Butthole",
  "Group Sex on the Bounty",
  "Guess Who Came On Dinner",
  "Breasts In Shows",
  "Six Days Seven Cocks",
  "Mr. Smith Goes Down on Washington",
  "Enslaving Private Ryan",
  "Rebel Without a Cooze",
  "The Lust of the Mohicans",
  "To Shave and Shave Not",
  "Hannah on Her Sisters",
  "All That Jizz",
  "Poonstruck",
  "GoodFellatas",
  "Veinspotting",
  "The Princess Ride",
  "No Cunt Free For Old Men",
  "Public Enemas",
  "On Her Majesty's Secret Cervix",
  "Gunfight at the KY Corral",
  "Pan's Labiarinth",
  "Pearl Necklace Harbor",
  "Bend Over, Like Beckham",
  "Scatatouille",
  "BALL-E",
  "Fuck Everlasting",
  "Wangs of New York",
  "The Tight Stuff",
  "Bang My Bum Slowly",
  "Strangers on a Tranny",
  "G*A*S*H",
  "Wet Hot American Hummer",
  "A Queer and Pleasant Stranger",
  "Glazing Arizona",
  "Motion Impossible",
  "Fannie Hall",
  "Fist Me Deadly",
  "Bright Lights, Big Titties",
  "The Color of a Money Shot",
  "Lawrence of a Labia",
  "Titty Titty Gang Bang",
  "Saturday Night Beaver",
  "Evil Head 2: Head By Dawn",
  "Pee Wee's Big Member",
  "The Fantastic Foursome",
  "Play With Misty For Me",
  "Dirty/Hairy",
  "The Squirt Locker",
  "Jiro Creams On Suki",
  "Poonrise Kingdom",
  "Django Chained",
  "Moneyballin",
  "Being Inside Elmo",
  "Attack The Cock",
  "How To Drain Your Dragon",
  "The Mud Wrestler",
  "Scott Pilgrim Vs Those Girls",
  "Fantastic Fucks, Mister",
  "Straight Into Conner",
  "Mad Maxxx: Furious Loads",
  "Stanford's Prisonsex Experiments",
  "Cum and Cummer",
  "Jiz and the Diaphragms",
  "Big Hero 16 Inch",
  "Tub Girl Time Machine",
  "Steve's Tugjobs",
  "Night At The Mapplethorpe Museum",
  "The Boy Shorts",
  "Fist Fist, Bang Bang",
  "In Sid Anus",
  "The Penis Movie",
  "CitizenWhore",
  "Atlas Chugged",
  "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob",
  "Robocuck",
  "Much Ado About Cumming",
  "Monsters' Pink",
  "12 Years A Slut",
  "Despicable Pee",
  "G.I. Joe: Masturbation",
  "2 Fast 2 Furry Puss",
  "Watersportsworld",
  "XXX: State of the Union: XXX",
  "Jerk/Off",
  "Spurtigo",
  "The Munchurian Candidass",
  "Glen, Garry, Glenn, Ross, and Six Other Guys",
  "One Blew Over The Cuckold's Nest",
  "The Bicycle Queef",
  "Boyz N The Clitoral Hood",
  "Gosford Porking",
  "The Dark Bros In: Fuck Soup",
  "The Assventures of Fuckaroo Buttzai Across The Gape Dimension",
  "Boobs! A Madea Porno",
  "Suicide Squat",
  "While You Were Peeping",
  "There's Someone Inside Mary",
  "The Nutting Professor",
  "Space Jammin'",
  "Whiskey, Tango, Facefuck",
  "Nutbusters",
  "Assassin's Cream",
  "Fingering Dory",
  "Alvin and the Fuckmunks 2: The Fuckuel",
  "Blumpkinhead",
  "American History XXX",
  "The Italian Blowjob",
  "Blowing For Columbine",
  "Star Whores: The Foreskin Awakens",
  
  // The Harry Potter Series
  "Hairy Twatter and the Pornographer's Bone",
  "Hairy Twatter and the Chamber of Secretions",
  "Hairy Twatter and the Prisoner of Ass Cabin",
  "Hairy Twatter and the Gobblin' of Your Spire",
  "Hairy Twatter and the Order of the Three Dicks",
  "Hairy Twatter and the Half Chub Prince",
  "Hairy Twatter and the Depth He Swallows",
  
  // These are all TV shows....
  "Welcome Back, Frotteur",
  "A Bit of Fry in Laurie",
  "Breaking Chad",
  "The Gang Bang Theory",
  "Boy Meat's World",
  "Nathan For Everyone",
  "Person of Incest",
  "Charles In Charles",
  "Better Ball Saul",
  "Haters Whack Off!",
  
  // Musicals...
  "Taint Must Be Shaven",
  "Anything Grows",
  "MILF Saigon",
  "Diddler on the Roof",
  "Man of La Muncha",
  "Arse Nick and Yo Face",
  "The Dong and I",
  "Guys and Guys",
  "Clamilton",
  "Bring in 'da Boys, Bring in 'da Spunk",
  "Scats"
];

var pornData = {
  20170101: [
    {title: "Cum and Cummer", take: 50126, change: "new" },
    {title: "The Lust of the Mohicans", take: 47572, change: "new" },
    {title: "Jiz and the Diaphragms", take: 43438, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 42610, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 39304, change: "new" },
    {title: "Haters Whack Off!", take: 38891, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 34915, change: "new" },
    {title: "Despicable Pee", take: 30909, change: "new" },
    {title: "Welcome Back, Frotteur", take: 30063, change: "new" },
    {title: "Monsters' Pink", take: 28367, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 26324, change: "new" },
    {title: "The Dong and I", take: 24898, change: "new" },
    {title: "Lawrence of a Labia", take: 22299, change: "new" },
    {title: "Better Ball Saul", take: 20043, change: "new" },
    {title: "Fist Me Deadly", take: 18197, change: "new" },
    {title: "Rebel Without a Cooze", take: 16592, change: "new" },
    {title: "Whiskey, Tango, Facefuck", take: 15948, change: "new" },
    {title: "Fingering Dory", take: 14772, change: "new" },
    {title: "A Queer and Pleasant Stranger", take: 13441, change: "new" },
    {title: "Strangers on a Tranny", take: 12996, change: "new" }
  ],
  20170102: [
    {title: "Jiz and the Diaphragms", take: 55055, change: "up" },
    {title: "The Lust of the Mohicans", take: 50573, change: "same" },
    {title: "Scott Pilgrim Vs Those Girls", take: 45760, change: "new" },
    {title: "Scats", take: 42500, change: "new" },
    {title: "The Stepfather, Part II", take: 39899, change: "new" },
    {title: "The Filth Element", take: 38293, change: "new" },
    {title: "The Squirt Locker", take: 34117, change: "new" },
    {title: "G*A*S*H", take: 30626, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 27151, change: "new" },
    {title: "Hannah on Her Sisters", take: 26735, change: "new" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 23843, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 21881, change: "down" },
    {title: "Clamilton", take: 20810, change: "new" },
    {title: "Group Sex on the Bounty", take: 18445, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 18122, change: "down" },
    {title: "Star Whores: The Foreskin Awakens", take: 16196, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 14726, change: "down" },
    {title: "Welcome Back, Frotteur", take: 14000, change: "down" },
    {title: "The Gang Bang Theory", take: 13140, change: "new" },
    {title: "Monsters' Pink", take: 11611, change: "down" }
], 
  20170103: [
    {title: "Scott Pilgrim Vs Those Girls", take: 56050, change: "up" },
    {title: "Fist Me Deadly", take: 51519, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 45677, change: "new" },
    {title: "Space Jammin'", take: 40540, change: "new" },
    {title: "Scats", take: 38792, change: "down" },
    {title: "Person of Incest", take: 35517, change: "new" },
    {title: "Big Hero 16 Inch", take: 32922, change: "new" },
    {title: "The Stepfather, Part II", take: 32223, change: "down" },
    {title: "GoodFellatas", take: 30663, change: "new" },
    {title: "Charles In Charles", take: 29808, change: "new" },
    {title: "The Nutting Professor", take: 27632, change: "new" },
    {title: "Gosford Porking", take: 26193, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 24669, change: "down" },
    {title: "Straight Into Conner", take: 22135, change: "new" },
    {title: "The Lust of the Mohicans", take: 20103, change: "down" },
    {title: "G*A*S*H", take: 17974, change: "down" },
    {title: "Pearl Necklace Harbor", take: 17586, change: "new" },
    {title: "The Filth Element", take: 16785, change: "down" },
    {title: "Hannah on Her Sisters", take: 16153, change: "down" },
    {title: "A Queer and Pleasant Stranger", take: 14739, change: "new" }
], 
  20170104: [
    {title: "A Streetwalker Named Desireé", take: 52248, change: "new" },
    {title: "Boobs! A Madea Porno", take: 47757, change: "new" },
    {title: "Watersportsworld", take: 43745, change: "new" },
    {title: "Fist Me Deadly", take: 40983, change: "down" },
    {title: "Scats", take: 39646, change: "same" },
    {title: "Titty Titty Gang Bang", take: 38904, change: "new" },
    {title: "Rear Entry Widow", take: 34421, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 30590, change: "new" },
    {title: "Person of Incest", take: 29242, change: "down" },
    {title: "One Flew Into The Poopoo's Nest", take: 28203, change: "down" },
    {title: "Big Trouble in Little Vagina", take: 25429, change: "new" },
    {title: "Space Jammin'", take: 24225, change: "down" },
    {title: "Atlas Chugged", take: 21918, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 20974, change: "down" },
    {title: "Charles In Charles", take: 20289, change: "down" },
    {title: "GoodFellatas", take: 19507, change: "down" },
    {title: "Gosford Porking", take: 18078, change: "down" },
    {title: "Group Sex on the Bounty", take: 16696, change: "new" },
    {title: "The Stepfather, Part II", take: 14934, change: "down" },
    {title: "Mr. Smith Goes Down on Washington", take: 13885, change: "down" }
], 
  20170105: [
    {title: "Boobs! A Madea Porno", take: 47315, change: "up" },
    {title: "Watersportsworld", take: 45661, change: "up" },
    {title: "Fist Me Deadly", take: 42283, change: "up" },
    {title: "Straight Into Conner", take: 40339, change: "new" },
    {title: "Better Ball Saul", take: 36347, change: "new" },
    {title: "Let the White One In", take: 32586, change: "new" },
    {title: "Midnight Ladyboy", take: 29951, change: "new" },
    {title: "Person of Incest", take: 27119, change: "up" },
    {title: "Scats", take: 23939, change: "down" },
    {title: "Rear Entry Widow", take: 21643, change: "down" },
    {title: "Being Inside Elmo", take: 19643, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 19145, change: "new" },
    {title: "Titty Titty Gang Bang", take: 18916, change: "down" },
    {title: "Star Whores: The Foreskin Awakens", take: 17816, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 16266, change: "down" },
    {title: "Saturday Night Beaver", take: 15008, change: "new" },
    {title: "Atlas Chugged", take: 14370, change: "down" },
    {title: "Space Jammin'", take: 14054, change: "down" },
    {title: "One Flew Into The Poopoo's Nest", take: 13423, change: "down" },
    {title: "Charles In Charles", take: 11993, change: "down" }
], 
  20170106: [
    {title: "Better Ball Saul", take: 51512, change: "up" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 45933, change: "new" },
    {title: "Watersportsworld", take: 45038, change: "down" },
    {title: "Straight Into Conner", take: 43625, change: "same" },
    {title: "Fist Me Deadly", take: 40763, change: "down" },
    {title: "Let the White One In", take: 40249, change: "same" },
    {title: "Moneyballin", take: 38554, change: "new" },
    {title: "Breasts In Shows", take: 36485, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 34409, change: "new" },
    {title: "The Filth Element", take: 32499, change: "new" },
    {title: "No Cunt Free For Old Men", take: 31561, change: "new" },
    {title: "In Sid Anus", take: 30573, change: "new" },
    {title: "Midnight Ladyboy", take: 26972, change: "down" },
    {title: "Diddler on the Roof", take: 25535, change: "new" },
    {title: "Person of Incest", take: 24212, change: "down" },
    {title: "There's Someone Inside Mary", take: 23865, change: "new" },
    {title: "Bang My Bum Slowly", take: 22842, change: "new" },
    {title: "Being Inside Elmo", take: 20510, change: "down" },
    {title: "A Queer and Pleasant Stranger", take: 18253, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 16313, change: "down" }
], 
  20170107: [
    {title: "Hairy Twatter and the Depth He Swallows", take: 48359, change: "up" },
    {title: "Hannah on Her Sisters", take: 45742, change: "new" },
    {title: "Django Chained", take: 40953, change: "new" },
    {title: "Better Ball Saul", take: 36212, change: "down" },
    {title: "Blumpkinhead", take: 32719, change: "new" },
    {title: "Watersportsworld", take: 32320, change: "down" },
    {title: "Hairy Twatter and the Pornographer's Bone", take: 30361, change: "new" },
    {title: "American History XXX", take: 29111, change: "new" },
    {title: "Straight Into Conner", take: 26624, change: "down" },
    {title: "Let the White One In", take: 26225, change: "down" },
    {title: "Bend Over, Like Beckham", take: 23236, change: "new" },
    {title: "Fist Me Deadly", take: 21477, change: "down" },
    {title: "Group Sex on the Bounty", take: 19283, change: "new" },
    {title: "Breasts In Shows", take: 17365, change: "down" },
    {title: "The Pleasure of Sierra's Madre", take: 16889, change: "down" },
    {title: "Moneyballin", take: 15416, change: "down" },
    {title: "I Broke My Back Mounting", take: 14817, change: "new" },
    {title: "No Cunt Free For Old Men", take: 13979, change: "down" },
    {title: "One Blew Over The Cuckold's Nest", take: 13320, change: "new" },
    {title: "In Sid Anus", take: 12183, change: "down" }
], 
  20170108: [
    {title: "Hairy Twatter and the Half Chub Prince", take: 55186, change: "new" },
    {title: "The Gang Bang Theory", take: 49784, change: "new" },
    {title: "Wangs of New York", take: 46672, change: "new" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 46051, change: "down" },
    {title: "Fannie Hall", take: 43036, change: "new" },
    {title: "Monsters' Pink", take: 38597, change: "new" },
    {title: "Poonrise Kingdom", take: 38092, change: "new" },
    {title: "The Bicycle Queef", take: 35648, change: "new" },
    {title: "GoodFellatas", take: 33655, change: "new" },
    {title: "Hannah on Her Sisters", take: 30939, change: "down" },
    {title: "Titty Titty Gang Bang", take: 28739, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 27409, change: "new" },
    {title: "The Maltese Fistin", take: 24575, change: "new" },
    {title: "Better Ball Saul", take: 22531, change: "down" },
    {title: "Blumpkinhead", take: 20913, change: "down" },
    {title: "There's Someone Inside Mary", take: 18843, change: "new" },
    {title: "Attack The Cock", take: 17391, change: "new" },
    {title: "Guess Who Came On Dinner", take: 15741, change: "new" },
    {title: "Watersportsworld", take: 14931, change: "down" },
    {title: "Django Chained", take: 13854, change: "down" }
], 
  20170109: [
    {title: "The Gang Bang Theory", take: 55190, change: "up" },
    {title: "Wangs of New York", take: 53823, change: "up" },
    {title: "2 Fast 2 Furry Puss", take: 51328, change: "new" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 46764, change: "same" },
    {title: "Poonrise Kingdom", take: 44649, change: "up" },
    {title: "The Bicycle Queef", take: 41049, change: "up" },
    {title: "Titty Titty Gang Bang", take: 36712, change: "up" },
    {title: "Scott Pilgrim Vs Those Girls", take: 33521, change: "up" },
    {title: "The Maltese Fistin", take: 33003, change: "up" },
    {title: "Fannie Hall", take: 32247, change: "down" },
    {title: "Blumpkinhead", take: 30827, change: "up" },
    {title: "GoodFellatas", take: 29325, change: "down" },
    {title: "Attack The Cock", take: 27799, change: "up" },
    {title: "There's Someone Inside Mary", take: 26985, change: "up" },
    {title: "Hannah on Her Sisters", take: 25828, change: "down" },
    {title: "Hairy Twatter and the Half Chub Prince", take: 24787, change: "down" },
    {title: "Django Chained", take: 23024, change: "up" },
    {title: "Guess Who Came On Dinner", take: 21220, change: "same" },
    {title: "Watersportsworld", take: 20583, change: "same" },
    {title: "Monsters' Pink", take: 19094, change: "down" }
], 
  20170110: [
    {title: "Jiz and the Diaphragms", take: 52227, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 46535, change: "new" },
    {title: "Lawrence of a Labia", take: 43996, change: "new" },
    {title: "Full Metal Dildo", take: 42219, change: "new" },
    {title: "Wangs of New York", take: 40850, change: "down" },
    {title: "Hairy Twatter and the Chamber of Secretions", take: 35955, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 33682, change: "new" },
    {title: "Jerk/Off", take: 30563, change: "new" },
    {title: "Hairy Twatter and the Pornographer's Bone", take: 27538, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 26951, change: "new" },
    {title: "Motion Impossible", take: 26530, change: "new" },
    {title: "Poonstruck", take: 25288, change: "new" },
    {title: "2 Fast 2 Furry Puss", take: 24197, change: "down" },
    {title: "The Boy Shorts", take: 22847, change: "new" },
    {title: "The Munchurian Candidass", take: 21107, change: "new" },
    {title: "Whiskey, Tango, Facefuck", take: 18877, change: "new" },
    {title: "Blowing For Columbine", take: 17512, change: "new" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 15635, change: "down" },
    {title: "Titty Titty Gang Bang", take: 14923, change: "down" },
    {title: "Welcome Back, Frotteur", take: 14204, change: "new" }
], 
  20170111: [
    {title: "Django Chained", take: 47740, change: "new" },
    {title: "The Color of a Money Shot", take: 43639, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 39540, change: "new" },
    {title: "Me, Myself in Irene", take: 38987, change: "new" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 34486, change: "new" },
    {title: "The Maltese Fistin", take: 32520, change: "new" },
    {title: "Jiz and the Diaphragms", take: 31172, change: "down" },
    {title: "There's Someone Inside Mary", take: 29457, change: "new" },
    {title: "Charles In Charles", take: 27091, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 26561, change: "new" },
    {title: "Full Metal Dildo", take: 26164, change: "down" },
    {title: "G.I. Joe: Masturbation", take: 25316, change: "down" },
    {title: "Rebel Without a Cooze", take: 23493, change: "new" },
    {title: "Fantastic Fucks, Mister", take: 21761, change: "new" },
    {title: "Wangs of New York", take: 19980, change: "down" },
    {title: "The Italian Blowjob", take: 19599, change: "new" },
    {title: "Hairy Twatter and the Chamber of Secretions", take: 18054, change: "down" },
    {title: "Lawrence of a Labia", take: 16428, change: "down" },
    {title: "Better Ball Saul", take: 14489, change: "new" },
    {title: "Fuck Everlasting", take: 12751, change: "new" }
], 
  20170112: [
    {title: "Mad Maxxx: Furious Loads", take: 46327, change: "up" },
    {title: "Scott Pilgrim Vs Those Girls", take: 43303, change: "new" },
    {title: "The Color of a Money Shot", take: 42534, change: "down" },
    {title: "The Maltese Fistin", take: 39585, change: "up" },
    {title: "Taint Must Be Shaven", take: 35153, change: "new" },
    {title: "How To Drain Your Dragon", take: 33719, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 30610, change: "new" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 28613, change: "down" },
    {title: "The African Drag Queen", take: 28212, change: "new" },
    {title: "Jiz and the Diaphragms", take: 27600, change: "down" },
    {title: "Me, Myself in Irene", take: 24865, change: "down" },
    {title: "Play With Misty For Me", take: 24486, change: "new" },
    {title: "Charles In Charles", take: 22027, change: "down" },
    {title: "There's Someone Inside Mary", take: 21458, change: "down" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 20551, change: "down" },
    {title: "The Dong and I", take: 18872, change: "new" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 18597, change: "new" },
    {title: "Breaking Chad", take: 17340, change: "new" },
    {title: "Public Enemas", take: 15720, change: "new" },
    {title: "28 Cocks Later", take: 14120, change: "new" }
], 
  20170113: [
    {title: "The Penis Movie", take: 54738, change: "new" },
    {title: "Veinspotting", take: 49653, change: "new" },
    {title: "Breasts In Shows", take: 44593, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 43552, change: "down" },
    {title: "The Curious Case of Benjamin's Butthole", take: 42025, change: "new" },
    {title: "Raging Balls", take: 38189, change: "new" },
    {title: "The Maltese Fistin", take: 33872, change: "down" },
    {title: "The Color of a Money Shot", take: 31036, change: "down" },
    {title: "Taint Must Be Shaven", take: 29375, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 27385, change: "down" },
    {title: "Lawrence of a Labia", take: 24324, change: "new" },
    {title: "How To Drain Your Dragon", take: 21784, change: "down" },
    {title: "Nutbusters", take: 21422, change: "new" },
    {title: "In Sid Anus", take: 20260, change: "new" },
    {title: "The Fantastic Foursome", take: 19752, change: "new" },
    {title: "The African Drag Queen", take: 18658, change: "down" },
    {title: "Strangers on a Tranny", take: 17141, change: "new" },
    {title: "The Squirt Locker", take: 16947, change: "new" },
    {title: "Me, Myself in Irene", take: 15385, change: "down" },
    {title: "Dog Dick Afternoon", take: 13618, change: "new" }
], 
  20170114: [
    {title: "Scott Pilgrim Vs Those Girls", take: 49360, change: "up" },
    {title: "Raging Balls", take: 47726, change: "up" },
    {title: "Das Booty", take: 46176, change: "new" },
    {title: "The Color of a Money Shot", take: 42141, change: "up" },
    {title: "Veinspotting", take: 38644, change: "down" },
    {title: "The Curious Case of Benjamin's Butthole", take: 36634, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 32283, change: "up" },
    {title: "Breasts In Shows", take: 28973, change: "down" },
    {title: "Nutbusters", take: 26315, change: "up" },
    {title: "How To Drain Your Dragon", take: 24722, change: "up" },
    {title: "The Stepfather, Part II", take: 21777, change: "new" },
    {title: "Lawrence of a Labia", take: 21239, change: "down" },
    {title: "The Fantastic Foursome", take: 20334, change: "up" },
    {title: "In Sid Anus", take: 19303, change: "same" },
    {title: "The Maltese Fistin", take: 17750, change: "down" },
    {title: "Dog Dick Afternoon", take: 16829, change: "up" },
    {title: "Strangers on a Tranny", take: 16462, change: "same" },
    {title: "Taint Must Be Shaven", take: 15897, change: "down" },
    {title: "The Squirt Locker", take: 14720, change: "down" },
    {title: "The African Drag Queen", take: 12993, change: "down" }
], 
  20170115: [
    {title: "Das Booty", take: 57264, change: "up" },
    {title: "A Bit of Fry in Laurie", take: 51337, change: "new" },
    {title: "While You Were Peeping", take: 46693, change: "new" },
    {title: "The Color of a Money Shot", take: 41103, change: "same" },
    {title: "Me, Myself in Irene", take: 36728, change: "new" },
    {title: "Rebel Without a Cooze", take: 32531, change: "new" },
    {title: "Public Enemas", take: 29162, change: "new" },
    {title: "The Curious Case of Benjamin's Butthole", take: 27577, change: "down" },
    {title: "Raging Balls", take: 24782, change: "down" },
    {title: "Breasts In Shows", take: 23210, change: "down" },
    {title: "The Munchurian Candidass", take: 22620, change: "new" },
    {title: "The Tight Stuff", take: 20613, change: "new" },
    {title: "Hairy Twatter and the Prisoner of Ass Cabin", take: 18919, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 16713, change: "down" },
    {title: "Arse Nick and Yo Face", take: 16299, change: "new" },
    {title: "The Stepfather, Part II", take: 15324, change: "down" },
    {title: "How To Drain Your Dragon", take: 14367, change: "down" },
    {title: "Jiro Creams On Suki", take: 13953, change: "new" },
    {title: "Clamilton", take: 13603, change: "new" },
    {title: "Nutbusters", take: 12110, change: "down" }
], 
  20170116: [
    {title: "While You Were Peeping", take: 51770, change: "up" },
    {title: "Me, Myself in Irene", take: 50108, change: "up" },
    {title: "28 Cocks Later", take: 45202, change: "new" },
    {title: "The Color of a Money Shot", take: 43296, change: "same" },
    {title: "Lawrence of a Labia", take: 39829, change: "new" },
    {title: "Rebel Without a Cooze", take: 36417, change: "same" },
    {title: "A Bit of Fry in Laurie", take: 34127, change: "down" },
    {title: "Public Enemas", take: 31338, change: "down" },
    {title: "Boy Meat's World", take: 30780, change: "new" },
    {title: "Moneyballin", take: 29008, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 28178, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 25273, change: "new" },
    {title: "Let the White One In", take: 22388, change: "new" },
    {title: "Dog Dick Afternoon", take: 21786, change: "new" },
    {title: "The Curious Case of Benjamin's Butthole", take: 19317, change: "down" },
    {title: "Scatatouille", take: 17921, change: "new" },
    {title: "Raging Balls", take: 16422, change: "down" },
    {title: "One Blew Over The Cuckold's Nest", take: 14456, change: "new" },
    {title: "Enslaving Private Ryan", take: 12823, change: "new" },
    {title: "Titty Titty Gang Bang", take: 12230, change: "new" }
], 
  20170117: [
    {title: "28 Cocks Later", take: 50977, change: "up" },
    {title: "Me, Myself in Irene", take: 47634, change: "same" },
    {title: "A Queer and Pleasant Stranger", take: 45968, change: "new" },
    {title: "The Lust of the Mohicans", take: 41985, change: "new" },
    {title: "Lawrence of a Labia", take: 40869, change: "same" },
    {title: "The Dong and I", take: 37962, change: "new" },
    {title: "The Color of a Money Shot", take: 36608, change: "down" },
    {title: "Mr. Smith Goes Down on Washington", take: 32974, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 30140, change: "new" },
    {title: "Straight Into Conner", take: 28866, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 27058, change: "down" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 25282, change: "new" },
    {title: "Watersportsworld", take: 23050, change: "new" },
    {title: "Rebel Without a Cooze", take: 22799, change: "down" },
    {title: "Public Enemas", take: 20950, change: "down" },
    {title: "GoodFellatas", take: 19870, change: "new" },
    {title: "While You Were Peeping", take: 19322, change: "down" },
    {title: "Stanford's Prisonsex Experiments", take: 17829, change: "new" },
    {title: "Moneyballin", take: 17404, change: "down" },
    {title: "G.I. Joe: Masturbation", take: 15328, change: "down" }
], 
  20170118: [
    {title: "Anything Grows", take: 45661, change: "new" },
    {title: "The Lust of the Mohicans", take: 45179, change: "up" },
    {title: "Tub Girl Time Machine", take: 40918, change: "new" },
    {title: "G*A*S*H", take: 39418, change: "new" },
    {title: "Lawrence of a Labia", take: 37794, change: "same" },
    {title: "Me, Myself in Irene", take: 34569, change: "down" },
    {title: "The Color of a Money Shot", take: 33841, change: "same" },
    {title: "Mr. Smith Goes Down on Washington", take: 32195, change: "same" },
    {title: "Straight Into Conner", take: 28501, change: "up" },
    {title: "The Dark Bros In: Fuck Soup", take: 26058, change: "down" },
    {title: "The Filth Element", take: 25342, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 24031, change: "same" },
    {title: "A Queer and Pleasant Stranger", take: 23735, change: "down" },
    {title: "A Bit of Fry in Laurie", take: 23460, change: "down" },
    {title: "Midnight Ladyboy", take: 21721, change: "new" },
    {title: "GoodFellatas", take: 19951, change: "same" },
    {title: "While You Were Peeping", take: 17955, change: "same" },
    {title: "Stanford's Prisonsex Experiments", take: 16804, change: "same" },
    {title: "Moneyballin", take: 15952, change: "same" },
    {title: "Watersportsworld", take: 15006, change: "down" }
], 
  20170119: [
    {title: "G*A*S*H", take: 54411, change: "up" },
    {title: "Tub Girl Time Machine", take: 53384, change: "up" },
    {title: "Mr. Smith Goes Down on Washington", take: 51441, change: "up" },
    {title: "Lawrence of a Labia", take: 49691, change: "up" },
    {title: "The Dark Bros In: Fuck Soup", take: 46506, change: "up" },
    {title: "Big Trouble in Little Vagina", take: 42323, change: "new" },
    {title: "In Sid Anus", take: 41017, change: "new" },
    {title: "The Lust of the Mohicans", take: 38518, change: "down" },
    {title: "Me, Myself in Irene", take: 36995, change: "down" },
    {title: "Anything Grows", take: 32856, change: "down" },
    {title: "A Bit of Fry in Laurie", take: 29297, change: "up" },
    {title: "The Color of a Money Shot", take: 28314, change: "down" },
    {title: "Straight Into Conner", take: 25048, change: "down" },
    {title: "A Queer and Pleasant Stranger", take: 23373, change: "down" },
    {title: "While You Were Peeping", take: 22024, change: "up" },
    {title: "GoodFellatas", take: 21300, change: "same" },
    {title: "The Italian Blowjob", take: 19681, change: "new" },
    {title: "Moneyballin", take: 19203, change: "up" },
    {title: "Watersportsworld", take: 18604, change: "up" },
    {title: "Stanford's Prisonsex Experiments", take: 17006, change: "down" }
], 
  20170120: [
    {title: "The Pleasure of Sierra's Madre", take: 47863, change: "new" },
    {title: "Tub Girl Time Machine", take: 42558, change: "same" },
    {title: "Mr. Smith Goes Down on Washington", take: 41674, change: "same" },
    {title: "Saturday Night Beaver", take: 37142, change: "new" },
    {title: "G*A*S*H", take: 35485, change: "down" },
    {title: "Fist Me Deadly", take: 31512, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 28793, change: "new" },
    {title: "Wangs of New York", take: 28300, change: "new" },
    {title: "Lawrence of a Labia", take: 26161, change: "down" },
    {title: "12 Years A Slut", take: 25900, change: "new" },
    {title: "Guys and Guys", take: 24000, change: "new" },
    {title: "Boobs! A Madea Porno", take: 22690, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 20091, change: "down" },
    {title: "Gosford Porking", take: 19166, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 18880, change: "new" },
    {title: "Fantastic Fucks, Mister", take: 17994, change: "new" },
    {title: "Attack The Cock", take: 16870, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 15420, change: "down" },
    {title: "Dog Dick Afternoon", take: 14102, change: "new" },
    {title: "Me, Myself in Irene", take: 13478, change: "down" }
], 
  20170121: [
    {title: "50 Fist Dates", take: 50400, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 45435, change: "up" },
    {title: "Poonrise Kingdom", take: 42857, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 40159, change: "down" },
    {title: "Breaking Chad", take: 36850, change: "new" },
    {title: "Glazing Arizona", take: 32769, change: "new" },
    {title: "G*A*S*H", take: 32460, change: "down" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 31883, change: "down" },
    {title: "The Bicycle Queef", take: 31492, change: "new" },
    {title: "Lawrence of a Labia", take: 28150, change: "down" },
    {title: "Fist Me Deadly", take: 25872, change: "down" },
    {title: "Saturday Night Beaver", take: 24710, change: "down" },
    {title: "Straight Into Conner", take: 21813, change: "new" },
    {title: "Wangs of New York", take: 19903, change: "down" },
    {title: "Boobs! A Madea Porno", take: 19186, change: "down" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 18668, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 17423, change: "down" },
    {title: "G.I. Joe: Masturbation", take: 15860, change: "down" },
    {title: "12 Years A Slut", take: 14987, change: "down" },
    {title: "Gosford Porking", take: 14829, change: "down" }
], 
  20170122: [
    {title: "Big Hero 16 Inch", take: 52020, change: "new" },
    {title: "The Boy Shorts", take: 46378, change: "new" },
    {title: "Wet Hot American Hummer", take: 44758, change: "new" },
    {title: "Rogerin' Me", take: 40872, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 38239, change: "down" },
    {title: "A Bit of Fry in Laurie", take: 36320, change: "new" },
    {title: "The Munchurian Candidass", take: 32381, change: "new" },
    {title: "Breaking Chad", take: 30925, change: "down" },
    {title: "50 Fist Dates", take: 28675, change: "down" },
    {title: "Bend Over, Like Beckham", take: 25256, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 24154, change: "down" },
    {title: "Scatatouille", take: 21575, change: "new" },
    {title: "G*A*S*H", take: 21329, change: "down" },
    {title: "The Gang Bang Theory", take: 20404, change: "new" },
    {title: "Full Metal Dildo", take: 18797, change: "new" },
    {title: "Glazing Arizona", take: 16623, change: "down" },
    {title: "The Mud Wrestler", take: 15767, change: "new" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 15190, change: "new" },
    {title: "Poonrise Kingdom", take: 14933, change: "down" },
    {title: "The Bicycle Queef", take: 14681, change: "down" }
], 
  20170123: [
    {title: "Breasts In Shows", take: 49574, change: "new" },
    {title: "Blumpkinhead", take: 49039, change: "new" },
    {title: "Wet Hot American Hummer", take: 47447, change: "same" },
    {title: "Mr. Smith Goes Down on Washington", take: 45524, change: "up" },
    {title: "Fill Bill, vol 2", take: 42733, change: "new" },
    {title: "Fingering Dory", take: 41356, change: "new" },
    {title: "Motion Impossible", take: 37450, change: "new" },
    {title: "Hannah on Her Sisters", take: 32975, change: "new" },
    {title: "Hairy Twatter and the Gobblin' of Your Spire", take: 29061, change: "new" },
    {title: "The Boy Shorts", take: 25588, change: "down" },
    {title: "Rogerin' Me", take: 22520, change: "down" },
    {title: "Breaking Chad", take: 21733, change: "down" },
    {title: "One Blew Over The Cuckold's Nest", take: 19823, change: "new" },
    {title: "Clamilton", take: 18426, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 16971, change: "down" },
    {title: "The Dong and I", take: 16581, change: "new" },
    {title: "Poonstruck", take: 14948, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 13498, change: "down" },
    {title: "Scatatouille", take: 12028, change: "down" },
    {title: "Night At The Mapplethorpe Museum", take: 11883, change: "new" }
], 
  20170124: [
    {title: "One Flew Into The Poopoo's Nest", take: 55893, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 50281, change: "up" },
    {title: "Big Trouble in Little Vagina", take: 49587, change: "new" },
    {title: "Fingering Dory", take: 44780, change: "up" },
    {title: "Blumpkinhead", take: 44147, change: "down" },
    {title: "Fill Bill, vol 2", take: 38959, change: "down" },
    {title: "The Filth Element", take: 35537, change: "new" },
    {title: "Motion Impossible", take: 32010, change: "down" },
    {title: "Wet Hot American Hummer", take: 30811, change: "down" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 30305, change: "new" },
    {title: "Hannah on Her Sisters", take: 28932, change: "down" },
    {title: "Rogerin' Me", take: 27160, change: "down" },
    {title: "All That Jizz", take: 25719, change: "new" },
    {title: "In Sid Anus", take: 24303, change: "new" },
    {title: "Hairy Twatter and the Gobblin' of Your Spire", take: 21949, change: "down" },
    {title: "Boobs! A Madea Porno", take: 20032, change: "new" },
    {title: "Man of La Muncha", take: 18420, change: "new" },
    {title: "Titty Titty Gang Bang", take: 16220, change: "new" },
    {title: "Big Hero 16 Inch", take: 16038, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 14779, change: "down" }
], 
  20170125: [
    {title: "Mr. Smith Goes Down on Washington", take: 45811, change: "up" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 41449, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 36668, change: "down" },
    {title: "Fingering Dory", take: 36209, change: "same" },
    {title: "The African Drag Queen", take: 31965, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 31197, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 28752, change: "new" },
    {title: "Me, Myself in Irene", take: 26364, change: "new" },
    {title: "The Filth Element", take: 25443, change: "down" },
    {title: "Boyz N The Clitoral Hood", take: 24204, change: "new" },
    {title: "Motion Impossible", take: 23882, change: "down" },
    {title: "Blumpkinhead", take: 23159, change: "down" },
    {title: "Wet Hot American Hummer", take: 22043, change: "down" },
    {title: "Rear Entry Widow", take: 21688, change: "new" },
    {title: "Clamilton", take: 19933, change: "new" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 18368, change: "down" },
    {title: "XXX: State of the Union: XXX", take: 17831, change: "new" },
    {title: "Fill Bill, vol 2", take: 17259, change: "down" },
    {title: "Rogerin' Me", take: 15207, change: "down" },
    {title: "In Sid Anus", take: 13962, change: "down" }
], 
  20170126: [
    {title: "I Broke My Back Mounting", take: 48736, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 47038, change: "up" },
    {title: "The Squirt Locker", take: 45224, change: "new" },
    {title: "Fingering Dory", take: 41056, change: "same" },
    {title: "Hairy Twatter and the Half Chub Prince", take: 39982, change: "new" },
    {title: "50 Fist Dates", take: 35975, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 31932, change: "same" },
    {title: "Night At The Mapplethorpe Museum", take: 28408, change: "new" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 26369, change: "down" },
    {title: "The Penis Movie", take: 24882, change: "new" },
    {title: "Me, Myself in Irene", take: 22943, change: "down" },
    {title: "Jiro Creams On Suki", take: 21452, change: "new" },
    {title: "The African Drag Queen", take: 19342, change: "down" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 19005, change: "new" },
    {title: "Wet Hot American Hummer", take: 17944, change: "down" },
    {title: "The Filth Element", take: 17048, change: "down" },
    {title: "Clamilton", take: 15891, change: "down" },
    {title: "Motion Impossible", take: 14651, change: "down" },
    {title: "Big Trouble in Little Vagina", take: 13682, change: "down" },
    {title: "Boyz N The Clitoral Hood", take: 13434, change: "down" }
], 
  20170127: [
    {title: "Watersportsworld", take: 47623, change: "new" },
    {title: "Jiz and the Diaphragms", take: 42295, change: "new" },
    {title: "Poonrise Kingdom", take: 38086, change: "new" },
    {title: "Man of La Muncha", take: 35190, change: "new" },
    {title: "Hairy Twatter and the Half Chub Prince", take: 31503, change: "same" },
    {title: "GoodFellatas", take: 31094, change: "new" },
    {title: "Fingering Dory", take: 30232, change: "down" },
    {title: "50 Fist Dates", take: 29341, change: "down" },
    {title: "Scatatouille", take: 28877, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 26039, change: "down" },
    {title: "The Squirt Locker", take: 24519, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 21695, change: "down" },
    {title: "The Curious Case of Benjamin's Butthole", take: 20454, change: "new" },
    {title: "All That Jizz", take: 19063, change: "new" },
    {title: "The Lust of the Mohicans", take: 16883, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 15271, change: "down" },
    {title: "Glazing Arizona", take: 14366, change: "new" },
    {title: "I Broke My Back Mounting", take: 12676, change: "down" },
    {title: "Fist Me Deadly", take: 11925, change: "new" },
    {title: "The Mud Wrestler", take: 10678, change: "new" }
], 
  20170128: [
    {title: "Gunfight at the KY Corral", take: 50069, change: "new" },
    {title: "Public Enemas", take: 44541, change: "new" },
    {title: "Man of La Muncha", take: 42959, change: "up" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 39019, change: "new" },
    {title: "GoodFellatas", take: 35110, change: "up" },
    {title: "Hairy Twatter and the Half Chub Prince", take: 32553, change: "down" },
    {title: "Scats", take: 28935, change: "new" },
    {title: "Poonrise Kingdom", take: 28256, change: "down" },
    {title: "Fingering Dory", take: 25471, change: "down" },
    {title: "Jiz and the Diaphragms", take: 25024, change: "down" },
    {title: "50 Fist Dates", take: 23471, change: "down" },
    {title: "BALL-E", take: 21625, change: "new" },
    {title: "Rub, Lola! Rub!", take: 19102, change: "new" },
    {title: "Haters Whack Off!", take: 18079, change: "new" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 17310, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 16291, change: "down" },
    {title: "On Her Majesty's Secret Cervix", take: 15732, change: "new" },
    {title: "Boobs! A Madea Porno", take: 15085, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 13845, change: "new" },
    {title: "The Curious Case of Benjamin's Butthole", take: 13619, change: "down" }
], 
  20170129: [
    {title: "Man of La Muncha", take: 45533, change: "up" },
    {title: "Fist Me Deadly", take: 42753, change: "new" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 42099, change: "up" },
    {title: "The Dong and I", take: 40271, change: "new" },
    {title: "The Italian Blowjob", take: 38174, change: "new" },
    {title: "Hairy Twatter and the Half Chub Prince", take: 36182, change: "same" },
    {title: "Public Enemas", take: 34802, change: "down" },
    {title: "GoodFellatas", take: 34186, change: "down" },
    {title: "Me, Myself in Irene", take: 33332, change: "new" },
    {title: "Scats", take: 31109, change: "down" },
    {title: "Poonrise Kingdom", take: 27394, change: "down" },
    {title: "Being Inside Elmo", take: 24587, change: "new" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 23121, change: "new" },
    {title: "Hairy Twatter and the Gobblin' of Your Spire", take: 20755, change: "new" },
    {title: "Jiz and the Diaphragms", take: 20105, change: "down" },
    {title: "Rub, Lola! Rub!", take: 18489, change: "down" },
    {title: "BALL-E", take: 17977, change: "down" },
    {title: "Haters Whack Off!", take: 15849, change: "down" },
    {title: "Fingering Dory", take: 14124, change: "down" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 12612, change: "down" }
], 
  20170130: [
    {title: "Anything Grows", take: 48225, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 46143, change: "new" },
    {title: "Steve's Tugjobs", take: 41171, change: "new" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 37800, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 34252, change: "new" },
    {title: "Strangers on a Tranny", take: 32065, change: "new" },
    {title: "Dirty/Hairy", take: 28389, change: "new" },
    {title: "The Bicycle Queef", take: 25685, change: "new" },
    {title: "Bang My Bum Slowly", take: 23985, change: "new" },
    {title: "Man of La Muncha", take: 23752, change: "down" },
    {title: "Fist Me Deadly", take: 22188, change: "down" },
    {title: "Gosford Porking", take: 21181, change: "new" },
    {title: "Monsters' Pink", take: 20653, change: "new" },
    {title: "A Queer and Pleasant Stranger", take: 20194, change: "new" },
    {title: "Poonstruck", take: 19274, change: "new" },
    {title: "Hairy Twatter and the Prisoner of Ass Cabin", take: 18592, change: "new" },
    {title: "Pee Wee's Big Member", take: 17496, change: "new" },
    {title: "Atlas Chugged", take: 16993, change: "new" },
    {title: "Jerk/Off", take: 15608, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 14094, change: "new" }
], 
  20170131: [
    {title: "Boyz N The Clitoral Hood", take: 50334, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 49832, change: "up" },
    {title: "Strangers on a Tranny", take: 47695, change: "up" },
    {title: "A Bit of Fry in Laurie", take: 45336, change: "down" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 43730, change: "down" },
    {title: "Much Ado About Cumming", take: 40747, change: "new" },
    {title: "MILF Saigon", take: 37782, change: "new" },
    {title: "Steve's Tugjobs", take: 36395, change: "down" },
    {title: "Let the White One In", take: 33505, change: "new" },
    {title: "Dirty/Hairy", take: 31513, change: "down" },
    {title: "Fist Me Deadly", take: 29667, change: "same" },
    {title: "Man of La Muncha", take: 27846, change: "down" },
    {title: "Hairy Twatter and the Pornographer's Bone", take: 27217, change: "new" },
    {title: "The Bicycle Queef", take: 25566, change: "down" },
    {title: "GoodFellatas", take: 24914, change: "new" },
    {title: "Gosford Porking", take: 22222, change: "down" },
    {title: "Monsters' Pink", take: 21542, change: "down" },
    {title: "Poonstruck", take: 20405, change: "down" },
    {title: "A Queer and Pleasant Stranger", take: 18416, change: "down" },
    {title: "Hairy Twatter and the Order of the Three Dicks", take: 16408, change: "new" }
], 
  };
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
  var intentURL = "https://twitter.com/intent/tweet?url=http%3A%2F%2Fjerking.online&via=AhoyLemon&text="+intentText;
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
//# sourceMappingURL=pr0n.js.map