//Basic Info about player
var currentAge = 0;

var currentMoney = 0;

var currentJob = "None";

var deaths = Math.floor(Math.random() * 17) + 1;

var hadSex = 0;

var children = 0;

var gender = "Male";

var job = "none";

//Sweet Skills
var mathSkills = 0;

var readingSkills = 0;

var writingSkills = 0;

var musicSkills = 0;

var medicalSkills = 0;

var athleticSkills = 0;

var scienceSkills = 0;

var astronomySkill = 0;

var classLimit = 0;

//Disease Zone
var stds = [];

//Item Area
var condoms = 0;

var mathBooks = 0;

var medicalBooks = 0;

var stationary = 0;

var readingMaterial = 0;

var starGuide = 0;

var scienceMagazine = 0;

var sheetMusic = 0;

var weightLiftingMagazine = 0;

//Death Zone
var child = ["Died from dysentery on the Oregon Trail","your father got drunk and thought you were a football...go eagles..","left in a car, your mother wasn't very bright....","tide pods©, am i right?","it's dangerous to go alone...","your parents traded you for a ham sandwich....damn hippies ","DONALD TRUMP!!!","Thanks Obama!","because fuck you that's why!"];

var teen = ["having  a prescription pill smoothie cause no one understands you!, being a teenager is hard....","tide pods©, am i right?","because you just can't even right now","jumping out of a moving truck is totally badass, what could go wrong?","cause fucking on the side of the road is so HAWT!!","going home with someone you just met only to wake up as a skin suit, whoops....","its dangerous to go alone...","why the fuck would you do that!?!?","DONALD TRUMP!!!","Thanks Obama!","because fuck you that's why!"];

var adult = ["cause holding Saturn missiles in your bare hands was a great idea","jumping out of a moving truck is totally badass, what could go wrong?","going home with someone you just met only to wake up as a skin suit, whoops....","why the fuck would you do that!?!?","woke up chained to the ground in a bathroom, time to saw off your arm!! 0_0","picking up strangers was a risk you were willing to take","DONALD TRUMP!!!","Thanks Obama!","because fuck you that's why!"];

var childDeath = child[Math.floor(Math.random() * child.length)];

var teenDeath = teen[Math.floor(Math.random() * teen.length)];

var adultDeath = adult[Math.floor(Math.random() * adult.length)];

//The InnerWorkings
function ageUp() { //This function keeps track of age and skill point use.
  if (currentAge >= 0) {
    currentAge ++;
    document.getElementById("age").innerHTML = currentAge;
    deathCheck();
    classLimit = 0;
    document.getElementById("skillsRemaining").innerHTML = "Skills used: 0";
  } else {
    console.log("Warning!!! ISSUE DETECTED IN AGE");
  }
};

function Sex() { //This function keeps track of the amoount of times the player has sex and pregnancys and STDS.
  if (currentAge >= 16 && condoms === 0) {
    hadSex ++;
    document.getElementById("haveSex").innerHTML = hadSex;
    stdTest();
    document.getElementById("stdsGot").innerHTML = stds;
    pregnancy();
  } else if (currentAge >= 16 && condoms >= 1) {
    hadSex ++;
    document.getElementById("haveSex").innerHTML = hadSex;
    condoms --;
    console.log("Condoms Left: " + condoms);
  } else {
    window.alert("You can't even get a boner yet! Try again at 16 pervert.")
  }
};

function stdTest() {//This function is to check if player catches an STD
  var getStd = Math.floor(Math.random() * 7);
  switch (getStd) {
    case 0:
      console.log("Clean");
      break;
      case 1:
      window.alert("You got HIV.");
      stds.push(" HIV");
      console.log(stds);
      break;
      case 2:
      window.alert("You got Syphilis!");
      stds.push(" Syphilis");
      console.log(stds);
      break;
      case 3:
      window.alert("You got Crabs! ITCHY");
      stds.push(" Crabs");
      console.log(stds);
      break;
      case 4:
      window.alert("You got Herpes!");
      stds.push(" Herpes");
      console.log(stds);
      break;
      case 5:
      window.alert("You got Gonorrhea!");
      stds.push(" Gonorrhea");
      console.log(stds);
      break;
      case 6:
      window.alert("You got Gonoherpasyphilaids");
      stds.push(" Gonoherpasyphilaids");
      console.log(stds);
      break;7
    default:
      console.log("ERROR!!!");
      console.log(stds);
  }
};

