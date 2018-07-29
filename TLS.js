var currentAge = 0;

var deaths = Math.floor(Math.random() * 17);

var deathType = ["Died from dysentery on the Oregon Trail", "You'r father got drunk and thought you were a football...go eagles..","Left in a car, Your mother wasn't very bright....","Having  a perscription pill smoothie cause no one understands you!, Being a teenager is hard....","Tide Pods©, Am I right?","Cause holding Saturn Missiles in your bare hands was a great idea","Because you just can't even right now","Jumping out of a moving truck is totally badass, What could possibly go wrong?","Cause fucking on the side of the road is so HAWT!!","Going home with someone you just met only to wake up as a skin suit, whoops....","Its dangerous to go alone...","Your parents traded you for a ham sandwich....damn hippies","Why the fuck would you do that!?!?","Woke up chained to the ground in a bathroom, Time to saw off your arm!! 0_0","Picking up strangers was a risk you were willing to take","DONALD TRUMP!!!","Thanks Obama!","Because fuck you that's why!"]

var deathTypes = deathType[Math.floor(Math.random() * deathType.length)];

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
    if (currentAge <= 60 && death >= 99) {
      window.alert("YOU DIED " + deathTypes + " AGE: " + currentAge);
      console.log("Dead Age: " + currentAge);
      location.reload();
  } else if (currentAge >=60 && death >= 75){
      window.alert("YOU DIED " + deathTypes + " AGE: " + currentAge)
      console.log("You died at " + currentAge);
      location.reload();
  } else if (currentAge >= 80 && death > 50) {
    window.alert("YOU DIED " + deathTypes + "AGE: " + currentAge);
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
    case 6:
      document.getElementById("FHS").innerHTML = "Penis taste amazing";
      console.log("6 Working");
      default:
      document.getElementById("FHS").innerHTML ="IM BROKEN";

    }
};

//Ver 0.0.8
