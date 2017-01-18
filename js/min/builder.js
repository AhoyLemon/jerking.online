// jshint -W117
// jshint -W098
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
  "Lube\u00B2: Hyperlube",
  "Clitty Lickers 2: The Legend of Curly Pubes",
  "3 Men And A Jar Of Lube",
  "In Glory Hole Basterds",
  "Pacific Rimjob",
  "Wank You For Smoking",
  "Fuck-It Ralph",
  "The Wolf of Ball Street",
  "An American Warewolf In Laura",
  "The Last Starfucker",
  "Kneel And Deliver",
  "The Black Swanzstucker",
  "Slop Shot",
  "Million Dollar Booby",
  "Brian's Schlong",
  "Twins Peaking",
  "Trick 'r Skeet",
  "Sore Jaws",
  "The Ho Men",
  "Invasion of the Bawdy Snatches",
  "Night of the Giving Head",
  "Reservoir Dongs",
  "Glazed and Confused",
  "Thighs Wide Shut",
  "Stay Hard 2: Stay Harder",
  "21 Pumps, SKEET!",
  "9″ to 5″",
  "Twerking Girl",
  "How To Get Some Head In Advertising",
  "Bite Club",
  "GladHeAteHer",
  "Before The Devil Knows You're Dicked",
  "Fantastic Breasts And Where To Fuck Them",
  "Koyaanistwatsi",
  "Five Years In To Beth",
  "Four Weddings, A Funeral, And Then A Gangbang",
  "Never Been Kissed... There",
  "The Constant Groper",
  "Banging John Malkovich",
  "Lapdancer In The Dark",
  "Who Rogered That Rabbit?",
  "Urethral Weapon",
  "Kubo and the G Strings",
  "Shaun The Creep Movie",
  "Tim, Fuck Two",
  "Sex Machina",
  "Peggy Guggenheim: Fart Addict",
  
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
  "Burn After Peeing",
  "The Big Lebow Chicka Wow Wow Ski",
  
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
  
  // The Hunger Games
  "The Hung Games",
  "The Hung Games: Flashing Firecrotch",
  "The Hung Games: Crotch On Fire",
  "The Hung Games: Mocking J/O [Part 1]",
  
  // James Bond
  "Dr. O Yes",
  "From Gushing With Love",
  "On Her Majesty's Secret Cervix",
  "Octopussy, Novempussy, Decapussy... Whatapussy!",
  
  // Star Trek series...
  "Slut Trek II: The Wrath of Cum",
  
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
  "Who's The Bottom?",
  "Perfect Strange",
  "Married... With An Understanding",
  
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
  "Moulan Spooge"
];