function pregnancy() {//This Function test to find if player gets pragnant.
  var pregnant = Math.floor(Math.random() * 5);
  console.log(pregnant);
  if (pregnant === 2) {
    children ++;
    window.alert("IM PREGNANT!!!");
    document.getElementById("childCounter").innerHTML = children;
    console.log("CHILD");
  } else {
    console.log("No Child");
  }
};

function skillUse() {//This function is to keep track of the skill use
  document.getElementById("skillsRemaining").innerHTML = "Skills used:  " + classLimit;
}

function studyMath() { //This is to check how well the player gains a skill point in math 1-3 possible points
  if (mathSkills >= 0 && classLimit <= 2) {
      var mathSkillUp = Math.floor(Math.random() * 2) + 1;
      console.log("Rolled a: " + mathSkillUp);
      mathSkills = mathSkills + mathSkillUp;
      console.log("Math skill is at: " + mathSkills);
      classLimit ++;
      console.log("Class Limit " + classLimit);
      document.getElementById("mathArea").innerHTML = "Math Skills: " + mathSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 118-127");
  }
};

function studyReading() {//This is to check how well the player gains a skill point in Reading. 1-3 possible points
  if (readingSkills >= 0 && classLimit <= 2) {
    var readingSkillUp = Math.floor(Math.random() * 2) +1;
    console.log("Rolled a: " + readingSkillUp);
    readingSkills = readingSkills + readingSkillUp;
    console.log("Reading Skills are at: " + readingSkills);
    classLimit ++;
    console.log("Class Limit " + classLimit);
    document.getElementById("readingArea").innerHTML = "Reading Skills: " + readingSkills;
  } else if (classLimit === 3 ) {
    window.alert("You can only study 3 skill per age");
  } else {
    console.log("ERROR! LINE 136-149");
  }
};

function studyWriting() {//This is to check how well the player gains skills in Writing. 1-3 points possible.
  if (writingSkills >= 0 && classLimit <=2) {
    var writingSkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + writingSkillUp);
    writingSkills = writingSkills + writingSkillUp;
    console.log("Writing Skills are at: " + writingSkills);
    classLimit ++;
    console.log("Class Limit " + classLimit);
    document.getElementById("writingArea").innerHTML = "Writing Skills: " + writingSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 151-164");
  }
};

function studyMusic() {//This is to check how well the player gains skills in Music. 1-3 points possible.
  if (musicSkills >= 0 && classLimit <= 2) {
      var musicSkillUp = Math.floor(Math.random() * 2) + 1;
      console.log("Rolled a: " + musicSkillUp);
      musicSkills = musicSkills + musicSkillUp;
      console.log("Music Skills are at: " + musicSkills);
      classLimit ++;
      console.log("Class Limit " + classLimit);
      document.getElementById("musicArea").innerHTML = "Music Skills: " + musicSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 166-179");
  }
};

function studyMedicine() {//This is to check how well the player gains skills in Medicine. 1-3 points possible.
  if (medicalSkills >= 0 && classLimit <= 2) {
    var medicalSkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + medicalSkillUp);
    medicalSkills = medicalSkillUp + medicalSkills;
    console.log("Music Skills are at: " + musicSkills);
    classLimit ++;
    console.log("Class Limit " + classLimit);
    document.getElementById("medicArea").innerHTML = "Medical Skill: " + medicalSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 181-194");
  }
};

function studyAthlete() {//This is to check how well the player gains athleic abilityies. 1-3 points possible.
  if (athleticSkills >= 0 && classLimit <= 2) {
    var athleticSkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + athleticSkillUp);
    athleticSkills = athleticSkills + athleticSkillUp;
    console.log("Athletic Skills are at: " + athleticSkills);
    classLimit ++;
    console.log("Class Limit " + classLimit);
    document.getElementById("gymArea").innerHTML = "Athleticism: " + athleticSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 196-209");
  }
};

function studyScience() {//This is to check how well the player gains skills in science. 1-3 points possible.
  if (scienceSkills >= 0 && classLimit <= 2){
    var scienceSkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + scienceSkillUp);
    scienceSkills = scienceSkills + scienceSkillUp;
    console.log("Science Skills are at " + scienceSkills);
    classLimit ++;
    console.log("class limit " + classLimit);
    document.getElementById("labArea").innerHTML = "Science Skill: " + scienceSkills;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 211- 224");
  }
};

