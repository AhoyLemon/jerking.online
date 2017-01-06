// jshint -W117
function sendEvent(c, a, l, v) {
  if (v) {
    ga('send', 'event', { eventCategory: c, eventAction: a, eventLabel: l, eventValue:v });
    //console.log('CATEGORY: '+c+', ACTION:'+a+', LABEL:'+l+', VALUE:'+v);
  } else if (l) {
    ga('send', 'event', { eventCategory: c, eventAction: a, eventLabel: l });
    //console.log('CATEGORY: '+c+', ACTION:'+a+', LABEL:'+l);
  } else {
    ga('send', 'event', { eventCategory: c, eventAction: a });
    //console.log('CATEGORY: '+c+', ACTION:'+a);
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
    {title: "Boobs! A Madea Porno", take: 48985, change: "new" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 46709, change: "new" },
    {title: "Bright Lights, Big Titties", take: 45912, change: "new" },
    {title: "All That Jizz", take: 41253, change: "new" },
    {title: "To Shave and Shave Not", take: 39723, change: "new" },
    {title: "Much Ado About Cumming", take: 36334, change: "new" },
    {title: "Taint Must Be Shaven", take: 32625, change: "new" },
    {title: "Tub Girl Time Machine", take: 31552, change: "new" },
    {title: "Cum and Cummer", take: 29604, change: "new" },
    {title: "Bend Over, Like Beckham", take: 27475, change: "new" },
    {title: "Fuck Everlasting", take: 24507, change: "new" },
    {title: "The Tight Stuff", take: 21714, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 20415, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 19416, change: "new" },
    {title: "The Penis Movie", take: 17765, change: "new" },
    {title: "Dog Dick Afternoon", take: 17267, change: "new" },
    {title: "Pearl Necklace Harbor", take: 16939, change: "new" },
    {title: "Indiana Bones and the Temple of Poon", take: 15644, change: "new" },
    {title: "Public Enemas", take: 14513, change: "new" },
    {title: "28 Cocks Later", take: 14300, change: "new" }
  ],
  20170102: [
    {title: "Pan's Labiarinth", take: 46525, change: "new" },
    {title: "Boobs! A Madea Porno", take: 45981, change: "down" },
    {title: "G*A*S*H", take: 44596, change: "new" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 40427, change: "down" },
    {title: "Night At The Mapplethorpe Museum", take: 38084, change: "new" },
    {title: "The Maltese Fistin", take: 34627, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 30592, change: "new" },
    {title: "Much Ado About Cumming", take: 27891, change: "down" },
    {title: "Rear Entry Widow", take: 25946, change: "new" },
    {title: "Bright Lights, Big Titties", take: 23367, change: "down" },
    {title: "American History XXX", take: 22778, change: "new" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 21780, change: "new" },
    {title: "Hairy Twatter and the Order of the Three Dicks", take: 19479, change: "new" },
    {title: "To Shave and Shave Not", take: 17916, change: "down" },
    {title: "The Munchurian Candidass", take: 16396, change: "new" },
    {title: "Cum and Cummer", take: 14568, change: "down" },
    {title: "The Mud Wrestler", take: 13719, change: "new" },
    {title: "Taint Must Be Shaven", take: 12294, change: "down" },
    {title: "Robocuck", take: 11426, change: "new" },
    {title: "All That Jizz", take: 10493, change: "down" }
  ], 
  20170103: [
    {title: "Pan's Labiarinth", take: 54010, change: "same" },
    {title: "Das Booty", take: 49726, change: "new" },
    {title: "Boobs! A Madea Porno", take: 48768, change: "down" },
    {title: "G*A*S*H", take: 45210, change: "down" },
    {title: "Mad Maxxx: Furious Loads", take: 43071, change: "up" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 40272, change: "down" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 39206, change: "up" },
    {title: "Rear Entry Widow", take: 35840, change: "up" },
    {title: "American History XXX", take: 33498, change: "up" },
    {title: "Night At The Mapplethorpe Museum", take: 33144, change: "down" },
    {title: "Hairy Twatter and the Order of the Three Dicks", take: 32819, change: "up" },
    {title: "Cum and Cummer", take: 31537, change: "up" },
    {title: "The Maltese Fistin", take: 29465, change: "down" },
    {title: "Much Ado About Cumming", take: 27914, change: "down" },
    {title: "To Shave and Shave Not", take: 27080, change: "down" },
    {title: "Bright Lights, Big Titties", take: 26193, change: "down" },
    {title: "Fannie Hall", take: 25478, change: "new" },
    {title: "The Squirt Locker", take: 24368, change: "new" },
    {title: "The Munchurian Candidass", take: 21660, change: "down" },
    {title: "Taint Must Be Shaven", take: 20733, change: "down" }
  ], 
  20170104: [
    {title: "Even Reverse Cowgirls Get the Blues", take: 46039, change: "up" },
    {title: "Pan's Labiarinth", take: 45050, change: "down" },
    {title: "Mad Maxxx: Furious Loads", take: 43274, change: "up" },
    {title: "Boobs! A Madea Porno", take: 41577, change: "down" },
    {title: "Das Booty", take: 38336, change: "down" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 37733, change: "same" },
    {title: "G*A*S*H", take: 37012, change: "down" },
    {title: "The Maltese Fistin", take: 33473, change: "up" },
    {title: "Night At The Mapplethorpe Museum", take: 31110, change: "up" },
    {title: "Hairy Twatter and the Order of the Three Dicks", take: 30796, change: "up" },
    {title: "Person of Incest", take: 27599, change: "new" },
    {title: "The Bicycle Queef", take: 25198, change: "new" },
    {title: "Bright Lights, Big Titties", take: 24843, change: "up" },
    {title: "Rear Entry Widow", take: 23308, change: "down" },
    {title: "American History XXX", take: 22432, change: "down" },
    {title: "Cum and Cummer", take: 21977, change: "down" },
    {title: "To Shave and Shave Not", take: 21153, change: "down" },
    {title: "Much Ado About Cumming", take: 19943, change: "down" },
    {title: "Fannie Hall", take: 19663, change: "down" },
    {title: "Big Trouble in Little Vagina", take: 18454, change: "new" }
  ], 
  20170105: [
    {title: "Pan's Labiarinth", take: 53379, change: "up" },
    {title: "Saturday Night Beaver", take: 48170, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 43368, change: "new" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 39904, change: "down" },
    {title: "Fuck Everlasting", take: 39062, change: "new" },
    {title: "Mad Maxxx: Furious Loads", take: 38493, change: "down" },
    {title: "Das Booty", take: 33997, change: "down" },
    {title: "The Nutting Professor", take: 32000, change: "new" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 28854, change: "down" },
    {title: "Monsters' Pink", take: 27152, change: "new" },
    {title: "Boobs! A Madea Porno", take: 26890, change: "down" },
    {title: "28 Cocks Later", take: 25485, change: "new" },
    {title: "The Maltese Fistin", take: 24409, change: "down" },
    {title: "Hannah on Her Sisters", take: 21960, change: "new" },
    {title: "The Bicycle Queef", take: 21670, change: "down" },
    {title: "Person of Incest", take: 19811, change: "down" },
    {title: "G*A*S*H", take: 19398, change: "down" },
    {title: "Night At The Mapplethorpe Museum", take: 18890, change: "down" },
    {title: "Hairy Twatter and the Order of the Three Dicks", take: 18218, change: "down" },
    {title: "Raging Balls", take: 17505, change: "new" }
  ], 
  20170106: [
    {title: "Saturday Night Beaver", take: 50768, change: "up" },
    {title: "Welcome Back, Frotteur", take: 48096, change: "new" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 45462, change: "up" },
    {title: "Pan's Labiarinth", take: 43755, change: "down" },
    {title: "Group Sex on the Bounty", take: 39065, change: "new" },
    {title: "How To Drain Your Dragon", take: 36023, change: "new" },
    {title: "The Munchurian Candidass", take: 33617, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 33272, change: "new" },
    {title: "Being Inside Elmo", take: 31970, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 29362, change: "down" },
    {title: "Mad Maxxx: Furious Loads", take: 28358, change: "down" },
    {title: "The Curious Case of Benjamin's Butthole", take: 26911, change: "new" },
    {title: "Fuck Everlasting", take: 25783, change: "down" },
    {title: "Fantastic Fucks, Mister", take: 23079, change: "new" },
    {title: "Arse Nick and Yo Face", take: 20915, change: "new" },
    {title: "American History XXX", take: 19007, change: "new" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 17766, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 16343, change: "new" },
    {title: "Pee Wee's Big Member", take: 16149, change: "new" },
    {title: "No Cunt Free For Old Men", take: 15374, change: "new" }
  ], 
  20170107: [
    {title: "Even Reverse Cowgirls Get the Blues", take: 51584, change: "up" },
    {title: "MILF Saigon", take: 48067, change: "new" },
    {title: "G*A*S*H", take: 45730, change: "new" },
    {title: "Welcome Back, Frotteur", take: 42082, change: "down" },
    {title: "Saturday Night Beaver", take: 37538, change: "down" },
    {title: "The Penis Movie", take: 35359, change: "new" },
    {title: "XXX: State of the Union: XXX", take: 34438, change: "new" },
    {title: "Pan's Labiarinth", take: 33790, change: "down" },
    {title: "Blowing For Columbine", take: 33419, change: "new" },
    {title: "Group Sex on the Bounty", take: 31816, change: "down" },
    {title: "Raging Balls", take: 30522, change: "new" },
    {title: "Assassin's Cream", take: 28105, change: "new" },
    {title: "Fill Bill, vol 2", take: 27477, change: "new" },
    {title: "Much Ado About Cumming", take: 26822, change: "new" },
    {title: "A Queer and Pleasant Stranger", take: 25014, change: "new" },
    {title: "Gosford Porking", take: 23723, change: "new" },
    {title: "Rub, Lola! Rub!", take: 21942, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 20303, change: "down" },
    {title: "The Munchurian Candidass", take: 19291, change: "down" },
    {title: "How To Drain Your Dragon", take: 17044, change: "down" }
  ], 
  20170108: [
    {title: "MILF Saigon", take: 54907, change: "up" },
    {title: "The Pleasure of Sierra's Madre", take: 52429, change: "new" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 51309, change: "down" },
    {title: "G*A*S*H", take: 47431, change: "down" },
    {title: "The Penis Movie", take: 46702, change: "up" },
    {title: "Saturday Night Beaver", take: 44335, change: "down" },
    {title: "Raging Balls", take: 42810, change: "up" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 41482, change: "new" },
    {title: "Welcome Back, Frotteur", take: 40920, change: "down" },
    {title: "Blowing For Columbine", take: 39690, change: "down" },
    {title: "Fuck Everlasting", take: 35285, change: "new" },
    {title: "XXX: State of the Union: XXX", take: 33721, change: "down" },
    {title: "Assassin's Cream", take: 30001, change: "down" },
    {title: "Fill Bill, vol 2", take: 28425, change: "down" },
    {title: "Pan's Labiarinth", take: 26249, change: "down" },
    {title: "Group Sex on the Bounty", take: 24393, change: "down" },
    {title: "Fannie Hall", take: 21962, change: "new" },
    {title: "Much Ado About Cumming", take: 19406, change: "down" },
    {title: "Gosford Porking", take: 17649, change: "down" },
    {title: "Blumpkinhead", take: 15646, change: "new" }
  ], 
  20170109: [
    {title: "The Pleasure of Sierra's Madre", take: 52765, change: "up" },
    {title: "The Bicycle Queef", take: 47886, change: "new" },
    {title: "MILF Saigon", take: 42690, change: "down" },
    {title: "Dirty/Hairy", take: 42290, change: "new" },
    {title: "The Penis Movie", take: 37266, change: "same" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 34453, change: "down" },
    {title: "The Filth Element", take: 33608, change: "new" },
    {title: "G*A*S*H", take: 30985, change: "down" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 29006, change: "down" },
    {title: "Saturday Night Beaver", take: 25703, change: "down" },
    {title: "Taint Must Be Shaven", take: 23704, change: "new" },
    {title: "Glazing Arizona", take: 22219, change: "new" },
    {title: "Fuck Everlasting", take: 20633, change: "down" },
    {title: "Strangers on a Tranny", take: 19226, change: "new" },
    {title: "Raging Balls", take: 17426, change: "down" },
    {title: "How To Drain Your Dragon", take: 16858, change: "new" },
    {title: "Welcome Back, Frotteur", take: 15385, change: "down" },
    {title: "The Munchurian Candidass", take: 14263, change: "new" },
    {title: "Blowing For Columbine", take: 12611, change: "down" },
    {title: "Tub Girl Time Machine", take: 12132, change: "new" }
  ], 
  20170110: [
    {title: "The Pleasure of Sierra's Madre", take: 54938, change: "same" },
    {title: "The Bicycle Queef", take: 52246, change: "same" },
    {title: "Much Ado About Cumming", take: 49630, change: "new" },
    {title: "Boobs! A Madea Porno", take: 49029, change: "new" },
    {title: "Das Booty", take: 47768, change: "new" },
    {title: "Dirty/Hairy", take: 46006, change: "down" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 42460, change: "down" },
    {title: "Diddler on the Roof", take: 38059, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 33916, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 31924, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 29104, change: "down" },
    {title: "MILF Saigon", take: 28058, change: "down" },
    {title: "G*A*S*H", take: 26876, change: "down" },
    {title: "The Penis Movie", take: 24901, change: "down" },
    {title: "The Filth Element", take: 23055, change: "down" },
    {title: "Fuck Everlasting", take: 21402, change: "down" },
    {title: "Saturday Night Beaver", take: 19449, change: "down" },
    {title: "Strangers on a Tranny", take: 18958, change: "down" },
    {title: "Blumpkinhead", take: 17458, change: "new" },
    {title: "Taint Must Be Shaven", take: 16174, change: "down" }
  ], 
  20170111: [
    {title: "Big Trouble in Little Vagina", take: 53193, change: "new" },
    {title: "Steve's Tugjobs", take: 50753, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 47131, change: "down" },
    {title: "The Bicycle Queef", take: 41684, change: "down" },
    {title: "Diddler on the Roof", take: 39300, change: "up" },
    {title: "Nutbusters", take: 38436, change: "new" },
    {title: "Boobs! A Madea Porno", take: 34406, change: "down" },
    {title: "Das Booty", take: 33736, change: "down" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 31078, change: "down" },
    {title: "Dirty/Hairy", take: 29033, change: "down" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 28397, change: "down" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 26136, change: "down" },
    {title: "Much Ado About Cumming", take: 25652, change: "down" },
    {title: "Hairy Twatter and the Half Chub Prince", take: 22653, change: "new" },
    {title: "The Penis Movie", take: 21207, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 19423, change: "down" },
    {title: "Fill Bill, vol 2", take: 18338, change: "new" },
    {title: "G*A*S*H", take: 16267, change: "down" },
    {title: "Strangers on a Tranny", take: 16068, change: "down" },
    {title: "MILF Saigon", take: 15702, change: "down" }
  ], 
  20170112: [
    {title: "Wangs of New York", take: 53121, change: "new" },
    {title: "Full Metal Dildo", take: 50736, change: "new" },
    {title: "Lawrence of a Labia", take: 48026, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 43181, change: "new" },
    {title: "The Tight Stuff", take: 41231, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 40228, change: "down" },
    {title: "G.I. Joe: Masturbation", take: 38719, change: "new" },
    {title: "Stanford's Prisonsex Experiments", take: 35477, change: "new" },
    {title: "How To Drain Your Dragon", take: 32373, change: "new" },
    {title: "Watersportsworld", take: 30942, change: "new" },
    {title: "Poonstruck", take: 30086, change: "new" },
    {title: "On Her Majesty's Secret Cervix", take: 28179, change: "new" },
    {title: "Steve's Tugjobs", take: 25975, change: "down" },
    {title: "To Shave and Shave Not", take: 23795, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 21857, change: "down" },
    {title: "Hairy Twatter and the Order of the Three Dicks", take: 20664, change: "new" },
    {title: "Nutbusters", take: 19811, change: "down" },
    {title: "Das Booty", take: 18796, change: "down" },
    {title: "Poonrise Kingdom", take: 18391, change: "new" },
    {title: "The Bicycle Queef", take: 16694, change: "down" }
  ], 
  20170113: [
    {title: "Robocuck", take: 48737, change: "new" },
    {title: "Full Metal Dildo", take: 43656, change: "same" },
    {title: "Haters Whack Off!", take: 38925, change: "new" },
    {title: "Wangs of New York", take: 35294, change: "down" },
    {title: "The Stepfather, Part II", take: 32749, change: "new" },
    {title: "I Broke My Back Mounting", take: 31518, change: "new" },
    {title: "Lawrence of a Labia", take: 31201, change: "down" },
    {title: "Clamilton", take: 28124, change: "new" },
    {title: "Star Whores: The Foreskin Awakens", take: 27771, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 24452, change: "down" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 22948, change: "new" },
    {title: "Whiskey, Tango, Facefuck", take: 21507, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 21142, change: "down" },
    {title: "Suicide Squat", take: 18813, change: "new" },
    {title: "The Nutting Professor", take: 18529, change: "new" },
    {title: "G*A*S*H", take: 18360, change: "new" },
    {title: "The Munchurian Candidass", take: 16497, change: "new" },
    {title: "The Tight Stuff", take: 15596, change: "down" },
    {title: "Dirty/Hairy", take: 14576, change: "new" },
    {title: "Assassin's Cream", take: 13775, change: "new" }
  ], 
  20170114: [
    {title: "Wangs of New York", take: 49170, change: "up" },
    {title: "The Curious Case of Benjamin's Butthole", take: 44845, change: "new" },
    {title: "Rebel Without a Cooze", take: 40852, change: "new" },
    {title: "Gosford Porking", take: 37411, change: "new" },
    {title: "Full Metal Dildo", take: 34326, change: "down" },
    {title: "The Dark Bros In: Fuck Soup", take: 30828, change: "new" },
    {title: "Haters Whack Off!", take: 28935, change: "down" },
    {title: "Anything Grows", take: 27810, change: "new" },
    {title: "The Stepfather, Part II", take: 26947, change: "down" },
    {title: "Robocuck", take: 24228, change: "down" },
    {title: "Veinspotting", take: 23491, change: "new" },
    {title: "Wet Hot American Hummer", take: 20847, change: "new" },
    {title: "Lawrence of a Labia", take: 20171, change: "down" },
    {title: "Big Trouble in Little Vagina", take: 17990, change: "down" },
    {title: "Clamilton", take: 17439, change: "down" },
    {title: "Let the White One In", take: 16333, change: "new" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 14854, change: "down" },
    {title: "Hairy Twatter and the Chamber of Secretions", take: 14513, change: "new" },
    {title: "Blowing For Columbine", take: 13462, change: "new" },
    {title: "Whiskey, Tango, Facefuck", take: 13238, change: "down" }
  ], 
  20170115: [
    {title: "Haters Whack Off!", take: 55289, change: "up" },
    {title: "The Curious Case of Benjamin's Butthole", take: 52422, change: "same" },
    {title: "The Dark Bros In: Fuck Soup", take: 50547, change: "up" },
    {title: "Wangs of New York", take: 46026, change: "down" },
    {title: "Gosford Porking", take: 42594, change: "down" },
    {title: "Fist Me Deadly", take: 37708, change: "new" },
    {title: "Full Metal Dildo", take: 35062, change: "down" },
    {title: "Anything Grows", take: 31298, change: "same" },
    {title: "Veinspotting", take: 29357, change: "up" },
    {title: "G.I. Joe: Masturbation", take: 26504, change: "new" },
    {title: "Rebel Without a Cooze", take: 23872, change: "down" },
    {title: "Robocuck", take: 21870, change: "down" },
    {title: "Wet Hot American Hummer", take: 21597, change: "down" },
    {title: "The Stepfather, Part II", take: 19719, change: "down" },
    {title: "Blumpkinhead", take: 18752, change: "new" },
    {title: "Lawrence of a Labia", take: 18303, change: "down" },
    {title: "Clamilton", take: 16411, change: "down" },
    {title: "American History XXX", take: 15957, change: "new" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 15276, change: "down" },
    {title: "Let the White One In", take: 14864, change: "down" }
  ], 
  20170116: [
    {title: "Me, Myself in Irene", take: 49175, change: "new" },
    {title: "The Filth Element", take: 47896, change: "new" },
    {title: "Gosford Porking", take: 46459, change: "up" },
    {title: "G*A*S*H", take: 44751, change: "new" },
    {title: "Haters Whack Off!", take: 43559, change: "down" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 41903, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 38576, change: "down" },
    {title: "The Curious Case of Benjamin's Butthole", take: 36078, change: "down" },
    {title: "Wangs of New York", take: 33873, change: "down" },
    {title: "G.I. Joe: Masturbation", take: 30608, change: "same" },
    {title: "Anything Grows", take: 27526, change: "down" },
    {title: "Rebel Without a Cooze", take: 26099, change: "down" },
    {title: "Full Metal Dildo", take: 24070, change: "down" },
    {title: "Fist Me Deadly", take: 22429, change: "down" },
    {title: "The Boy Shorts", take: 19865, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 19142, change: "new" },
    {title: "Space Jammin'", take: 18390, change: "new" },
    {title: "Wet Hot American Hummer", take: 17384, change: "down" },
    {title: "Public Enemas", take: 17214, change: "new" },
    {title: "Robocuck", take: 16143, change: "down" }
  ], 
  20170117: [
    {title: "Play With Misty For Me", take: 52017, change: "new" },
    {title: "G*A*S*H", take: 48995, change: "up" },
    {title: "Me, Myself in Irene", take: 45345, change: "down" },
    {title: "The Filth Element", take: 42961, change: "down" },
    {title: "Poonstruck", take: 38258, change: "new" },
    {title: "Stanford's Prisonsex Experiments", take: 37542, change: "new" },
    {title: "Gosford Porking", take: 35251, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 32976, change: "new" },
    {title: "Raging Balls", take: 32578, change: "new" },
    {title: "Strangers on a Tranny", take: 29662, change: "new" },
    {title: "Haters Whack Off!", take: 27418, change: "down" },
    {title: "Hairy Twatter and the Chamber of Secretions", take: 25335, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 23937, change: "down" },
    {title: "Alvin and the Fuckmunks 2: The Fuckuel", take: 22808, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 21473, change: "down" },
    {title: "Bend Over, Like Beckham", take: 20383, change: "new" },
    {title: "12 Years A Slut", take: 19996, change: "new" },
    {title: "Rebel Without a Cooze", take: 19634, change: "down" },
    {title: "All That Jizz", take: 17443, change: "new" },
    {title: "Anything Grows", take: 16239, change: "down" }
  ], 
  20170118: [
    {title: "Group Sex on the Bounty", take: 52337, change: "new" },
    {title: "The Filth Element", take: 47686, change: "up" },
    {title: "G*A*S*H", take: 46270, change: "down" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 42952, change: "new" },
    {title: "Poonstruck", take: 41662, change: "same" },
    {title: "Play With Misty For Me", take: 39392, change: "down" },
    {title: "Six Days Seven Cocks", take: 37467, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 33363, change: "same" },
    {title: "Stanford's Prisonsex Experiments", take: 32506, change: "down" },
    {title: "Attack The Cock", take: 31182, change: "new" },
    {title: "Me, Myself in Irene", take: 28952, change: "down" },
    {title: "Gosford Porking", take: 26355, change: "down" },
    {title: "Hairy Twatter and the Chamber of Secretions", take: 24032, change: "down" },
    {title: "Lawrence of a Labia", take: 21766, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 20789, change: "down" },
    {title: "Raging Balls", take: 18607, change: "down" },
    {title: "Strangers on a Tranny", take: 17583, change: "down" },
    {title: "Bend Over, Like Beckham", take: 16400, change: "down" },
    {title: "Scatatouille", take: 15370, change: "new" },
    {title: "Welcome Back, Frotteur", take: 14937, change: "new" }
  ], 
  20170119: [
    {title: "Fist Me Deadly", take: 50479, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 45796, change: "new" },
    {title: "The Squirt Locker", take: 40396, change: "new" },
    {title: "Poonstruck", take: 36466, change: "up" },
    {title: "Play With Misty For Me", take: 35549, change: "up" },
    {title: "G*A*S*H", take: 32635, change: "down" },
    {title: "The Filth Element", take: 29137, change: "down" },
    {title: "The Boy Shorts", take: 27276, change: "new" },
    {title: "50 Fist Dates", take: 26252, change: "new" },
    {title: "Wangs of New York", take: 25783, change: "new" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 24425, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 23793, change: "down" },
    {title: "Public Enemas", take: 21471, change: "new" },
    {title: "Atlas Chugged", take: 20754, change: "new" },
    {title: "The Pleasure of Sierra's Madre", take: 18303, change: "new" },
    {title: "Six Days Seven Cocks", take: 18015, change: "down" },
    {title: "Group Sex on the Bounty", take: 16805, change: "down" },
    {title: "Attack The Cock", take: 14988, change: "down" },
    {title: "Me, Myself in Irene", take: 13244, change: "down" },
    {title: "Lawrence of a Labia", take: 11922, change: "down" }
  ], 
  20170120: [
    {title: "Enslaving Private Ryan", take: 50119, change: "new" },
    {title: "Stanford's Prisonsex Experiments", take: 48117, change: "new" },
    {title: "Anything Grows", take: 45313, change: "new" },
    {title: "Fingering Dory", take: 43258, change: "new" },
    {title: "Fist Me Deadly", take: 41447, change: "down" },
    {title: "Let the White One In", take: 37170, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 33096, change: "down" },
    {title: "The Curious Case of Benjamin's Butthole", take: 31202, change: "new" },
    {title: "Person of Incest", take: 27718, change: "new" },
    {title: "Nutbusters", take: 24447, change: "new" },
    {title: "Space Jammin'", take: 22637, change: "new" },
    {title: "There's Someone Inside Mary", take: 20231, change: "new" },
    {title: "The Squirt Locker", take: 19833, change: "down" },
    {title: "Poonstruck", take: 18153, change: "down" },
    {title: "Saturday Night Beaver", take: 16925, change: "new" },
    {title: "Play With Misty For Me", take: 16385, change: "down" },
    {title: "Rub, Lola! Rub!", take: 15319, change: "new" },
    {title: "Rear Entry Widow", take: 14548, change: "new" },
    {title: "The Boy Shorts", take: 13313, change: "down" },
    {title: "Mad Maxxx: Furious Loads", take: 12899, change: "new" }
  ], 
  20170121: [
    {title: "How To Drain Your Dragon", take: 49928, change: "new" },
    {title: "Monsters' Pink", take: 44413, change: "new" },
    {title: "Stanford's Prisonsex Experiments", take: 41107, change: "down" },
    {title: "2 Fast 2 Furry Puss", take: 36252, change: "new" },
    {title: "Enslaving Private Ryan", take: 35624, change: "down" },
    {title: "Anything Grows", take: 33092, change: "down" },
    {title: "Fist Me Deadly", take: 31653, change: "down" },
    {title: "To Shave and Shave Not", take: 30832, change: "new" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 27205, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 26713, change: "new" },
    {title: "Midnight Ladyboy", take: 25032, change: "new" },
    {title: "The Curious Case of Benjamin's Butthole", take: 23307, change: "down" },
    {title: "Big Trouble in Little Vagina", take: 21364, change: "new" },
    {title: "Group Sex on the Bounty", take: 19768, change: "new" },
    {title: "Person of Incest", take: 17500, change: "down" },
    {title: "Let the White One In", take: 16040, change: "down" },
    {title: "Fingering Dory", take: 14794, change: "down" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 13355, change: "new" },
    {title: "Nutbusters", take: 12047, change: "down" },
    {title: "Spurtigo", take: 11263, change: "new" }
  ], 
  20170122: [
    {title: "How To Drain Your Dragon", take: 48857, change: "same" },
    {title: "2 Fast 2 Furry Puss", take: 47235, change: "up" },
    {title: "Anything Grows", take: 42510, change: "up" },
    {title: "Monsters' Pink", take: 41137, change: "down" },
    {title: "Lawrence of a Labia", take: 38330, change: "new" },
    {title: "Stanford's Prisonsex Experiments", take: 37574, change: "down" },
    {title: "Bang My Bum Slowly", take: 36563, change: "new" },
    {title: "Fist Me Deadly", take: 34016, change: "down" },
    {title: "Hairy Twatter and the Prisoner of Ass Cabin", take: 31177, change: "new" },
    {title: "Bright Lights, Big Titties", take: 30697, change: "new" },
    {title: "Steve's Tugjobs", take: 27095, change: "new" },
    {title: "The Italian Blowjob", take: 25697, change: "new" },
    {title: "The Gang Bang Theory", take: 23899, change: "new" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 22957, change: "down" },
    {title: "Enslaving Private Ryan", take: 20512, change: "down" },
    {title: "Mad Maxxx: Furious Loads", take: 20037, change: "new" },
    {title: "To Shave and Shave Not", take: 19562, change: "down" },
    {title: "There's Someone Inside Mary", take: 17923, change: "new" },
    {title: "The African Drag Queen", take: 17263, change: "new" },
    {title: "Taint Must Be Shaven", take: 16364, change: "new" }
  ], 
  20170123: [
    {title: "Fantastic Fucks, Mister", take: 48117, change: "new" },
    {title: "2 Fast 2 Furry Puss", take: 44593, change: "same" },
    {title: "Pan's Labiarinth", take: 39442, change: "new" },
    {title: "How To Drain Your Dragon", take: 34799, change: "down" },
    {title: "Hairy Twatter and the Order of the Three Dicks", take: 31047, change: "new" },
    {title: "Much Ado About Cumming", take: 27693, change: "new" },
    {title: "Six Days Seven Cocks", take: 24740, change: "new" },
    {title: "Wangs of New York", take: 22735, change: "new" },
    {title: "Monsters' Pink", take: 21445, change: "down" },
    {title: "Anything Grows", take: 19966, change: "down" },
    {title: "Lawrence of a Labia", take: 18294, change: "down" },
    {title: "Boyz N The Clitoral Hood", take: 16841, change: "new" },
    {title: "Bang My Bum Slowly", take: 15942, change: "down" },
    {title: "Stanford's Prisonsex Experiments", take: 15745, change: "down" },
    {title: "Das Booty", take: 14664, change: "new" },
    {title: "Full Metal Dildo", take: 13145, change: "new" },
    {title: "Steve's Tugjobs", take: 11682, change: "down" },
    {title: "Hairy Twatter and the Prisoner of Ass Cabin", take: 10343, change: "down" },
    {title: "Fist Me Deadly", take: 9648, change: "down" },
    {title: "Assassin's Cream", take: 9270, change: "new" }
  ], 
  20170124: [
    {title: "How To Drain Your Dragon", take: 59173, change: "up" },
    {title: "Indiana Bones and the Temple of Poon", take: 54456, change: "new" },
    {title: "G.I. Joe: Masturbation", take: 50830, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 48826, change: "new" },
    {title: "Fantastic Fucks, Mister", take: 45962, change: "down" },
    {title: "Nathan For Everyone", take: 40628, change: "new" },
    {title: "2 Fast 2 Furry Puss", take: 36512, change: "down" },
    {title: "Much Ado About Cumming", take: 35956, change: "down" },
    {title: "Pan's Labiarinth", take: 34732, change: "down" },
    {title: "Hairy Twatter and the Order of the Three Dicks", take: 33408, change: "down" },
    {title: "Scats", take: 32308, change: "new" },
    {title: "Six Days Seven Cocks", take: 28997, change: "down" },
    {title: "CitizenWhore", take: 26330, change: "new" },
    {title: "Arse Nick and Yo Face", take: 24579, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 23406, change: "new" },
    {title: "Boyz N The Clitoral Hood", take: 23043, change: "down" },
    {title: "Whiskey, Tango, Facefuck", take: 21583, change: "new" },
    {title: "The Italian Blowjob", take: 20334, change: "new" },
    {title: "Wangs of New York", take: 18452, change: "down" },
    {title: "Anything Grows", take: 17900, change: "down" }
  ], 
  20170125: [
    {title: "I Broke My Back Mounting", take: 52934, change: "new" },
    {title: "The Princess Ride", take: 49753, change: "new" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 44045, change: "new" },
    {title: "Boy Meat's World", take: 40694, change: "new" },
    {title: "Taint Must Be Shaven", take: 40003, change: "new" },
    {title: "Man of La Muncha", take: 35454, change: "new" },
    {title: "XXX: State of the Union: XXX", take: 31415, change: "new" },
    {title: "12 Years A Slut", take: 27908, change: "new" },
    {title: "Full Metal Dildo", take: 26838, change: "new" },
    {title: "Bang My Bum Slowly", take: 26057, change: "new" },
    {title: "The Color of a Money Shot", take: 25144, change: "new" },
    {title: "The Lust of the Mohicans", take: 23071, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 22325, change: "new" },
    {title: "Scatatouille", take: 21265, change: "new" },
    {title: "The Squirt Locker", take: 19595, change: "new" },
    {title: "Enslaving Private Ryan", take: 19198, change: "new" },
    {title: "Jiz and the Diaphragms", take: 17650, change: "new" },
    {title: "How To Drain Your Dragon", take: 17221, change: "down" },
    {title: "Indiana Bones and the Temple of Poon", take: 15654, change: "down" },
    {title: "All That Jizz", take: 14308, change: "new" }
  ], 
  20170126: [
    {title: "The Princess Ride", take: 52980, change: "up" },
    {title: "Boy Meat's World", take: 47189, change: "up" },
    {title: "Pee Wee's Big Member", take: 46483, change: "new" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 45136, change: "down" },
    {title: "Nathan For Everyone", take: 44713, change: "new" },
    {title: "I Broke My Back Mounting", take: 41704, change: "down" },
    {title: "Whiskey, Tango, Facefuck", take: 41244, change: "new" },
    {title: "Taint Must Be Shaven", take: 36722, change: "down" },
    {title: "XXX: State of the Union: XXX", take: 36384, change: "down" },
    {title: "12 Years A Slut", take: 33818, change: "down" },
    {title: "The Italian Blowjob", take: 33415, change: "new" },
    {title: "BALL-E", take: 29586, change: "new" },
    {title: "Man of La Muncha", take: 28083, change: "down" },
    {title: "Tub Girl Time Machine", take: 26690, change: "new" },
    {title: "Strangers on a Tranny", take: 24845, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 21917, change: "new" },
    {title: "2 Fast 2 Furry Puss", take: 20742, change: "new" },
    {title: "Veinspotting", take: 19839, change: "new" },
    {title: "Full Metal Dildo", take: 19135, change: "down" },
    {title: "Bang My Bum Slowly", take: 17567, change: "down" }
  ], 
  20170127: [
    {title: "Scott Pilgrim Vs Those Girls", take: 52992, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 48411, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 45661, change: "new" },
    {title: "Jerk/Off", take: 44997, change: "new" },
    {title: "Dirty/Hairy", take: 40113, change: "new" },
    {title: "The Munchurian Candidass", take: 39347, change: "new" },
    {title: "Scatatouille", take: 38886, change: "new" },
    {title: "The Princess Ride", take: 34796, change: "down" },
    {title: "G*A*S*H", take: 31023, change: "new" },
    {title: "Public Enemas", take: 30369, change: "new" },
    {title: "Wangs of New York", take: 28310, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 27797, change: "new" },
    {title: "Raging Balls", take: 26692, change: "new" },
    {title: "Pee Wee's Big Member", take: 23585, change: "down" },
    {title: "Nathan For Everyone", take: 22685, change: "down" },
    {title: "Big Hero 16 Inch", take: 20756, change: "new" },
    {title: "Boy Meat's World", take: 19129, change: "down" },
    {title: "Charles In Charles", take: 18202, change: "new" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 17134, change: "down" },
    {title: "The Pleasure of Sierra's Madre", take: 16621, change: "new" }
  ], 
  20170128: [
    {title: "Night At The Mapplethorpe Museum", take: 58451, change: "up" },
    {title: "Scott Pilgrim Vs Those Girls", take: 55922, change: "down" },
    {title: "Moneyballin", take: 51807, change: "new" },
    {title: "Jerk/Off", take: 46626, change: "same" },
    {title: "The Munchurian Candidass", take: 45140, change: "up" },
    {title: "Scatatouille", take: 40497, change: "up" },
    {title: "Mr. Smith Goes Down on Washington", take: 39340, change: "down" },
    {title: "G*A*S*H", take: 37893, change: "up" },
    {title: "Dirty/Hairy", take: 37452, change: "down" },
    {title: "The Princess Ride", take: 34866, change: "down" },
    {title: "On Her Majesty's Secret Cervix", take: 31397, change: "new" },
    {title: "One Flew Into The Poopoo's Nest", take: 28546, change: "same" },
    {title: "Arse Nick and Yo Face", take: 26567, change: "new" },
    {title: "Raging Balls", take: 24344, change: "down" },
    {title: "Boy Meat's World", take: 21496, change: "up" },
    {title: "Pee Wee's Big Member", take: 20333, change: "down" },
    {title: "Wangs of New York", take: 19260, change: "down" },
    {title: "The Pleasure of Sierra's Madre", take: 18685, change: "up" },
    {title: "Charles In Charles", take: 17092, change: "down" },
    {title: "Big Hero 16 Inch", take: 15343, change: "down" }
  ], 
  20170129: [
    {title: "Jerk/Off", take: 48007, change: "up" },
    {title: "Moneyballin", take: 43693, change: "up" },
    {title: "Scott Pilgrim Vs Those Girls", take: 41866, change: "down" },
    {title: "I Broke My Back Mounting", take: 39182, change: "new" },
    {title: "The Bicycle Queef", take: 35276, change: "new" },
    {title: "Night At The Mapplethorpe Museum", take: 34871, change: "down" },
    {title: "Breaking Chad", take: 34530, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 33377, change: "down" },
    {title: "The Munchurian Candidass", take: 30925, change: "down" },
    {title: "Scatatouille", take: 30179, change: "down" },
    {title: "Lawrence of a Labia", take: 28423, change: "new" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 27116, change: "new" },
    {title: "G*A*S*H", take: 24801, change: "down" },
    {title: "One Flew Into The Poopoo's Nest", take: 24205, change: "down" },
    {title: "The Princess Ride", take: 22303, change: "down" },
    {title: "Dirty/Hairy", take: 21079, change: "down" },
    {title: "On Her Majesty's Secret Cervix", take: 19029, change: "down" },
    {title: "Star Whores: The Foreskin Awakens", take: 18395, change: "new" },
    {title: "Raging Balls", take: 17466, change: "down" },
    {title: "Arse Nick and Yo Face", take: 17174, change: "down" }
  ], 
  20170130: [
    {title: "Scott Pilgrim Vs Those Girls", take: 54234, change: "up" },
    {title: "Taint Must Be Shaven", take: 47870, change: "new" },
    {title: "Better Ball Saul", take: 45889, change: "new" },
    {title: "Jerk/Off", take: 41304, change: "down" },
    {title: "Pan's Labiarinth", take: 38891, change: "new" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 37908, change: "new" },
    {title: "Fist Fist, Bang Bang", take: 35844, change: "new" },
    {title: "Rub, Lola! Rub!", take: 34670, change: "new" },
    {title: "To Shave and Shave Not", take: 34035, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 32537, change: "new" },
    {title: "A Streetwalker Named Desireé", take: 30469, change: "new" },
    {title: "Moneyballin", take: 27094, change: "down" },
    {title: "I Broke My Back Mounting", take: 24532, change: "down" },
    {title: "The Bicycle Queef", take: 22546, change: "down" },
    {title: "Night At The Mapplethorpe Museum", take: 19992, change: "down" },
    {title: "Breaking Chad", take: 19031, change: "down" },
    {title: "Jiro Creams On Suki", take: 18106, change: "new" },
    {title: "Midnight Ladyboy", take: 17209, change: "new" },
    {title: "Tub Girl Time Machine", take: 15927, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 15549, change: "down" }
  ], 
  20170131: [
    {title: "Pan's Labiarinth", take: 49958, change: "up" },
    {title: "Better Ball Saul", take: 46362, change: "up" },
    {title: "Taint Must Be Shaven", take: 42320, change: "down" },
    {title: "Scott Pilgrim Vs Those Girls", take: 38892, change: "down" },
    {title: "To Shave and Shave Not", take: 36402, change: "up" },
    {title: "A Streetwalker Named Desireé", take: 35733, change: "up" },
    {title: "Jerk/Off", take: 32803, change: "down" },
    {title: "Fist Fist, Bang Bang", take: 29974, change: "down" },
    {title: "Much Ado About Cumming", take: 29072, change: "new" },
    {title: "Rub, Lola! Rub!", take: 26196, change: "down" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 24433, change: "down" },
    {title: "Moneyballin", take: 23577, change: "same" },
    {title: "I Broke My Back Mounting", take: 22320, change: "same" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 19850, change: "new" },
    {title: "Evil Head 2: Head By Dawn", take: 18992, change: "new" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 16892, change: "down" },
    {title: "Night At The Mapplethorpe Museum", take: 16477, change: "down" },
    {title: "Indiana Bones and the Temple of Poon", take: 15626, change: "new" },
    {title: "Tub Girl Time Machine", take: 14298, change: "same" },
    {title: "Mr. Smith Goes Down on Washington", take: 13315, change: "same" }
  ]
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