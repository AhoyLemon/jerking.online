function sendGA(c, a, l, v) {
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
  "Hairy Twatter",
  "Blowing For Columbine",
  "Star Whores: The Foreskin Awakens",
  
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
    {title: "Hannah on Her Sisters", take: 48115, change: "new" },
    {title: "Blumpkinhead", take: 47139, change: "new" },
    {title: "No Cunt Free For Old Men", take: 45236, change: "new" },
    {title: "Pearl Necklace Harbor", take: 42260, change: "new" },
    {title: "Atlas Chugged", take: 40435, change: "new" },
    {title: "Person of Incest", take: 38042, change: "new" },
    {title: "Indiana Bones and the Temple of Poon", take: 36734, change: "new" },
    {title: "Robocuck", take: 34812, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 31608, change: "new" },
    {title: "Being Inside Elmo", take: 29742, change: "new" },
    {title: "Scats", take: 28944, change: "new" },
    {title: "The Filth Element", take: 26794, change: "new" },
    {title: "A Streetwalker Named Desireé", take: 26508, change: "new" },
    {title: "Star Whores: The Foreskin Awakens", take: 24547, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 23004, change: "new" },
    {title: "Breaking Chad", take: 22515, change: "new" },
    {title: "The Dong and I", take: 22221, change: "new" },
    {title: "Assassin's Cream", take: 21210, change: "new" },
    {title: "On Her Majesty's Secret Cervix", take: 19985, change: "new" },
    {title: "Jiro Creams On Suki", take: 18634, change: "new" }
  ],
  20170102: [
    {title: "No Cunt Free For Old Men", take: 48556, change: "up" },
    {title: "Pearl Necklace Harbor", take: 43107, change: "up" },
    {title: "Indiana Bones and the Temple of Poon", take: 42214, change: "up" },
    {title: "Blumpkinhead", take: 40397, change: "down" },
    {title: "One Blew Over The Cuckold's Nest", take: 35655, change: "up" },
    {title: "Robocuck", take: 33595, change: "up" },
    {title: "Nathan For Everyone", take: 33257, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 30632, change: "new" },
    {title: "Scats", take: 29619, change: "up" },
    {title: "A Streetwalker Named Desireé", take: 29164, change: "up" },
    {title: "Person of Incest", take: 26035, change: "down" },
    {title: "Being Inside Elmo", take: 25107, change: "down" },
    {title: "Atlas Chugged", take: 23126, change: "down" },
    {title: "Poonstruck", take: 20967, change: "new" },
    {title: "The Filth Element", take: 20668, change: "down" },
    {title: "Assassin's Cream", take: 20371, change: "up" },
    {title: "Mr. Smith Goes Down on Washington", take: 19651, change: "down" },
    {title: "On Her Majesty's Secret Cervix", take: 19015, change: "up" },
    {title: "Jiro Creams On Suki", take: 17667, change: "up" },
    {title: "Breaking Chad", take: 15800, change: "down" }
], 
  20170103: [
    {title: "Blumpkinhead", take: 47789, change: "up" },
    {title: "One Blew Over The Cuckold's Nest", take: 46822, change: "up" },
    {title: "Indiana Bones and the Temple of Poon", take: 45552, change: "same" },
    {title: "A Bit of Fry in Laurie", take: 43377, change: "new" },
    {title: "Nathan For Everyone", take: 40619, change: "up" },
    {title: "Scats", take: 37934, change: "up" },
    {title: "Pearl Necklace Harbor", take: 33603, change: "down" },
    {title: "No Cunt Free For Old Men", take: 30412, change: "down" },
    {title: "Robocuck", take: 27848, change: "down" },
    {title: "Person of Incest", take: 26243, change: "up" },
    {title: "Being Inside Elmo", take: 23930, change: "up" },
    {title: "50 Fist Dates", take: 22707, change: "new" },
    {title: "A Streetwalker Named Desireé", take: 22195, change: "down" },
    {title: "Big Trouble in Little Vagina", take: 19715, change: "down" },
    {title: "Assassin's Cream", take: 18614, change: "up" },
    {title: "The Squirt Locker", take: 17071, change: "new" },
    {title: "Atlas Chugged", take: 16857, change: "down" },
    {title: "All That Jizz", take: 16011, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 15070, change: "down" },
    {title: "Jiro Creams On Suki", take: 13576, change: "down" }
], 
  20170104: [
    {title: "Indiana Bones and the Temple of Poon", take: 49792, change: "up" },
    {title: "A Bit of Fry in Laurie", take: 49266, change: "up" },
    {title: "Watersportsworld", take: 44003, change: "new" },
    {title: "Let the White One In", take: 42015, change: "new" },
    {title: "Nathan For Everyone", take: 39923, change: "same" },
    {title: "The Nutting Professor", take: 37888, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 36461, change: "down" },
    {title: "Haters Whack Off!", take: 34346, change: "new" },
    {title: "Rebel Without a Cooze", take: 31409, change: "new" },
    {title: "G*A*S*H", take: 30133, change: "new" },
    {title: "Person of Incest", take: 29669, change: "down" },
    {title: "50 Fist Dates", take: 26969, change: "same" },
    {title: "No Cunt Free For Old Men", take: 24626, change: "down" },
    {title: "Scats", take: 23184, change: "down" },
    {title: "Assassin's Cream", take: 21612, change: "same" },
    {title: "The Squirt Locker", take: 21338, change: "same" },
    {title: "Charles In Charles", take: 20758, change: "new" },
    {title: "A Streetwalker Named Desireé", take: 20331, change: "down" },
    {title: "Being Inside Elmo", take: 19957, change: "down" },
    {title: "Atlas Chugged", take: 18911, change: "down" }
], 
  20170105: [
    {title: "I Broke My Back Mounting", take: 55083, change: "new" },
    {title: "Steve's Tugjobs", take: 49858, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 48180, change: "down" },
    {title: "Watersportsworld", take: 44178, change: "down" },
    {title: "Indiana Bones and the Temple of Poon", take: 41631, change: "down" },
    {title: "Moneyballin", take: 39662, change: "new" },
    {title: "The Nutting Professor", take: 35411, change: "down" },
    {title: "Lawrence of a Labia", take: 31774, change: "new" },
    {title: "The Maltese Fistin", take: 31036, change: "new" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 28729, change: "new" },
    {title: "Let the White One In", take: 26655, change: "down" },
    {title: "Nathan For Everyone", take: 24821, change: "down" },
    {title: "Jerk/Off", take: 23994, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 21554, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 20709, change: "down" },
    {title: "G*A*S*H", take: 19520, change: "down" },
    {title: "Guess Who Came On Dinner", take: 18794, change: "new" },
    {title: "GoodFellatas", take: 17587, change: "new" },
    {title: "Haters Whack Off!", take: 15736, change: "down" },
    {title: "Rebel Without a Cooze", take: 13886, change: "down" }
], 
  20170106: [
    {title: "MILF Saigon", take: 51413, change: "new" },
    {title: "Steve's Tugjobs", take: 48198, change: "same" },
    {title: "Poonstruck", take: 45454, change: "new" },
    {title: "American History XXX", take: 41542, change: "new" },
    {title: "While You Were Peeping", take: 39995, change: "new" },
    {title: "Blowing For Columbine", take: 36846, change: "new" },
    {title: "On Her Majesty's Secret Cervix", take: 33873, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 31554, change: "down" },
    {title: "Indiana Bones and the Temple of Poon", take: 28758, change: "down" },
    {title: "Anything Grows", take: 26039, change: "new" },
    {title: "Group Sex on the Bounty", take: 25284, change: "new" },
    {title: "Gosford Porking", take: 24390, change: "new" },
    {title: "Rear Entry Widow", take: 23817, change: "new" },
    {title: "Moneyballin", take: 23406, change: "down" },
    {title: "Bend Over, Like Beckham", take: 21624, change: "new" },
    {title: "Strangers on a Tranny", take: 21347, change: "new" },
    {title: "Fist Me Deadly", take: 20059, change: "new" },
    {title: "The Nutting Professor", take: 19578, change: "down" },
    {title: "Fingering Dory", take: 18581, change: "new" },
    {title: "Star Whores: The Foreskin Awakens", take: 16850, change: "new" }
], 
  20170107: [
    {title: "Boyz N The Clitoral Hood", take: 56345, change: "new" },
    {title: "I Broke My Back Mounting", take: 51615, change: "new" },
    {title: "Poonstruck", take: 47452, change: "same" },
    {title: "Taint Must Be Shaven", take: 44573, change: "new" },
    {title: "Spurtigo", take: 39406, change: "new" },
    {title: "Steve's Tugjobs", take: 37573, change: "down" },
    {title: "American History XXX", take: 36764, change: "down" },
    {title: "Much Ado About Cumming", take: 32630, change: "new" },
    {title: "The Fantastic Foursome", take: 32276, change: "new" },
    {title: "No Cunt Free For Old Men", take: 30513, change: "new" },
    {title: "Nutbusters", take: 29530, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 28493, change: "new" },
    {title: "The Stepfather, Part II", take: 27782, change: "new" },
    {title: "Scatatouille", take: 25347, change: "new" },
    {title: "Blowing For Columbine", take: 23973, change: "down" },
    {title: "On Her Majesty's Secret Cervix", take: 23596, change: "down" },
    {title: "Anything Grows", take: 21659, change: "down" },
    {title: "Boobs! A Madea Porno", take: 20584, change: "new" },
    {title: "Group Sex on the Bounty", take: 18881, change: "down" },
    {title: "While You Were Peeping", take: 18670, change: "down" }
], 
  20170108: [
    {title: "BALL-E", take: 55675, change: "new" },
    {title: "Rear Entry Widow", take: 52780, change: "new" },
    {title: "I Broke My Back Mounting", take: 50887, change: "down" },
    {title: "Spurtigo", take: 44899, change: "up" },
    {title: "Taint Must Be Shaven", take: 42751, change: "down" },
    {title: "Steve's Tugjobs", take: 38346, change: "same" },
    {title: "Wet Hot American Hummer", take: 34487, change: "new" },
    {title: "American History XXX", take: 32660, change: "down" },
    {title: "Robocuck", take: 30336, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 26767, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 24778, change: "new" },
    {title: "Much Ado About Cumming", take: 22993, change: "down" },
    {title: "Star Whores: The Foreskin Awakens", take: 20868, change: "new" },
    {title: "The Mud Wrestler", take: 19419, change: "new" },
    {title: "The Gang Bang Theory", take: 19165, change: "new" },
    {title: "The Fantastic Foursome", take: 18928, change: "down" },
    {title: "Pee Wee's Big Member", take: 17013, change: "new" },
    {title: "No Cunt Free For Old Men", take: 15322, change: "down" },
    {title: "The Munchurian Candidass", take: 14316, change: "new" },
    {title: "Straight Into Conner", take: 13699, change: "new" }
], 
  20170109: [
    {title: "I Broke My Back Mounting", take: 50149, change: "up" },
    {title: "Taint Must Be Shaven", take: 48146, change: "up" },
    {title: "BALL-E", take: 44889, change: "down" },
    {title: "Monsters' Pink", take: 42948, change: "new" },
    {title: "Rear Entry Widow", take: 40397, change: "down" },
    {title: "Wet Hot American Hummer", take: 37056, change: "up" },
    {title: "American History XXX", take: 35501, change: "up" },
    {title: "While You Were Peeping", take: 33174, change: "new" },
    {title: "Robocuck", take: 31550, change: "same" },
    {title: "Spurtigo", take: 28042, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 27038, change: "new" },
    {title: "Let the White One In", take: 25125, change: "new" },
    {title: "Bright Lights, Big Titties", take: 24221, change: "new" },
    {title: "Diddler on the Roof", take: 22523, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 20304, change: "down" },
    {title: "Steve's Tugjobs", take: 19656, change: "down" },
    {title: "Play With Misty For Me", take: 18304, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 16282, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 14832, change: "down" },
    {title: "Star Whores: The Foreskin Awakens", take: 14374, change: "down" }
], 
  20170110: [
    {title: "Monsters' Pink", take: 49199, change: "up" },
    {title: "Wet Hot American Hummer", take: 48298, change: "up" },
    {title: "American History XXX", take: 47210, change: "up" },
    {title: "Rear Entry Widow", take: 44407, change: "up" },
    {title: "Spurtigo", take: 41978, change: "up" },
    {title: "Scott Pilgrim Vs Those Girls", take: 38451, change: "up" },
    {title: "BALL-E", take: 34547, change: "down" },
    {title: "While You Were Peeping", take: 32898, change: "same" },
    {title: "Taint Must Be Shaven", take: 32469, change: "down" },
    {title: "Rogerin' Me", take: 28943, change: "new" },
    {title: "Let the White One In", take: 28547, change: "up" },
    {title: "Stanford's Prisonsex Experiments", take: 27267, change: "new" },
    {title: "I Broke My Back Mounting", take: 24702, change: "down" },
    {title: "Diddler on the Roof", take: 22193, change: "same" },
    {title: "Play With Misty For Me", take: 20740, change: "up" },
    {title: "Bright Lights, Big Titties", take: 19080, change: "down" },
    {title: "Steve's Tugjobs", take: 18117, change: "down" },
    {title: "Night At The Mapplethorpe Museum", take: 16467, change: "up" },
    {title: "The Pleasure of Sierra's Madre", take: 14979, change: "down" },
    {title: "A Streetwalker Named Desireé", take: 13268, change: "new" }
], 
  20170111: [
    {title: "Fuck Everlasting", take: 58830, change: "new" },
    {title: "Lawrence of a Labia", take: 55111, change: "new" },
    {title: "Rear Entry Widow", take: 52422, change: "up" },
    {title: "Wet Hot American Hummer", take: 47152, change: "down" },
    {title: "Full Metal Dildo", take: 43934, change: "new" },
    {title: "Spurtigo", take: 40655, change: "down" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 37811, change: "new" },
    {title: "Being Inside Elmo", take: 36215, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 35520, change: "down" },
    {title: "Whiskey, Tango, Facefuck", take: 34764, change: "new" },
    {title: "Boobs! A Madea Porno", take: 32467, change: "new" },
    {title: "Man of La Muncha", take: 29046, change: "new" },
    {title: "Monsters' Pink", take: 27729, change: "down" },
    {title: "BALL-E", take: 27461, change: "down" },
    {title: "American History XXX", take: 27045, change: "down" },
    {title: "Taint Must Be Shaven", take: 25344, change: "down" },
    {title: "Rogerin' Me", take: 24888, change: "down" },
    {title: "Motion Impossible", take: 23611, change: "new" },
    {title: "Pee Wee's Big Member", take: 21176, change: "new" },
    {title: "The Italian Blowjob", take: 20130, change: "new" }
], 
  20170112: [
    {title: "Lawrence of a Labia", take: 50399, change: "up" },
    {title: "Rear Entry Widow", take: 47211, change: "up" },
    {title: "The Maltese Fistin", take: 44431, change: "new" },
    {title: "Fuck Everlasting", take: 39719, change: "down" },
    {title: "In Sid Anus", take: 38473, change: "new" },
    {title: "Spurtigo", take: 36689, change: "same" },
    {title: "The Boy Shorts", take: 36359, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 32679, change: "new" },
    {title: "Poonrise Kingdom", take: 29585, change: "new" },
    {title: "Wet Hot American Hummer", take: 27833, change: "down" },
    {title: "Hairy Twatter", take: 25031, change: "new" },
    {title: "Moneyballin", take: 22354, change: "new" },
    {title: "Person of Incest", take: 20903, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 18966, change: "down" },
    {title: "Jerk/Off", take: 18705, change: "new" },
    {title: "Being Inside Elmo", take: 18240, change: "down" },
    {title: "Whiskey, Tango, Facefuck", take: 17504, change: "down" },
    {title: "Full Metal Dildo", take: 16216, change: "down" },
    {title: "Boobs! A Madea Porno", take: 14458, change: "down" },
    {title: "Man of La Muncha", take: 13601, change: "down" }
], 
  20170113: [
    {title: "The Maltese Fistin", take: 51670, change: "up" },
    {title: "Fuck Everlasting", take: 49986, change: "up" },
    {title: "Rear Entry Widow", take: 46396, change: "down" },
    {title: "In Sid Anus", take: 43088, change: "up" },
    {title: "Rogerin' Me", take: 38648, change: "new" },
    {title: "The Boy Shorts", take: 34109, change: "up" },
    {title: "Poonrise Kingdom", take: 32268, change: "up" },
    {title: "Wet Hot American Hummer", take: 29910, change: "up" },
    {title: "Big Trouble in Little Vagina", take: 27500, change: "down" },
    {title: "Person of Incest", take: 26159, change: "up" },
    {title: "Spurtigo", take: 25153, change: "down" },
    {title: "Being Inside Elmo", take: 23541, change: "up" },
    {title: "Jerk/Off", take: 22090, change: "up" },
    {title: "Bright Lights, Big Titties", take: 20972, change: "new" },
    {title: "Boobs! A Madea Porno", take: 19354, change: "up" },
    {title: "Man of La Muncha", take: 17664, change: "up" },
    {title: "Hairy Twatter", take: 16560, change: "down" },
    {title: "Whiskey, Tango, Facefuck", take: 15261, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 13699, change: "down" },
    {title: "Moneyballin", take: 13465, change: "down" }
], 
  20170114: [
    {title: "Rear Entry Widow", take: 46721, change: "up" },
    {title: "In Sid Anus", take: 44637, change: "up" },
    {title: "The Boy Shorts", take: 42777, change: "up" },
    {title: "Rogerin' Me", take: 42021, change: "up" },
    {title: "Fuck Everlasting", take: 40720, change: "down" },
    {title: "Poonrise Kingdom", take: 35924, change: "up" },
    {title: "Big Trouble in Little Vagina", take: 32061, change: "up" },
    {title: "Spurtigo", take: 29801, change: "up" },
    {title: "The Pleasure of Sierra's Madre", take: 27651, change: "new" },
    {title: "American History XXX", take: 25025, change: "new" },
    {title: "Boobs! A Madea Porno", take: 23116, change: "up" },
    {title: "Wet Hot American Hummer", take: 22893, change: "down" },
    {title: "Man of La Muncha", take: 21395, change: "up" },
    {title: "Being Inside Elmo", take: 20834, change: "down" },
    {title: "Robocuck", take: 19951, change: "new" },
    {title: "Whiskey, Tango, Facefuck", take: 17566, change: "up" },
    {title: "Fantastic Fucks, Mister", take: 16577, change: "new" },
    {title: "Bright Lights, Big Titties", take: 14904, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 13704, change: "same" },
    {title: "Moneyballin", take: 12308, change: "same" }
], 
  20170115: [
    {title: "Group Sex on the Bounty", take: 53224, change: "new" },
    {title: "Charles In Charles", take: 50293, change: "new" },
    {title: "Veinspotting", take: 48692, change: "new" },
    {title: "The Curious Case of Benjamin's Butthole", take: 44781, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 40343, change: "new" },
    {title: "The Boy Shorts", take: 39805, change: "down" },
    {title: "Taint Must Be Shaven", take: 37627, change: "new" },
    {title: "Dirty/Hairy", take: 34544, change: "new" },
    {title: "Motion Impossible", take: 31962, change: "new" },
    {title: "Fuck Everlasting", take: 28354, change: "down" },
    {title: "Rub, Lola! Rub!", take: 26214, change: "new" },
    {title: "Breaking Chad", take: 25512, change: "new" },
    {title: "Diddler on the Roof", take: 23581, change: "new" },
    {title: "Assassin's Cream", take: 22456, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 21750, change: "new" },
    {title: "Poonrise Kingdom", take: 20145, change: "down" },
    {title: "The Gang Bang Theory", take: 19224, change: "new" },
    {title: "Rogerin' Me", take: 17133, change: "down" },
    {title: "Spurtigo", take: 15489, change: "down" },
    {title: "In Sid Anus", take: 15247, change: "down" }
], 
  20170116: [
    {title: "28 Cocks Later", take: 45179, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 40286, change: "up" },
    {title: "The Curious Case of Benjamin's Butthole", take: 38378, change: "up" },
    {title: "The Boy Shorts", take: 35029, change: "up" },
    {title: "Raging Balls", take: 33239, change: "new" },
    {title: "Veinspotting", take: 30746, change: "down" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 28474, change: "new" },
    {title: "Dirty/Hairy", take: 26724, change: "same" },
    {title: "Taint Must Be Shaven", take: 24405, change: "down" },
    {title: "Charles In Charles", take: 23041, change: "down" },
    {title: "G.I. Joe: Masturbation", take: 21527, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 19807, change: "new" },
    {title: "Fuck Everlasting", take: 18774, change: "down" },
    {title: "Motion Impossible", take: 16884, change: "down" },
    {title: "Breasts In Shows", take: 15222, change: "new" },
    {title: "Six Days Seven Cocks", take: 14632, change: "new" },
    {title: "The Munchurian Candidass", take: 12893, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 11816, change: "new" },
    {title: "There's Someone Inside Mary", take: 10843, change: "new" },
    {title: "I Broke My Back Mounting", take: 10214, change: "new" }
], 
  20170117: [
    {title: "Star Whores: The Foreskin Awakens", take: 52762, change: "new" },
    {title: "The Boy Shorts", take: 51022, change: "up" },
    {title: "Raging Balls", take: 46697, change: "up" },
    {title: "Hannah on Her Sisters", take: 41529, change: "new" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 38641, change: "new" },
    {title: "The Curious Case of Benjamin's Butthole", take: 36897, change: "down" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 36499, change: "same" },
    {title: "Dirty/Hairy", take: 36090, change: "same" },
    {title: "Veinspotting", take: 32769, change: "down" },
    {title: "Diddler on the Roof", take: 29657, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 27838, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 26982, change: "down" },
    {title: "Pan's Labiarinth", take: 26618, change: "new" },
    {title: "Taint Must Be Shaven", take: 24262, change: "down" },
    {title: "G.I. Joe: Masturbation", take: 23408, change: "down" },
    {title: "Fingering Dory", take: 20924, change: "new" },
    {title: "Charles In Charles", take: 19377, change: "down" },
    {title: "Pearl Necklace Harbor", take: 18012, change: "new" },
    {title: "Fuck Everlasting", take: 16923, change: "down" },
    {title: "Breasts In Shows", take: 15698, change: "down" }
], 
  20170118: [
    {title: "While You Were Peeping", take: 54397, change: "new" },
    {title: "The Bicycle Queef", take: 53627, change: "new" },
    {title: "Boobs! A Madea Porno", take: 49071, change: "new" },
    {title: "The Color of a Money Shot", take: 46650, change: "new" },
    {title: "50 Fist Dates", take: 41189, change: "new" },
    {title: "The Boy Shorts", take: 39363, change: "down" },
    {title: "Star Whores: The Foreskin Awakens", take: 35791, change: "down" },
    {title: "Hannah on Her Sisters", take: 33193, change: "down" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 32848, change: "down" },
    {title: "Rub, Lola! Rub!", take: 31957, change: "new" },
    {title: "The Curious Case of Benjamin's Butthole", take: 29420, change: "down" },
    {title: "Raging Balls", take: 27425, change: "down" },
    {title: "One Blew Over The Cuckold's Nest", take: 25369, change: "new" },
    {title: "Diddler on the Roof", take: 25121, change: "down" },
    {title: "Veinspotting", take: 24838, change: "down" },
    {title: "One Flew Into The Poopoo's Nest", take: 22451, change: "down" },
    {title: "Hairy Twatter", take: 21995, change: "new" },
    {title: "Dirty/Hairy", take: 21446, change: "down" },
    {title: "Boyz N The Clitoral Hood", take: 18947, change: "new" },
    {title: "Suicide Squat", take: 17967, change: "new" }
], 
  20170119: [
    {title: "While You Were Peeping", take: 54043, change: "same" },
    {title: "Bright Lights, Big Titties", take: 48377, change: "new" },
    {title: "Boobs! A Madea Porno", take: 46856, change: "same" },
    {title: "In Sid Anus", take: 45863, change: "new" },
    {title: "The Bicycle Queef", take: 43440, change: "down" },
    {title: "The Boy Shorts", take: 42883, change: "same" },
    {title: "Star Whores: The Foreskin Awakens", take: 40306, change: "same" },
    {title: "Nutbusters", take: 38510, change: "new" },
    {title: "The Filth Element", take: 38122, change: "new" },
    {title: "Hannah on Her Sisters", take: 37089, change: "down" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 34025, change: "down" },
    {title: "50 Fist Dates", take: 33033, change: "down" },
    {title: "The Color of a Money Shot", take: 31344, change: "down" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 29942, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 29119, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 27546, change: "down" },
    {title: "Raging Balls", take: 25129, change: "down" },
    {title: "Veinspotting", take: 23578, change: "down" },
    {title: "Hairy Twatter", take: 20897, change: "down" },
    {title: "Diddler on the Roof", take: 18668, change: "down" }
], 
  20170120: [
    {title: "In Sid Anus", take: 50308, change: "up" },
    {title: "Pan's Labiarinth", take: 47941, change: "new" },
    {title: "Bright Lights, Big Titties", take: 43105, change: "down" },
    {title: "Boobs! A Madea Porno", take: 42600, change: "down" },
    {title: "The Curious Case of Benjamin's Butthole", take: 40726, change: "new" },
    {title: "The Munchurian Candidass", take: 37052, change: "new" },
    {title: "The Boy Shorts", take: 35927, change: "down" },
    {title: "Enslaving Private Ryan", take: 32970, change: "new" },
    {title: "The Maltese Fistin", take: 29522, change: "new" },
    {title: "Star Whores: The Foreskin Awakens", take: 26154, change: "down" },
    {title: "There's Someone Inside Mary", take: 23380, change: "new" },
    {title: "Stanford's Prisonsex Experiments", take: 21599, change: "new" },
    {title: "Gunfight at the KY Corral", take: 21237, change: "new" },
    {title: "Man of La Muncha", take: 19788, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 19109, change: "new" },
    {title: "The Princess Ride", take: 18176, change: "new" },
    {title: "Motion Impossible", take: 17872, change: "new" },
    {title: "Evil Head 2: Head By Dawn", take: 17298, change: "new" },
    {title: "The Mud Wrestler", take: 16510, change: "new" },
    {title: "The Bicycle Queef", take: 15384, change: "down" }
], 
  20170121: [
    {title: "Boobs! A Madea Porno", take: 45322, change: "up" },
    {title: "The Curious Case of Benjamin's Butthole", take: 43308, change: "up" },
    {title: "Rogerin' Me", take: 40251, change: "new" },
    {title: "Bright Lights, Big Titties", take: 37317, change: "down" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 36569, change: "new" },
    {title: "The Boy Shorts", take: 34104, change: "up" },
    {title: "Pan's Labiarinth", take: 31270, change: "down" },
    {title: "Star Whores: The Foreskin Awakens", take: 28418, change: "up" },
    {title: "The Munchurian Candidass", take: 27423, change: "down" },
    {title: "Midnight Ladyboy", take: 26052, change: "new" },
    {title: "The Maltese Fistin", take: 24916, change: "down" },
    {title: "Bend Over, Like Beckham", take: 22659, change: "new" },
    {title: "Moneyballin", take: 20184, change: "new" },
    {title: "Being Inside Elmo", take: 19276, change: "new" },
    {title: "Gunfight at the KY Corral", take: 18764, change: "down" },
    {title: "Man of La Muncha", take: 18295, change: "down" },
    {title: "Stanford's Prisonsex Experiments", take: 16154, change: "down" },
    {title: "The Pleasure of Sierra's Madre", take: 15376, change: "down" },
    {title: "Fuck Everlasting", take: 15079, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 13956, change: "new" }
], 
  20170122: [
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 53336, change: "up" },
    {title: "Bright Lights, Big Titties", take: 48550, change: "up" },
    {title: "Pan's Labiarinth", take: 43737, change: "up" },
    {title: "Guess Who Came On Dinner", take: 39773, change: "new" },
    {title: "Rogerin' Me", take: 35370, change: "down" },
    {title: "Nutbusters", take: 31193, change: "new" },
    {title: "Star Whores: The Foreskin Awakens", take: 29350, change: "up" },
    {title: "Das Booty", take: 28144, change: "new" },
    {title: "The Munchurian Candidass", take: 24957, change: "same" },
    {title: "Boy Meat's World", take: 24709, change: "new" },
    {title: "The Boy Shorts", take: 23061, change: "down" },
    {title: "Strangers on a Tranny", take: 21378, change: "new" },
    {title: "Scatatouille", take: 20405, change: "new" },
    {title: "Midnight Ladyboy", take: 19002, change: "down" },
    {title: "Despicable Pee", take: 18477, change: "new" },
    {title: "Bend Over, Like Beckham", take: 16787, change: "down" },
    {title: "Moneyballin", take: 15587, change: "down" },
    {title: "Man of La Muncha", take: 15326, change: "down" },
    {title: "The Maltese Fistin", take: 14049, change: "down" },
    {title: "Gunfight at the KY Corral", take: 13589, change: "down" }
], 
  20170123: [
    {title: "Nutbusters", take: 47773, change: "up" },
    {title: "Guess Who Came On Dinner", take: 45380, change: "up" },
    {title: "Das Booty", take: 41916, change: "up" },
    {title: "Fill Bill, vol 2", take: 36921, change: "new" },
    {title: "Star Whores: The Foreskin Awakens", take: 33541, change: "up" },
    {title: "Rogerin' Me", take: 33075, change: "down" },
    {title: "Pan's Labiarinth", take: 31153, change: "down" },
    {title: "The Munchurian Candidass", take: 29444, change: "up" },
    {title: "Charles In Charles", take: 26289, change: "new" },
    {title: "Bright Lights, Big Titties", take: 23375, change: "down" },
    {title: "Strangers on a Tranny", take: 22998, change: "up" },
    {title: "The Boy Shorts", take: 22105, change: "down" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 20334, change: "new" },
    {title: "Boy Meat's World", take: 17987, change: "down" },
    {title: "Stanford's Prisonsex Experiments", take: 17414, change: "new" },
    {title: "Wangs of New York", take: 16272, change: "new" },
    {title: "Public Enemas", take: 15198, change: "new" },
    {title: "Midnight Ladyboy", take: 13974, change: "down" },
    {title: "Man of La Muncha", take: 13542, change: "down" },
    {title: "Moneyballin", take: 12282, change: "down" }
], 
  20170124: [
    {title: "Star Whores: The Foreskin Awakens", take: 51334, change: "up" },
    {title: "The Munchurian Candidass", take: 50189, change: "up" },
    {title: "Fill Bill, vol 2", take: 49227, change: "up" },
    {title: "Bright Lights, Big Titties", take: 45417, change: "up" },
    {title: "Das Booty", take: 43923, change: "down" },
    {title: "Strangers on a Tranny", take: 42039, change: "up" },
    {title: "Charles In Charles", take: 37204, change: "up" },
    {title: "Guess Who Came On Dinner", take: 32935, change: "down" },
    {title: "Pan's Labiarinth", take: 29344, change: "down" },
    {title: "The Fantastic Foursome", take: 27905, change: "new" },
    {title: "The Boy Shorts", take: 25634, change: "up" },
    {title: "Poonrise Kingdom", take: 25077, change: "new" },
    {title: "Hannah on Her Sisters", take: 24660, change: "new" },
    {title: "Gunfight at the KY Corral", take: 23345, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 21057, change: "down" },
    {title: "Stanford's Prisonsex Experiments", take: 19101, change: "down" },
    {title: "Public Enemas", take: 17680, change: "same" },
    {title: "Wangs of New York", take: 16668, change: "down" },
    {title: "Midnight Ladyboy", take: 15363, change: "down" },
    {title: "Man of La Muncha", take: 14215, change: "down" }
], 
  20170125: [
    {title: "Bright Lights, Big Titties", take: 52152, change: "up" },
    {title: "Enslaving Private Ryan", take: 49446, change: "new" },
    {title: "The Munchurian Candidass", take: 43786, change: "down" },
    {title: "Fannie Hall", take: 40286, change: "new" },
    {title: "Strangers on a Tranny", take: 39376, change: "up" },
    {title: "Charles In Charles", take: 37174, change: "up" },
    {title: "Guess Who Came On Dinner", take: 34503, change: "up" },
    {title: "BALL-E", take: 33108, change: "new" },
    {title: "Das Booty", take: 31437, change: "down" },
    {title: "28 Cocks Later", take: 30520, change: "new" },
    {title: "The Fantastic Foursome", take: 27939, change: "down" },
    {title: "GoodFellatas", take: 26331, change: "new" },
    {title: "Poonrise Kingdom", take: 25994, change: "down" },
    {title: "Hannah on Her Sisters", take: 23432, change: "down" },
    {title: "Pan's Labiarinth", take: 20872, change: "down" },
    {title: "Gunfight at the KY Corral", take: 20628, change: "down" },
    {title: "Me, Myself in Irene", take: 18491, change: "new" },
    {title: "Stanford's Prisonsex Experiments", take: 18205, change: "down" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 16403, change: "down" },
    {title: "Better Ball Saul", take: 15890, change: "new" }
], 
  20170126: [
    {title: "Fannie Hall", take: 48185, change: "up" },
    {title: "Enslaving Private Ryan", take: 47126, change: "same" },
    {title: "Bright Lights, Big Titties", take: 44619, change: "down" },
    {title: "Boobs! A Madea Porno", take: 39427, change: "new" },
    {title: "The Munchurian Candidass", take: 35855, change: "down" },
    {title: "Rear Entry Widow", take: 32398, change: "new" },
    {title: "Charles In Charles", take: 29339, change: "down" },
    {title: "The Squirt Locker", take: 27439, change: "new" },
    {title: "Strangers on a Tranny", take: 26810, change: "down" },
    {title: "Das Booty", take: 24378, change: "down" },
    {title: "Guess Who Came On Dinner", take: 23537, change: "down" },
    {title: "28 Cocks Later", take: 20886, change: "down" },
    {title: "The Dark Bros In: Fuck Soup", take: 18874, change: "new" },
    {title: "Indiana Bones and the Temple of Poon", take: 17998, change: "new" },
    {title: "Bang My Bum Slowly", take: 17147, change: "new" },
    {title: "BALL-E", take: 16988, change: "down" },
    {title: "Tub Girl Time Machine", take: 15125, change: "new" },
    {title: "Star Whores: The Foreskin Awakens", take: 13336, change: "new" },
    {title: "The Fantastic Foursome", take: 11775, change: "down" },
    {title: "Hannah on Her Sisters", take: 10525, change: "down" }
], 
  20170127: [
    {title: "Enslaving Private Ryan", take: 54582, change: "up" },
    {title: "The Curious Case of Benjamin's Butthole", take: 53126, change: "new" },
    {title: "Play With Misty For Me", take: 50881, change: "new" },
    {title: "Bright Lights, Big Titties", take: 45168, change: "down" },
    {title: "A Bit of Fry in Laurie", take: 41345, change: "new" },
    {title: "XXX: State of the Union: XXX", take: 40534, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 39014, change: "new" },
    {title: "Veinspotting", take: 37443, change: "new" },
    {title: "Rogerin' Me", take: 34935, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 32933, change: "new" },
    {title: "Cum and Cummer", take: 29310, change: "new" },
    {title: "Boobs! A Madea Porno", take: 26137, change: "down" },
    {title: "The Munchurian Candidass", take: 24151, change: "down" },
    {title: "Fannie Hall", take: 23185, change: "down" },
    {title: "Robocuck", take: 22708, change: "new" },
    {title: "Charles In Charles", take: 22035, change: "down" },
    {title: "Dirty/Hairy", take: 21564, change: "new" },
    {title: "Assassin's Cream", take: 20800, change: "new" },
    {title: "Strangers on a Tranny", take: 19137, change: "down" },
    {title: "Six Days Seven Cocks", take: 17427, change: "new" }
], 
  20170128: [
    {title: "Arse Nick and Yo Face", take: 49176, change: "new" },
    {title: "Jiro Creams On Suki", take: 47113, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 44380, change: "up" },
    {title: "One Blew Over The Cuckold's Nest", take: 41360, change: "new" },
    {title: "Bright Lights, Big Titties", take: 36822, change: "down" },
    {title: "Play With Misty For Me", take: 34599, change: "down" },
    {title: "The Curious Case of Benjamin's Butthole", take: 33807, change: "down" },
    {title: "Motion Impossible", take: 30982, change: "new" },
    {title: "Moneyballin", take: 27705, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 26020, change: "new" },
    {title: "XXX: State of the Union: XXX", take: 24339, change: "down" },
    {title: "One Flew Into The Poopoo's Nest", take: 23714, change: "down" },
    {title: "Veinspotting", take: 22127, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 20962, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 18973, change: "down" },
    {title: "All That Jizz", take: 18485, change: "new" },
    {title: "Boobs! A Madea Porno", take: 16853, change: "down" },
    {title: "The Munchurian Candidass", take: 15367, change: "down" },
    {title: "Group Sex on the Bounty", take: 13802, change: "new" },
    {title: "Das Booty", take: 12867, change: "new" }
], 
  20170129: [
    {title: "A Bit of Fry in Laurie", take: 55903, change: "up" },
    {title: "Jiro Creams On Suki", take: 51167, change: "same" },
    {title: "The Gang Bang Theory", take: 50175, change: "new" },
    {title: "Arse Nick and Yo Face", take: 49692, change: "down" },
    {title: "Play With Misty For Me", take: 47020, change: "up" },
    {title: "Wet Hot American Hummer", take: 42360, change: "new" },
    {title: "Pearl Necklace Harbor", take: 41711, change: "new" },
    {title: "The Stepfather, Part II", take: 38854, change: "new" },
    {title: "Bang My Bum Slowly", take: 36928, change: "new" },
    {title: "Bright Lights, Big Titties", take: 34000, change: "down" },
    {title: "How To Drain Your Dragon", take: 33324, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 29989, change: "down" },
    {title: "Steve's Tugjobs", take: 28223, change: "new" },
    {title: "Motion Impossible", take: 25302, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 23001, change: "new" },
    {title: "The Curious Case of Benjamin's Butthole", take: 21084, change: "down" },
    {title: "Diddler on the Roof", take: 19382, change: "new" },
    {title: "Man of La Muncha", take: 18435, change: "new" },
    {title: "Full Metal Dildo", take: 17999, change: "new" },
    {title: "Rebel Without a Cooze", take: 17238, change: "new" }
], 
  20170130: [
    {title: "Arse Nick and Yo Face", take: 49430, change: "up" },
    {title: "Play With Misty For Me", take: 46760, change: "up" },
    {title: "Wet Hot American Hummer", take: 44773, change: "up" },
    {title: "Big Trouble in Little Vagina", take: 43814, change: "new" },
    {title: "Bang My Bum Slowly", take: 41677, change: "up" },
    {title: "The Gang Bang Theory", take: 38667, change: "down" },
    {title: "Bright Lights, Big Titties", take: 38307, change: "up" },
    {title: "The Stepfather, Part II", take: 35904, change: "same" },
    {title: "How To Drain Your Dragon", take: 32890, change: "up" },
    {title: "Jiro Creams On Suki", take: 31720, change: "down" },
    {title: "Motion Impossible", take: 30514, change: "up" },
    {title: "Steve's Tugjobs", take: 29388, change: "up" },
    {title: "Pearl Necklace Harbor", take: 28888, change: "down" },
    {title: "The Lust of the Mohicans", take: 27515, change: "new" },
    {title: "Fist Me Deadly", take: 26796, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 25560, change: "down" },
    {title: "Dog Dick Afternoon", take: 22761, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 20355, change: "down" },
    {title: "Rebel Without a Cooze", take: 18894, change: "up" },
    {title: "Full Metal Dildo", take: 16758, change: "down" }
], 
  20170131: [
    {title: "Wet Hot American Hummer", take: 56642, change: "up" },
    {title: "Play With Misty For Me", take: 51654, change: "same" },
    {title: "Indiana Bones and the Temple of Poon", take: 51014, change: "new" },
    {title: "MILF Saigon", take: 48714, change: "new" },
    {title: "Let the White One In", take: 44274, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 39760, change: "down" },
    {title: "Bang My Bum Slowly", take: 36056, change: "down" },
    {title: "The Stepfather, Part II", take: 34710, change: "same" },
    {title: "The Princess Ride", take: 31833, change: "new" },
    {title: "The Gang Bang Theory", take: 30795, change: "down" },
    {title: "Jerk/Off", take: 28812, change: "new" },
    {title: "12 Years A Slut", take: 26135, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 25496, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 24896, change: "new" },
    {title: "Bright Lights, Big Titties", take: 22468, change: "down" },
    {title: "How To Drain Your Dragon", take: 22214, change: "down" },
    {title: "Motion Impossible", take: 20045, change: "down" },
    {title: "Steve's Tugjobs", take: 19206, change: "down" },
    {title: "Fist Me Deadly", take: 18407, change: "down" },
    {title: "Dog Dick Afternoon", take: 16553, change: "down" }
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