function studyAstronomy() {//This is to check how well the player gains skills in Astronomy. 1-3 points possible.
  if (astronomySkill >= 0 && classLimit <= 2) {
    var astronomySkillUp = Math.floor(Math.random() * 2) + 1;
    console.log("Rolled a: " + astronomySkillUp);
    astronomySkill = astronomySkill + astronomySkillUp;
    console.log("Astronomy Skill is at: " + astronomySkill);
    classLimit ++;
    console.log("class limit " + classLimit);
    document.getElementById("planetarium").innerHTML = "Astronomy Skill: " + astronomySkill;
  } else if (classLimit === 3) {
    window.alert("You can only study 3 skills per age");
  } else {
    console.log("ERROR! LINE 226-239");
  }
};

//Shop Zone
function buyCondoms() {
  condoms = condoms + 1;
  document.getElementById("condoms").innerHTML = "Condoms Owned: " + condoms;
  console.log("Condoms Owned: " + condoms);
};

function buyMathBook() {
  mathBooks = mathBooks + 1;
  document.getElementById("mathBooks").innerHTML = "Math Books Owned: " + mathBooks;
  console.log("Math Books Owned: " + mathBooks);
};

function buyReadingMaterial() {
  readingMaterial = readingMaterial + 1;
  document.getElementById("litarature").innerHTML = "Litaracy Owned: " + readingMaterial;
  console.log("Reading Material Owned: " + readingMaterial);
};

function buyStarGuide() {
  starGuide = starGuide + 1;
  document.getElementById("starGuides").innerHTML = "Star Guides Owned: " + starGuide;
  console.log("Star Guides Owned: " + starGuide);
};

function buySheetMusic() {
  sheetMusic = sheetMusic + 1;
  document.getElementById("sheetMusic").innerHTML = "Sheet Music Owned: " +
  sheetMusic;
  console.log("Sheet Music owned: " + sheetMusic);
};

function buyMedicalBook() {
  medicalBooks = medicalBooks + 1;
  document.getElementById("medicalBooks").innerHTML = "Medical Books Owned: " + medicalBooks;
  console.log("Medical Books owned: " + medicalBooks);
};

function buyScienceMagazine() {
  scienceMagazine = scienceMagazine + 1;
  document.getElementById("scienceMagazine").innerHTML = "Science Magazines Owned: " + scienceMagazine;
  console.log("Science Books Owned: " + scienceMagazine);
};

function buyStaionary() {
  stationary = stationary + 1;
  document.getElementById("Stationary").innerHTML = "Stationary Owned: " + stationary;
  console.log("Stationary Owned: " + stationary);
};

function buyWeightLiftingMagazine() {
  weightLiftingMagazine = weightLiftingMagazine + 1;
  document.getElementById("weightLifting").innerHTML = "Weight Lifting Magazine Owned: " + weightLiftingMagazine;
  console.log("Weight Lifting Magazine: " + weightLiftingMagazine);
};

//This function is for a future feature that will include using items purchased to enhance skills in perticular areas or in the case of some items do related actions. Not priority till jobs and careers have been implamented.
function useMathBook() {
  if (mathBooks >= 1) {
  mathBooks = mathBooks - 1;
  mathSkills = mathSkills + 1;
  console.log("Math books owned: " + mathBooks);
  document.getElementById("mathArea").innerHTML = "Math Skill: " + mathSkills;
  console.log("Math skill: " + mathSkills)
  document.getElementById("mathBooks").innerHTML = "Math Books Owned: " + mathBooks;
  } else {
  console.log("No Math Books Owned");
  }
};

function useBook() {
  if (readingMaterial >= 1) {
  readingMaterial = readingMaterial - 1;
  readingSkills = readingSkills + 1;
  console.log("Books Owned: " + readingMaterial);
  document.getElementById("readingArea").innerHTML = "Reading Skills: " + readingSkills;
  console.log("Reading Skill: " + readingSkills);
  document.getElementById("litarature").innerHTML = "Litaracy Owned: " + readingMaterial;
  } else {
  console.log("No Books Owned");
  }
};

function useStarGuide() {
  if (starGuide >= 1) {
    starGuide = starGuide - 1;
    console.log("Star Guide Owned: " + starGuide);
    document.getElementById("starGuides").innerHTML = "Star Guides Owned: " + starGuide;
    astronomySkill = astronomySkill + 1;
    console.log("Astronomy Skill: " + astronomySkill);
    document.getElementById("planetarium").innerHTML = "Astronomy Skill: " + astronomySkill;
  } else {
    console.log("No Star Guides Owned");
  }
};