// jshint -W098
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
    {title: "Rebel Without a Cooze", take: 49970, change: "new" },
    {title: "Titzcarraldo", take: 47804, change: "new" },
    {title: "Me, Myself in Irene", take: 42344, change: "new" },
    {title: "Gosford Porking", take: 38846, change: "up" },
    {title: "Cool Handjob, Luke", take: 38133, change: "down" },
    {title: "One Blew Over The Cuckold's Nest", take: 34991, change: "down" },
    {title: "The Tight Stuff", take: 32824, change: "down" },
    {title: "Play With Misty For Me", take: 31488, change: "new" },
    {title: "Big Hero 16 Inch", take: 28892, change: "down" },
    {title: "Actually Inside Llewyn Davis", take: 27206, change: "down" },
    {title: "Tub Girl Time Machine", take: 26700, change: "new" },
    {title: "50 Fist Dates", take: 24484, change: "down" },
    {title: "Jiro Creams On Suki", take: 22020, change: "down" },
    {title: "Assassin's Cream", take: 19428, change: "new" },
    {title: "CitizenWhore", take: 17473, change: "new" },
    {title: "Robocuck", take: 15844, change: "new" },
    {title: "The Mud Wrestler", take: 14976, change: "down" },
    {title: "Breaking Chad", take: 13671, change: "new" },
    {title: "Spurtigo", take: 13214, change: "down" },
    {title: "Twatman vs Booberman: Dawn of Just Tits", take: 12456, change: "down" }
  ], 
  "20170112": [
    {title: "Me, Myself in Irene", take: 53222, change: "up" },
    {title: "Slop Shot", take: 50699, change: "new" },
    {title: "2 Fast 2 Furry Puss", take: 48592, change: "new" },
    {title: "Gosford Porking", take: 43738, change: "same" },
    {title: "Titzcarraldo", take: 40442, change: "down" },
    {title: "Rebel Without a Cooze", take: 37311, change: "down" },
    {title: "Guess Who Came On Dinner", take: 36826, change: "new" },
    {title: "Million Dollar Booby", take: 34024, change: "new" },
    {title: "Pan's Labiarinth", take: 31363, change: "new" },
    {title: "Big Hero 16 Inch", take: 31010, change: "down" },
    {title: "Cool Handjob, Luke", take: 29371, change: "down" },
    {title: "21 Pumps, SKEET!", take: 28615, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 27889, change: "down" },
    {title: "Tub Girl Time Machine", take: 25575, change: "down" },
    {title: "A Streetwalker Named Desireé", take: 22716, change: "new" },
    {title: "50 Fist Dates", take: 20906, change: "down" },
    {title: "The Black Swanzstucker", take: 20080, change: "new" },
    {title: "The Tight Stuff", take: 17859, change: "down" },
    {title: "Jiro Creams On Suki", take: 16248, change: "down" },
    {title: "Play With Misty For Me", take: 15279, change: "down" }
  ], 
  "20170113": [
    {title: "Me, Myself in Irene", take: 49038, change: "same" },
    {title: "Big Trouble in Little Vagina", take: 47990, change: "new" },
    {title: "Slop Shot", take: 43967, change: "down" },
    {title: "Rebel Without a Cooze", take: 38831, change: "up" },
    {title: "Gosford Porking", take: 38366, change: "down" },
    {title: "Hairy Twatter and the Pornographer's Bone", take: 37631, change: "new" },
    {title: "2 Fast 2 Furry Puss", take: 35813, change: "down" },
    {title: "Cool Handjob, Luke", take: 33402, change: "up" },
    {title: "Pan's Labiarinth", take: 32155, change: "same" },
    {title: "Alexander and the Terrible, Horrible, No Good, Very Bad Handjob", take: 29314, change: "new" },
    {title: "One Blew Over The Cuckold's Nest", take: 28823, change: "up" },
    {title: "Titzcarraldo", take: 25937, change: "down" },
    {title: "Million Dollar Booby", take: 25106, change: "down" },
    {title: "Tub Girl Time Machine", take: 23246, change: "same" },
    {title: "Guess Who Came On Dinner", take: 22708, change: "down" },
    {title: "50 Fist Dates", take: 20614, change: "same" },
    {title: "21 Pumps, SKEET!", take: 19309, change: "down" },
    {title: "Big Hero 16 Inch", take: 19096, change: "down" },
    {title: "A Streetwalker Named Desireé", take: 18037, change: "down" },
    {title: "The Black Swanzstucker", take: 17373, change: "down" }
  ], 
  "20170114": [
    {title: "A Bit of Fry in Laurie", take: 53068, change: "new" },
    {title: "Me, Myself in Irene", take: 52506, change: "down" },
    {title: "Gosford Porking", take: 46849, change: "up" },
    {title: "Fuck-It Ralph", take: 42145, change: "new" },
    {title: "Strangers on a Tranny", take: 39297, change: "new" },
    {title: "2 Fast 2 Furry Puss", take: 35169, change: "up" },
    {title: "Big Trouble in Little Vagina", take: 32165, change: "down" },
    {title: "Rebel Without a Cooze", take: 28460, change: "down" },
    {title: "Slop Shot", take: 26557, change: "down" },
    {title: "Hairy Twatter and the Pornographer's Bone", take: 25541, change: "down" },
    {title: "Boobs! A Madea Porno", take: 22486, change: "new" },
    {title: "Like Water For Cockolate", take: 21754, change: "new" },
    {title: "Pan's Labiarinth", take: 20868, change: "down" },
    {title: "Cool Handjob, Luke", take: 20177, change: "down" },
    {title: "Enemy of the Prostate", take: 19116, change: "new" },
    {title: "Titzcarraldo", take: 18718, change: "down" },
    {title: "Stanford's Prisonsex Experiments", take: 17930, change: "new" },
    {title: "Taint Must Be Shaven", take: 17614, change: "new" },
    {title: "Tub Girl Time Machine", take: 16584, change: "down" },
    {title: "50 Fist Dates", take: 15423, change: "down" }
  ], 
  "20170115": [
    {title: "Throbbin' Hood: Princess of Queefs", take: 50019, change: "new" },
    {title: "Boyz N The Clitoral Hood", take: 46619, change: "new" },
    {title: "Fantastic Fucks, Mister", take: 42137, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 41158, change: "down" },
    {title: "Gosford Porking", take: 38387, change: "down" },
    {title: "9″ to 5″", take: 34761, change: "new" },
    {title: "Me, Myself in Irene", take: 34033, change: "down" },
    {title: "Strangers on a Tranny", take: 30964, change: "down" },
    {title: "Evil Head 2: Head By Dawn", take: 27723, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 25890, change: "new" },
    {title: "Hairy Twatter and the Half Chub Prince", take: 25122, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 22987, change: "down" },
    {title: "To Shave and Shave Not", take: 21784, change: "new" },
    {title: "Fuck-It Ralph", take: 20150, change: "down" },
    {title: "Bend Over, Like Beckham", take: 17875, change: "new" },
    {title: "Invasion of the Bawdy Snatches", take: 17662, change: "new" },
    {title: "The Wolf of Ball Street", take: 15858, change: "new" },
    {title: "Lord of the Cockrings: The Fellowship of the Cockring", take: 14361, change: "new" },
    {title: "2 Fast 2 Furry Puss", take: 13880, change: "down" },
    {title: "Bite Club", take: 13530, change: "new" }
  ], 
  "20170116": [
    {title: "Annie Fuck Your Bum", take: 53409, change: "new" },
    {title: "Throbbin' Hood: Princess of Queefs", take: 48888, change: "down" },
    {title: "Fantastic Fucks, Mister", take: 46918, change: "same" },
    {title: "9″ to 5″", take: 41719, change: "up" },
    {title: "28 Cocks Later", take: 36850, change: "new" },
    {title: "Gosford Porking", take: 35708, change: "down" },
    {title: "A Bit of Fry in Laurie", take: 34186, change: "down" },
    {title: "Trans Formers 2: Revenge of the Ballin'", take: 31481, change: "new" },
    {title: "The Ho Men", take: 30829, change: "new" },
    {title: "Strangers on a Tranny", take: 28870, change: "down" },
    {title: "Boyz N The Clitoral Hood", take: 26978, change: "down" },
    {title: "Evil Head 2: Head By Dawn", take: 24428, change: "down" },
    {title: "Mr. Smith Goes Down on Washington", take: 22290, change: "down" },
    {title: "Monsters' Pink", take: 20448, change: "new" },
    {title: "Me, Myself in Irene", take: 19654, change: "down" },
    {title: "Nathan For Everyone", take: 18448, change: "new" },
    {title: "Big Trouble in Little Vagina", take: 17398, change: "down" },
    {title: "Invasion of the Bawdy Snatches", take: 16172, change: "down" },
    {title: "To Shave and Shave Not", take: 15043, change: "down" },
    {title: "Bareback To The Future", take: 13613, change: "new" }
  ], 
  "20170117": [
    {title: "The Filth Element", take: 50869, change: "new" },
    {title: "In Glory Hole Basterds", take: 48294, change: "new" },
    {title: "Annie Fuck Your Bum", take: 45607, change: "down" },
    {title: "Gosford Porking", take: 45077, change: "up" },
    {title: "Hannah on Her Sisters", take: 43429, change: "new" },
    {title: "Throbbin' Hood: Princess of Queefs", take: 38566, change: "down" },
    {title: "Fantastic Fucks, Mister", take: 38131, change: "down" },
    {title: "9″ to 5″", take: 37462, change: "down" },
    {title: "Bright Lights, Big Titties", take: 33884, change: "new" },
    {title: "A Bit of Fry in Laurie", take: 31643, change: "down" },
    {title: "Mr. Smith Goes Down on Washington", take: 30670, change: "up" },
    {title: "A Clockwork Orgy", take: 29904, change: "new" },
    {title: "The Ho Men", take: 26750, change: "down" },
    {title: "How To Drain Your Dragon", take: 24535, change: "new" },
    {title: "Strangers on a Tranny", take: 22635, change: "down" },
    {title: "28 Cocks Later", take: 20978, change: "down" },
    {title: "Bareback To The Future", take: 18966, change: "up" },
    {title: "Evil Head 2: Head By Dawn", take: 18661, change: "down" },
    {title: "Invasion of the Bawdy Snatches", take: 17503, change: "down" },
    {title: "Monsters' Pink", take: 15870, change: "down" }
  ], 
  "20170118": [
    {title: "The Hung Games: Crotch On Fire", take: 51016, change: "new" },
    {title: "In Glory Hole Basterds", take: 48682, change: "same" },
    {title: "Fantastic Fucks, Mister", take: 43291, change: "up" },
    {title: "The Filth Element", take: 42007, change: "down" },
    {title: "Throbbin' Hood: Princess of Queefs", take: 37703, change: "up" },
    {title: "Annie Fuck Your Bum", take: 33253, change: "down" },
    {title: "The Bicycle Queef", take: 30542, change: "new" },
    {title: "Poonrise Kingdom", take: 29345, change: "new" },
    {title: "There's Someone Inside Mary", take: 26003, change: "new" },
    {title: "Gosford Porking", take: 23480, change: "down" },
    {title: "Hannah on Her Sisters", take: 20975, change: "down" },
    {title: "A Bit of Fry in Laurie", take: 19853, change: "down" },
    {title: "Bright Lights, Big Titties", take: 18737, change: "down" },
    {title: "9″ to 5″", take: 18524, change: "down" },
    {title: "Fill Bill, vol 2", take: 17745, change: "new" },
    {title: "Wangs of New York", take: 17449, change: "new" },
    {title: "Enslaving Private Ryan", take: 16901, change: "new" },
    {title: "Mr. Smith Goes Down on Washington", take: 15725, change: "down" },
    {title: "The Legend of Gagger Vance", take: 15184, change: "new" },
    {title: "The Ho Men", take: 14521, change: "down" }
  ], 
  "20170119": [
    {title: "Before The Devil Knows You're Dicked", take: 56091, change: "new" },
    {title: "My Big Fat Freak, Wetting", take: 53943, change: "new" },
    {title: "Throbbin' Hood: Princess of Queefs", take: 51740, change: "up" },
    {title: "Nail Caesar!", take: 48353, change: "new" },
    {title: "In Glory Hole Basterds", take: 45740, change: "down" },
    {title: "Much Ado About Cumming", take: 42669, change: "new" },
    {title: "The Filth Element", take: 41326, change: "down" },
    {title: "The Hung Games: Crotch On Fire", take: 38299, change: "down" },
    {title: "Fantastic Fucks, Mister", take: 35294, change: "down" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 31292, change: "new" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 29424, change: "new" },
    {title: "The Bicycle Queef", take: 27938, change: "down" },
    {title: "Person of Incest", take: 26607, change: "new" },
    {title: "Public Enemas", take: 25502, change: "new" },
    {title: "Dr. Strangelust, or: How I Learned To Stop Worrying And Love The Bum", take: 22583, change: "new" },
    {title: "Annie Fuck Your Bum", take: 21741, change: "down" },
    {title: "The Scissorhood of the Traveling Underpants", take: 21290, change: "new" },
    {title: "There's Someone Inside Mary", take: 19519, change: "down" },
    {title: "The Hung Games", take: 17467, change: "new" },
    {title: "Gosford Porking", take: 15507, change: "down" }
  ], 
  "20170120": [
    {title: "Before The Devil Knows You're Dicked", take: 56377, change: "same" },
    {title: "Throbbin' Hood: Princess of Queefs", take: 50482, change: "up" },
    {title: "My Big Fat Freak, Wetting", take: 48254, change: "down" },
    {title: "Much Ado About Cumming", take: 45054, change: "up" },
    {title: "The Dark Bros In: Fuck Soup", take: 42503, change: "new" },
    {title: "Nail Caesar!", take: 40860, change: "down" },
    {title: "Fantastic Fucks, Mister", take: 36760, change: "up" },
    {title: "The Last Starfucker", take: 36133, change: "new" },
    {title: "The Filth Element", take: 33023, change: "down" },
    {title: "In Glory Hole Basterds", take: 30598, change: "down" },
    {title: "Five Years In To Beth", take: 28245, change: "new" },
    {title: "All That Jizz", take: 25198, change: "new" },
    {title: "The Big Lebow Chicka Wow Wow Ski", take: 22720, change: "new" },
    {title: "The Assventures of Fuckaroo Buttzai Across The Gape Dimension", take: 21797, change: "down" },
    {title: "Glen, Garry, Glenn, Ross, and Six Other Guys", take: 19831, change: "down" },
    {title: "Person of Incest", take: 18575, change: "down" },
    {title: "The Scissorhood of the Traveling Underpants", take: 17080, change: "same" },
    {title: "The Bicycle Queef", take: 15091, change: "down" },
    {title: "The Hung Games", take: 13562, change: "same" },
    {title: "Scott Pilgrim Vs Those Girls", take: 12622, change: "new" }
  ], 
  "20170121": [
    {title: "Man of La Muncha", take: 52235, change: "new" },
    {title: "My Big Fat Freak, Wetting", take: 50470, change: "up" },
    {title: "Burn After Peeing", take: 44770, change: "new" },
    {title: "Before The Devil Knows You're Dicked", take: 43262, change: "down" },
    {title: "Indiana Bones and the Temple of Poon", take: 41069, change: "new" },
    {title: "Throbbin' Hood: Princess of Queefs", take: 37253, change: "down" },
    {title: "Whiskey, Tango, Facefuck", take: 36023, change: "new" },
    {title: "Steve's Jobs", take: 35615, change: "new" },
    {title: "Nail Caesar!", take: 34744, change: "down" },
    {title: "Much Ado About Cumming", take: 34151, change: "down" },
    {title: "Dirty/Hairy", take: 32574, change: "new" },
    {title: "The Filth Element", take: 29385, change: "down" },
    {title: "Scats", take: 26430, change: "new" },
    {title: "The Dark Bros In: Fuck Soup", take: 24555, change: "down" },
    {title: "Fantastic Fucks, Mister", take: 23957, change: "down" },
    {title: "The Last Starfucker", take: 21194, change: "down" },
    {title: "The Hung Games: Mocking J/O [Part 1]", take: 20723, change: "new" },
    {title: "Diddler on the Roof", take: 18424, change: "new" },
    {title: "Blumpkinhead", take: 17563, change: "new" },
    {title: "In Glory Hole Basterds", take: 15899, change: "down" }
  ], 
  "20170122": [
    {title: "Arse Nick and Yo Face", take: 53962, change: "new" },
    {title: "Haters Whack Off!", take: 49339, change: "new" },
    {title: "The Cocksucker Proxy", take: 45305, change: "new" },
    {title: "Slutter Island", take: 43743, change: "new" },
    {title: "My Big Fat Freak, Wetting", take: 42134, change: "down" },
    {title: "Pacific Rimjob", take: 40983, change: "new" },
    {title: "Rear Entry Widow", take: 39803, change: "new" },
    {title: "Thighs Wide Shut", take: 35524, change: "new" },
    {title: "Burn After Peeing", take: 33086, change: "down" },
    {title: "Man of La Muncha", take: 32779, change: "down" },
    {title: "The Gropes of Wrath", take: 30248, change: "new" },
    {title: "Glazed and Confused", take: 29087, change: "new" },
    {title: "Before The Devil Knows You're Dicked", take: 26323, change: "down" },
    {title: "Indiana Bones and the Temple of Poon", take: 24296, change: "down" },
    {title: "The Maltese Fistin", take: 22309, change: "new" },
    {title: "Nookie of the Year", take: 21501, change: "new" },
    {title: "The Lust of the Mohicans", take: 19283, change: "new" },
    {title: "Despicable Pee", take: 17289, change: "new" },
    {title: "Throbbin' Hood: Princess of Queefs", take: 15745, change: "down" },
    {title: "Anything Grows", take: 14135, change: "new" }
  ], 
  "20170123": [
    {title: "Slutter Island", take: 51843, change: "up" },
    {title: "The Cocksucker Proxy", take: 48059, change: "up" },
    {title: "Haters Whack Off!", take: 47547, change: "down" },
    {title: "Arse Nick and Yo Face", take: 43429, change: "down" },
    {title: "Rear Entry Widow", take: 41393, change: "up" },
    {title: "Urethral Weapon", take: 40622, change: "new" },
    {title: "My Big Fat Freak, Wetting", take: 40126, change: "down" },
    {title: "Poonstruck", take: 38624, change: "new" },
    {title: "The Gropes of Wrath", take: 36854, change: "up" },
    {title: "Reservoir Dongs", take: 34556, change: "new" },
    {title: "Pacific Rimjob", take: 33638, change: "down" },
    {title: "Man of La Muncha", take: 29754, change: "down" },
    {title: "Burn After Peeing", take: 27121, change: "down" },
    {title: "Thighs Wide Shut", take: 25900, change: "down" },
    {title: "Shaun The Creep Movie", take: 24175, change: "new" },
    {title: "Indiana Bones and the Temple of Poon", take: 22746, change: "down" },
    {title: "Under The Cum Cum Tree", take: 20317, change: "new" },
    {title: "The Lust of the Mohicans", take: 19314, change: "down" },
    {title: "The Maltese Fistin", take: 17352, change: "down" },
    {title: "Glazed and Confused", take: 16576, change: "down" }
  ], 
  "20170124": [
    {title: "Rear Entry Widow", take: 44657, change: "up" },
    {title: "Haters Whack Off!", take: 42367, change: "up" },
    {title: "Slutter Island", take: 39011, change: "down" },
    {title: "Django Chained", take: 37909, change: "new" },
    {title: "The Gropes of Wrath", take: 33867, change: "up" },
    {title: "Urethral Weapon", take: 29960, change: "same" },
    {title: "Reservoir Dongs", take: 27864, change: "up" },
    {title: "Atlas Chugged", take: 26922, change: "new" },
    {title: "Poonstruck", take: 26090, change: "down" },
    {title: "The Cocksucker Proxy", take: 23974, change: "down" },
    {title: "Man of La Muncha", take: 21627, change: "up" },
    {title: "Arse Nick and Yo Face", take: 21043, change: "down" },
    {title: "Pacific Rimjob", take: 18954, change: "down" },
    {title: "My Big Fat Freak, Wetting", take: 18175, change: "down" },
    {title: "Lube²: Hyperlube", take: 16545, change: "new" },
    {title: "Thighs Wide Shut", take: 16371, change: "down" },
    {title: "Rogerin' Me", take: 14893, change: "new" },
    {title: "Burn After Peeing", take: 13460, change: "down" },
    {title: "Raging Balls", take: 13205, change: "new" },
    {title: "On Her Majesty's Secret Cervix", take: 12224, change: "new" }
  ], 
  "20170125": [
    {title: "Rear Entry Widow", take: 54165, change: "same" },
    {title: "Das Booty", take: 52309, change: "new" },
    {title: "Titty Titty Gang Bang", take: 47120, change: "new" },
    {title: "Slutter Island", take: 43481, change: "down" },
    {title: "The Gropes of Wrath", take: 41719, change: "same" },
    {title: "Reservoir Dongs", take: 38624, change: "up" },
    {title: "Dog Dick Afternoon", take: 36735, change: "new" },
    {title: "Atlas Chugged", take: 34909, change: "same" },
    {title: "Haters Whack Off!", take: 33227, change: "down" },
    {title: "Django Chained", take: 29798, change: "down" },
    {title: "Poonstruck", take: 27284, change: "down" },
    {title: "The Cocksucker Proxy", take: 26004, change: "down" },
    {title: "Urethral Weapon", take: 23926, change: "down" },
    {title: "Sex Machina", take: 22047, change: "new" },
    {title: "Bang My Bum Slowly", take: 19690, change: "new" },
    {title: "Arse Nick and Yo Face", take: 18814, change: "down" },
    {title: "My Big Fat Freak, Wetting", take: 18407, change: "down" },
    {title: "Dr. O Yes", take: 17284, change: "new" },
    {title: "Pacific Rimjob", take: 15467, change: "down" },
    {title: "Man of La Muncha", take: 14103, change: "down" }
  ], 
  "20170126": [
    {title: "The Gropes of Wrath", take: 56471, change: "up" },
    {title: "No Cunt Free For Old Men", take: 53804, change: "new" },
    {title: "Titty Titty Gang Bang", take: 51659, change: "same" },
    {title: "Das Booty", take: 50316, change: "down" },
    {title: "Dog Dick Afternoon", take: 47705, change: "up" },
    {title: "Night At The Mapplethorpe Museum", take: 47229, change: "new" },
    {title: "Slutter Island", take: 42593, change: "down" },
    {title: "Rear Entry Widow", take: 38699, change: "down" },
    {title: "Even Reverse Cowgirls Get the Blues", take: 34425, change: "new" },
    {title: "GladHeAteHer", take: 31391, change: "new" },
    {title: "Reservoir Dongs", take: 27662, change: "down" },
    {title: "Fuck Everlasting", take: 26286, change: "new" },
    {title: "While You Were Peeping", take: 23909, change: "new" },
    {title: "The Hung Games: Flashing Firecrotch", take: 21894, change: "new" },
    {title: "Atlas Chugged", take: 19972, change: "down" },
    {title: "Haters Whack Off!", take: 18744, change: "down" },
    {title: "Mr. Chode's Wild Ride", take: 17103, change: "new" },
    {title: "The Constant Groper", take: 16773, change: "new" },
    {title: "Sex Machina", take: 16592, change: "down" },
    {title: "Poonstruck", take: 15012, change: "down" }
  ], 
  "20170127": [
    {title: "Clitty Lickers 2: The Legend of Curly Pubes", take: 49945, change: "new" },
    {title: "Titty Titty Gang Bang", take: 48873, change: "up" },
    {title: "Scatatouille", take: 45543, change: "new" },
    {title: "In Sid Anus", take: 44657, change: "new" },
    {title: "How To Get Some Head In Advertising", take: 42072, change: "new" },
    {title: "Who Rogered That Rabbit?", take: 38084, change: "new" },
    {title: "Night of the Giving Head", take: 34553, change: "new" },
    {title: "No Cunt Free For Old Men", take: 32761, change: "down" },
    {title: "Dog Dick Afternoon", take: 30760, change: "down" },
    {title: "Das Booty", take: 27262, change: "down" },
    {title: "The Gropes of Wrath", take: 25140, change: "down" },
    {title: "Night At The Mapplethorpe Museum", take: 24194, change: "down" },
    {title: "The Ladydrillers", take: 21639, change: "new" },
    {title: "Being Inside Elmo", take: 19923, change: "new" },
    {title: "Slutter Island", take: 18584, change: "down" },
    {title: "Lapdancer In The Dark", take: 17166, change: "new" },
    {title: "Slut Trek II: The Wrath of Cum", take: 15951, change: "new" },
    {title: "Bring in 'da Boys, Bring in 'da Spunk", take: 15077, change: "new" },
    {title: "Rear Entry Widow", take: 14522, change: "down" },
    {title: "Hairy Twatter and the Chamber of Secretions", take: 14089, change: "new" }
  ], 
  "20170128": [
    {title: "The African Drag Queen", take: 53951, change: "new" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 51075, change: "new" },
    {title: "Clitty Lickers 2: The Legend of Curly Pubes", take: 47994, change: "down" },
    {title: "Titty Titty Gang Bang", take: 43204, change: "down" },
    {title: "How To Get Some Head In Advertising", take: 40952, change: "same" },
    {title: "Good Night And Good Fuck", take: 38896, change: "new" },
    {title: "In Sid Anus", take: 35714, change: "down" },
    {title: "Scatatouille", take: 35107, change: "down" },
    {title: "Who Rogered That Rabbit?", take: 31448, change: "down" },
    {title: "GoodFellatas", take: 28803, change: "new" },
    {title: "Night of the Giving Head", take: 28465, change: "down" },
    {title: "The Gropes of Wrath", take: 26241, change: "down" },
    {title: "No Cunt Free For Old Men", take: 25914, change: "down" },
    {title: "Better Ball Saul", take: 24023, change: "new" },
    {title: "Dog Dick Afternoon", take: 21148, change: "down" },
    {title: "Pearl Necklace Harbor", take: 19117, change: "new" },
    {title: "The Color of a Money Shot", take: 18445, change: "new" },
    {title: "Star Whores: The Foreskin Awakens", take: 17394, change: "new" },
    {title: "The Ladydrillers", take: 17138, change: "down" },
    {title: "Lapdancer In The Dark", take: 16352, change: "down" }
  ], 
  "20170129": [
    {title: "12 Years A Slut", take: 49393, change: "new" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 48093, change: "same" },
    {title: "The African Drag Queen", take: 44515, change: "down" },
    {title: "Clitty Lickers 2: The Legend of Curly Pubes", take: 40491, change: "down" },
    {title: "Hairy Twatter and the Prisoner of Ass Cabin", take: 35685, change: "new" },
    {title: "Breasts In Shows", take: 32259, change: "new" },
    {title: "Titty Titty Gang Bang", take: 31847, change: "down" },
    {title: "G*A*S*H", take: 28333, change: "new" },
    {title: "Jiz and the Diaphragms", take: 27215, change: "new" },
    {title: "Some Like A Twat", take: 24633, change: "new" },
    {title: "The Munchurian Candidass", take: 22504, change: "new" },
    {title: "How To Get Some Head In Advertising", take: 22046, change: "down" },
    {title: "Fantastic Breasts And Where To Fuck Them", take: 20862, change: "new" },
    {title: "The Princess Ride", take: 19454, change: "new" },
    {title: "Sore Jaws", take: 18153, change: "new" },
    {title: "Eastbound And Going Down", take: 17162, change: "new" },
    {title: "An Officer With A Gentleman", take: 16143, change: "new" },
    {title: "Who Rogered That Rabbit?", take: 14290, change: "down" },
    {title: "Four Weddings, A Funeral, And Then A Gangbang", take: 13010, change: "new" },
    {title: "In Sid Anus", take: 12639, change: "down" }
  ], 
  "20170130": [
    {title: "MILF Saigon", take: 52251, change: "new" },
    {title: "Saturday Night Beaver", take: 50634, change: "new" },
    {title: "I Broke My Back Mounting", take: 48327, change: "new" },
    {title: "Attack The Cock", take: 45596, change: "new" },
    {title: "Lord of the Cockrings: The Return of the Kink", take: 42832, change: "new" },
    {title: "12 Years A Slut", take: 39776, change: "down" },
    {title: "The African Drag Queen", take: 38125, change: "down" },
    {title: "Clitty Lickers 2: The Legend of Curly Pubes", take: 37555, change: "down" },
    {title: "Fannie Hall", take: 33901, change: "new" },
    {title: "Titty Titty Gang Bang", take: 33389, change: "down" },
    {title: "Hairy Twatter and the Prisoner of Ass Cabin", take: 32907, change: "down" },
    {title: "G*A*S*H", take: 31241, change: "down" },
    {title: "Fantastic Breasts And Where To Fuck Them", take: 28402, change: "same" },
    {title: "Jiz and the Diaphragms", take: 25899, change: "down" },
    {title: "Some Like A Twat", take: 24092, change: "down" },
    {title: "Hairy Twatter and the Depth He Swallows", take: 21348, change: "down" },
    {title: "Breasts In Shows", take: 19354, change: "down" },
    {title: "The Munchurian Candidass", take: 17049, change: "down" },
    {title: "Hairy Twatter and the Order of the Three Dicks", take: 16720, change: "new" },
    {title: "Who Rogered That Rabbit?", take: 15126, change: "down" }
  ]
};
// jshint -W083
// jshint -W117
// jshint -W004
//@prepros-prepend partials/_functions.js
//@prepros-prepend partials/_titles.js
//@prepros-prepend data/_january.js

