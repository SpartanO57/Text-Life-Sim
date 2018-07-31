var currentAge = 0;

var deaths = Math.floor(Math.random() * 17) + 1;

var child = ["Died from dysentery on the Oregon Trail","your father got drunk and thought you were a football...go eagles..","left in a car, your mother wasn't very bright....","tide pods©, am i right?","it's dangerous to go alone...","your parents traded you for a ham sandwich....damn hippies ","DONALD TRUMP!!!","Thanks Obama!","because fuck you that's why!"];

var teen = ["having  a prescription pill smoothie cause no one understands you!, being a teenager is hard....","tide pods©, am i right?","because you just can't even right now","jumping out of a moving truck is totally badass, what could go wrong?","cause fucking on the side of the road is so HAWT!!","going home with someone you just met only to wake up as a skin suit, whoops....","its dangerous to go alone...","why the fuck would you do that!?!?","DONALD TRUMP!!!","Thanks Obama!","because fuck you that's why!"];

var adult = ["cause holding Saturn missiles in your bare hands was a great idea","jumping out of a moving truck is totally badass, what could go wrong?","going home with someone you just met only to wake up as a skin suit, whoops....","why the fuck would you do that!?!?","woke up chained to the ground in a bathroom, time to saw off your arm!! 0_0","picking up strangers was a risk you were willing to take","DONALD TRUMP!!!","Thanks Obama!","because fuck you that's why!"];

var childDeath = child[Math.floor(Math.random() * child.length)];

var teenDeath = teen[Math.floor(Math.random() * teen.length)];

var adultDeath = adult[Math.floor(Math.random() * adult.length)];

function ageUp() {
  if (currentAge >= 0) {
    currentAge ++;
    document.getElementById("age").innerHTML = currentAge;
    deathCheck();
  } else {
    console.log("Warning!!! ISSUE DETECTED IN AGE");
  }
};

function deathCheck() {
  var death = Math.floor(Math.random() * 100) +1;
    if (currentAge >= 0 && currentAge <= 12 && death >= 99) {
      window.alert(childDeath + " AGE: " + currentAge);
      console.log("Dead Age: " + currentAge);
      location.reload();
  } else if (currentAge >= 13 && currentAge <= 19 && death <= 75){
      window.alert(teenDeath + " AGE: " + currentAge)
      console.log("You died at " + currentAge);
      location.reload();
  } else if (currentAge >= 20 && death <= 80) {
    window.alert(adultDeath + "AGE: " + currentAge);
    location.reload();
  } else {
    console.log("Still Alive AGE: " + currentAge);
  }
};

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

//Ver 0.1.0
