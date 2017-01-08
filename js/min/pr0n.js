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
  "Steve's Jobs",
  "Night At The Mapplethorpe Museum",
  "The Boy Shorts",
  "Fist Fist, Bang Bang",
  "In Sid Anus",
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
  "Mr. Chode's Wild Ride",
  "Like Water For Cockolate",
  "The Gropes of Wrath",
  "Twatman vs Booberman: Dawn of Just Tits",
  "Slutter Island",
  "Throbbin' Hood: Princess of Queefs",
  "Frotting Hill",
  "A Clockwork Orgy",
  "The Legend of Gagger Vance",
  "Cool Handjob, Luke",
  "Good Night And Good Fuck",
  "An Officer With A Gentleman",
  "White Men Can't Hump",
  "What In The World Are You Spraying (An Alex Jones Documentary)",
  "Enemy of the Prostate",
  "Bio-Domme",
  "Nookie of the Year",
  "Bareback To The Future",
  "Titzcarraldo",
  "The Scissorhood of the Traveling Underpants",
  "Birdman (or The Unexpected Pleasure of Dominance)",
  "My Big Fat Freak, Wetting",
  "Jack Reacharound",
  "Crotch-22",
  
  // Jack Lemmon
  "Some Like A Twat",
  "Humpy Old Men",
  "Under The Cum Cum Tree",
  
  // Coen Brothers
  "Glazing Arizona",
  "The Ladydrillers",
  "No Cunt Free For Old Men",
  "Actually Inside Llewyn Davis",
  "The Cocksucker Proxy",
  "Nail Caesar!",
  
  // Lord of the Rings series
  "Lord of the Cockrings: The Fellowship of the Cockring",
  "Lord of the Cockrings: The Return of the Kink",
  "Lord of the Cockrings: The Two Showers",
  
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
  "Eastbound And Going Down",
  
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
  "Scats",
  "Annie Fuck Your Bum",
  "Moulan Spooge",
];