function useSheetMusic() {
  if (sheetMusic >= 1) {
    sheetMusic = sheetMusic - 1;
    console.log("Sheet Music Owned: " + sheetMusic);
    document.getElementById("sheetMusic").innerHTML = "Sheet Music Owned: " + sheetMusic;
    musicSkills = musicSkills + 1;
    console.log("Music Skills: " + musicSkills);
    document.getElementById("musicArea").innerHTML = "Music Skill: " + musicSkills;
  } else {
    console.log("No Sheet Music Owned");
  }
};

function useMedicalBook() {
  if (medicalBooks >= 1) {
    medicalBooks = medicalBooks - 1;
    document.getElementById("medicalBooks").innerHTML = "Medical Books Owned: " + medicalBooks;
    console.log("Medical Books Owned: " + medicalBooks);
    medicalSkills = medicalSkills + 1;
    document.getElementById("medicArea").innerHTML = "Medical Skills: " + medicalSkills;
    console.log("Medical Skills: " + medicalSkills);
  } else {
    console.log("No Medical Books Left");
  }
};

function useScienceMagazine() {
  if (scienceMagazine >= 1) {
    scienceMagazine = scienceMagazine - 1;
    document.getElementById("scienceMagazine").innerHTML = "Science Magazine Owned: " + scienceMagazine;
    console.log("Science Magazine Owned: " + scienceMagazine);
    scienceSkills = scienceSkills + 1;
    document.getElementById("labArea").innerHTML = "Science Skills: " + scienceSkills;
    console.log("Science Skills:" + scienceSkills);
  } else {
    console.log("No Science Magazines Owned");
  }
};

function useStationary() {
  if (stationary >= 1) {
    stationary = stationary - 1;
    document.getElementById("Stationary").innerHTML = "Stationary Owned: " + stationary;
    console.log("Stationary Owned: " + stationary);
    writingSkills = writingSkills + 1;
    document.getElementById("writingArea").innerHTML = "Writing Skill: " + writingSkills;
    console.log("Writing Skill: " + writingSkills);
  } else {
    console.log("No Stationary Left");
  }
};

function useWeightLiftingMagazine() {
  if (weightLiftingMagazine >= 1) {
    weightLiftingMagazine = weightLiftingMagazine - 1;
    document.getElementById("weightLifting").innerHTML = "Weight Lifting Magazines Owned: " + weightLiftingMagazine;
    console.log("Weight Lifting Magazines Owned: " + weightLiftingMagazine);
    athleticSkills = athleticSkills + 1;
    document.getElementById("gymArea").innerHTML = "Athleticism: " + athleticSkills;
    console.log("Athleticism: " + athleticSkills);
  } else {
    console.log("No Magazines Left");
  }
};
//Deaths Domain
function deathCheck() {//This function is to control death and alert for death.
  var death = Math.floor(Math.random() * 100) +1;
    if (currentAge >= 0 && currentAge <= 12 && death >= 99) {
      window.alert(childDeath + " AGE: " + currentAge);
      console.log("Dead Age: " + currentAge);
      location.reload();
  } else if (currentAge >= 13 && currentAge <= 19 && death >= 98){
      window.alert(teenDeath + " AGE: " + currentAge)
      console.log("You died at " + currentAge);
      location.reload();
  } else if (currentAge >= 20 && death >= 95) {
    window.alert(adultDeath + " AGE: " + currentAge);
    location.reload();
  } else if (currentAge >= 60 && death >= 90){
    window.alert (adultDeath + " AGE: " + currentAge);
    location.reload();
  } else {
    console.log("Still Alive AGE: " + currentAge);
  }
};

//Fat Hazards Corner.
function fatHazard() {
  var fHS = Math.floor(Math.random() * 6);
    switch (fHS) {
    case 0:
      document.getElementById("FHS").innerHTML = "I NEED PICTURES OF SPIDER-MAN";
      console.log("0 Working");
      break;
    case 1:
      document.getElementById("FHS").innerHTML = "The VSS is Useful";
      console.log("1 Working");
      break;
    case 2:
      document.getElementById("FHS").innerHTML ="Size Doesn't Matter";
      console.log("2 Working");
      break;
    case 3:
      document.getElementById("FHS").innerHTML ="Take a look at my enormous penis";
      console.log("3 Working");
      break;
    case 4:
      document.getElementById("FHS").innerHTML = "Everybody want to be a nigga, Nobody want to be a nigga";
      console.log("4 Working");
      break;
    case 5:
      document.getElementById("FHS").innerHTML = "It sucks to suck";
      console.log("5 Working");
      break;
      default:
      document.getElementById("FHS").innerHTML ="IM BROKEN";

    }
};

//Ver 0.4.0 (beta)