var topMovies = [];
var todayArray = [];
var allDays = {};
//var r;

var avoidList = [];



function parseHistoricalData(startDate) {
  for (z = 8; z > 0; z--) { 
    var thisDaysData = pornData[moment(startDate).subtract(z,'days').format('YYYYMMDD')];
    $.each(thisDaysData, function(key, value) {
      if (avoidList.indexOf(thisDaysData[key].title) == -1) {
        avoidList.push(thisDaysData[key].title);
      }
    });
    if (z == 1) {
      $.each(thisDaysData, function(key, value) {
        topMovies.push(thisDaysData[key].title);
      });
      todayArray = thisDaysData;
    }
  }
}


function rankPornTitles(startDate) {
  console.log('there are '+pornTitles.length+' titles');
  
  parseHistoricalData(startDate);
  
  console.log(avoidList);
  console.log(topMovies);
  
  // Begin of newDay loop
  var z = 0;
  while (z < 13) {
    var yesterdayArray = topMovies;
    topMovies = [];
    $.each(todayArray, function(key, value) {
      topMovies.push(todayArray[key].title);
    });
    var i = 0;
    var r = Math.floor((Math.random() * 6)) + 6;
    while (i < r) {
      var r = Math.floor((Math.random() * pornTitles.length));
      if (topMovies.indexOf(pornTitles[r]) == -1 && avoidList.indexOf(pornTitles[r]) == -1) {
        var a = Math.floor((Math.random() * 19));
        topMovies.splice(a,0,pornTitles[r]);
        i++;
      }
    }
    $.each(topMovies, function(key, value) {
      var txt = topMovies[key];
      r = Math.floor((Math.random() * 14)) - 6;
      var m = key + r;
      if (m < 0) { m = 0; }
      topMovies.splice(key,1);
      topMovies.splice(m,0,txt);
    });
    topMovies.length = 20;
    $.each(topMovies, function(key,value) {
      if (avoidList.indexOf(topMovies[key]) == -1) {
        avoidList.push(topMovies[key]);
      }
    });

    todayArray = [];
    var g = Math.floor(Math.random() * (60000 - 50000)) + 50000;
    $.each(topMovies, function(key, title) {
      var c;
      if (yesterdayArray.indexOf(title) < 0) {
        c = "new";
      } else if (yesterdayArray.indexOf(title) == key) {
        c = "same";
      } else if (yesterdayArray.indexOf(title) < key) {
        c = "down";
      } else if (yesterdayArray.indexOf(title) > key) {
        c = "up";
      }
      p = ((Math.random() * (99.999 - 88.8888)) + 88) / 100;
      g = parseInt(g * p);
      var a = {
        title: title,
        take: g,
        change: c
      };
      todayArray.push(a);
    });
    var dy = moment(startDate).add(z,'days').format('YYYYMMDD');
    allDays[dy] = todayArray;

    $('#JSArray').append('  "'+ dy+ '": [');
    $('#JSArray').append('<br />');
    $.each(todayArray, function(key, value) {
      $('#JSArray').append('    {title: "'+todayArray[key].title+'", take: '+todayArray[key].take+', change: "'+todayArray[key].change+'" }');
      if (key < 19) { $('#JSArray').append(','); }
      $('#JSArray').append('<br />');
    });
    $('#JSArray').append('], ');
    $('#JSArray').append('<br />');
    z++;
  }
  $('#JSArray').append('  };');
}

$(document).ready(function() {
  rankPornTitles("20170118");
  console.log(avoidList);
});
//# sourceMappingURL=builder.js.map