var pornData = {
  "20170101": [
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
  "20170102": [
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
  "20170103": [
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
  "20170104": [
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
  "20170105": [
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
  "20170106": [
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
  "20170107": [
    {title: "The Fantastic Foursome", take: 53588, change: "new" },
    {title: "Enslaving Private Ryan", take: 50341, change: "new" },
    {title: "Saturday Night Beaver", take: 46774, change: "down" },
    {title: "An Officer With A Gentleman", take: 42435, change: "new" },
    {title: "The Dong and I", take: 39161, change: "new" },
    {title: "Glazing Arizona", take: 35436, change: "new" },
    {title: "A Clockwork Orgy", take: 34221, change: "new" },
    {title: "Hairy Twatter and the Chamber of Secretions", take: 30697, change: "new" },
    {title: "Indiana Bones and the Temple of Poon", take: 28127, change: "new" },
    {title: "The Scissorhood of the Traveling Underpants", take: 25452, change: "new" },
    {title: "Welcome Back, Frotteur", take: 25058, change: "down" },
    {title: "The African Drag Queen", take: 24169, change: "new" },
    {title: "How To Drain Your Dragon", take: 21526, change: "down" },
    {title: "Man of La Muncha", take: 19453, change: "new" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 17528, change: "down" },
    {title: "Full Metal Dildo", take: 15774, change: "new" },
    {title: "Bang My Bum Slowly", take: 15035, change: "new" },
    {title: "Group Sex on the Bounty", take: 14776, change: "down" },
    {title: "Lawrence of a Labia", take: 13911, change: "new" },
    {title: "Being Inside Elmo", take: 13082, change: "down" }
  ], 
  "20170108": [
    {title: "Actually Inside Llewyn Davis", take: 48423, change: "new" },
    {title: "Suicide Squat", take: 45418, change: "new" },
    {title: "Saturday Night Beaver", take: 41367, change: "same" },
    {title: "Guys and Guys", take: 36643, change: "new" },
    {title: "The Ladydrillers", take: 35131, change: "new" },
    {title: "Some Like A Twat", take: 31502, change: "new" },
    {title: "A Queer and Pleasant Stranger", take: 27773, change: "new" },
    {title: "An Officer With A Gentleman", take: 26761, change: "down" },
    {title: "12 Years A Slut", take: 25041, change: "new" },
    {title: "The Dong and I", take: 23805, change: "down" },
    {title: "A Clockwork Orgy", take: 21091, change: "down" },
    {title: "Enslaving Private Ryan", take: 19706, change: "down" },
    {title: "White Men Can't Hump", take: 18152, change: "new" },
    {title: "Blowing For Columbine", take: 17227, change: "new" },
    {title: "The Fantastic Foursome", take: 15798, change: "down" },
    {title: "The Stepfather, Part II", take: 14180, change: "new" },
    {title: "Humpy Old Men", take: 12663, change: "new" },
    {title: "Hairy Twatter and the Chamber of Secretions", take: 11171, change: "down" },
    {title: "Glazing Arizona", take: 10493, change: "down" },
    {title: "Indiana Bones and the Temple of Poon", take: 9877, change: "down" }
  ], 
  "20170109": [
    {title: "The Tight Stuff", take: 57070, change: "new" },
    {title: "Big Hero 16 Inch", take: 52687, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 51321, change: "new" },
    {title: "Fist Me Deadly", take: 48891, change: "new" },
    {title: "The Mud Wrestler", take: 43407, change: "new" },
    {title: "Actually Inside Llewyn Davis", take: 42182, change: "down" },
    {title: "Hairy Twatter and the Gobblin' of Your Spire", take: 39660, change: "new" },
    {title: "Jiro Creams On Suki", take: 38044, change: "new" },
    {title: "Straight Into Conner", take: 34419, change: "new" },
    {title: "Suicide Squat", take: 33820, change: "down" },
    {title: "Spurtigo", take: 33036, change: "new" },
    {title: "Boy Meat's World", take: 30678, change: "new" },
    {title: "Guys and Guys", take: 28866, change: "down" },
    {title: "Saturday Night Beaver", take: 28437, change: "down" },
    {title: "The Gang Bang Theory", take: 26527, change: "new" },
    {title: "Birdman (or The Unexpected Pleasure of Dominance)", take: 24943, change: "new" },
    {title: "Fingering Dory", take: 24452, change: "new" },
    {title: "I Broke My Back Mounting", take: 21954, change: "new" },
    {title: "The Ladydrillers", take: 21116, change: "down" },
    {title: "Poonstruck", take: 20474, change: "new" }
  ], 
  "20170110": [
    {title: "Fist Me Deadly", take: 52722, change: "up" },
    {title: "Cool Handjob, Luke", take: 47725, change: "new" },
    {title: "Big Hero 16 Inch", take: 45836, change: "down" },
    {title: "One Blew Over The Cuckold's Nest", take: 43563, change: "down" },
    {title: "The Tight Stuff", take: 38470, change: "down" },
    {title: "Gosford Porking", take: 35885, change: "new" },
    {title: "Jiro Creams On Suki", take: 32576, change: "up" },
    {title: "50 Fist Dates", take: 30195, change: "new" },
    {title: "Actually Inside Llewyn Davis", take: 27016, change: "down" },
    {title: "The Mud Wrestler", take: 24047, change: "down" },
    {title: "Twatman vs Booberman: Dawn of Just Tits", take: 22185, change: "new" },
    {title: "Hairy Twatter and the Gobblin' of Your Spire", take: 21746, change: "down" },
    {title: "The Gang Bang Theory", take: 19846, change: "up" },
    {title: "Suicide Squat", take: 19479, change: "down" },
    {title: "Spurtigo", take: 17845, change: "down" },
    {title: "Boy Meat's World", take: 16158, change: "down" },
    {title: "Frotting Hill", take: 15171, change: "new" },
    {title: "Let the White One In", take: 15012, change: "new" },
    {title: "Fingering Dory", take: 13590, change: "down" },
    {title: "Birdman (or The Unexpected Pleasure of Dominance)", take: 12633, change: "down" }
  ], 
  "20170111": [
    {title: "Fist Me Deadly", take: 53020, change: "same" },
    {title: "Jack Reacharound", take: 49787, change: "new" },
    {title: "Poonrise Kingdom", take: 44999, change: "new" },
    {title: "GoodFellatas", take: 39686, change: "new" },
    {title: "Gosford Porking", take: 36273, change: "up" },
    {title: "All That Jizz", take: 35675, change: "new" },
    {title: "Cool Handjob, Luke", take: 33476, change: "down" },
    {title: "Big Hero 16 Inch", take: 32406, change: "down" },
    {title: "The Tight Stuff", take: 29497, change: "down" },
    {title: "50 Fist Dates", take: 26641, change: "down" },
    {title: "One Blew Over The Cuckold's Nest", take: 24511, change: "down" },
    {title: "The Gang Bang Theory", take: 23217, change: "up" },
    {title: "The Mud Wrestler", take: 21515, change: "down" },
    {title: "Twatman vs Booberman: Dawn of Just Tits", take: 19131, change: "down" },
    {title: "Jiro Creams On Suki", take: 17653, change: "down" },
    {title: "Diddler on the Roof", take: 15827, change: "new" },
    {title: "Eastbound And Going Down", take: 13998, change: "new" },
    {title: "Spurtigo", take: 12856, change: "down" },
    {title: "Actually Inside Llewyn Davis", take: 12367, change: "down" },
    {title: "Boy Meat's World", take: 11346, change: "down" }
  ], 
  "20170112": [
    {title: "The Princess Ride", take: 48372, change: "new" },
    {title: "Fist Me Deadly", take: 45459, change: "down" },
    {title: "Lord of the Cockrings: The Return of the Kink", take: 43979, change: "new" },
    {title: "Jack Reacharound", take: 42844, change: "down" },
    {title: "Poonrise Kingdom", take: 41070, change: "down" },
    {title: "All That Jizz", take: 38455, change: "same" },
    {title: "Assassin's Cream", take: 36006, change: "new" },
    {title: "Pearl Necklace Harbor", take: 32713, change: "new" },
    {title: "Charles In Charles", take: 30427, change: "new" },
    {title: "Big Hero 16 Inch", take: 29573, change: "down" },
    {title: "GoodFellatas", take: 26627, change: "down" },
    {title: "Gosford Porking", take: 24431, change: "down" },
    {title: "In Sid Anus", take: 24201, change: "new" },
    {title: "Cool Handjob, Luke", take: 23553, change: "down" },
    {title: "The Tight Stuff", take: 21824, change: "down" },
    {title: "The Gang Bang Theory", take: 21135, change: "down" },
    {title: "One Blew Over The Cuckold's Nest", take: 20711, change: "down" },
    {title: "Scatatouille", take: 18530, change: "new" },
    {title: "Me, Myself in Irene", take: 16715, change: "new" },
    {title: "The Mud Wrestler", take: 15911, change: "down" }
  ], 
  "20170113": [
    {title: "Stanford's Prisonsex Experiments", take: 48414, change: "new" },
    {title: "Fist Me Deadly", take: 44934, change: "same" },
    {title: "Annie Fuck Your Bum", take: 40352, change: "new" },
    {title: "The Princess Ride", take: 38921, change: "down" },
    {title: "Rogerin' Me", take: 38272, change: "new" },
    {title: "Breasts In Shows", take: 37553, change: "new" },
    {title: "Tub Girl Time Machine", take: 33128, change: "new" },
    {title: "Lord of the Cockrings: The Return of the Kink", take: 32161, change: "down" },
    {title: "Jack Reacharound", take: 29965, change: "down" },
    {title: "Evil Head 2: Head By Dawn", take: 28160, change: "new" },
    {title: "There's Someone Inside Mary", take: 27725, change: "new" },
    {title: "My Big Fat Freak, Wetting", take: 25368, change: "new" },
    {title: "Poonrise Kingdom", take: 23887, change: "down" },
    {title: "One Flew Into The Poopoo's Nest", take: 22181, change: "new" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 21621, change: "new" },
    {title: "Star Whores: The Foreskin Awakens", take: 19214, change: "new" },
    {title: "Assassin's Cream", take: 18046, change: "down" },
    {title: "All That Jizz", take: 16737, change: "down" },
    {title: "Moulan Spooge", take: 15599, change: "new" },
    {title: "The Color of a Money Shot", take: 15300, change: "new" }
  ], 
  "20170114": [
    {title: "Stanford's Prisonsex Experiments", take: 48853, change: "same" },
    {title: "Fist Me Deadly", take: 47393, change: "same" },
    {title: "Rogerin' Me", take: 44214, change: "up" },
    {title: "Jiz and the Diaphragms", take: 40449, change: "new" },
    {title: "Enemy of the Prostate", take: 38160, change: "new" },
    {title: "Attack The Cock", take: 37027, change: "new" },
    {title: "Lord of the Cockrings: The Return of the Kink", take: 36249, change: "up" },
    {title: "Breasts In Shows", take: 35261, change: "down" },
    {title: "Annie Fuck Your Bum", take: 31219, change: "down" },
    {title: "Hairy Twatter and the Pornographer's Bone", take: 28487, change: "new" },
    {title: "CitizenWhore", take: 26324, change: "new" },
    {title: "The Princess Ride", take: 23263, change: "down" },
    {title: "Wangs of New York", take: 22873, change: "new" },
    {title: "Tub Girl Time Machine", take: 20140, change: "down" },
    {title: "Clamilton", take: 19205, change: "new" },
    {title: "Crotch-22", take: 18181, change: "new" },
    {title: "The Filth Element", take: 17187, change: "new" },
    {title: "Jack Reacharound", take: 15296, change: "down" },
    {title: "Titzcarraldo", take: 14721, change: "new" },
    {title: "Scott Pilgrim Vs Those Girls", take: 13959, change: "new" }
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
  var intentText = encodeURI("Number "+rank+" for "+currentDay.short+": "+title);
  var intentURL = "https://twitter.com/intent/tweet?text="+intentText+'%0ahttp://jerking.online';
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