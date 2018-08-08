export class Game {
  currentAge = 0;
  deaths: number = Math.floor(Math.random() * 17) + 1;
  timesHadSex = 0;
  canHaveSex = false;
  gender = 'male';
  child: string[] = [
    'Died from dysentery on the Oregon Trail',
    'your father got drunk and thought you were a football...go eagles..',
    'left in a car, your mother wasn\'t very bright....',
    'tide pods©, am i right?', 'it\'s dangerous to go alone...',
    'your parents traded you for a ham sandwich....damn hippies ',
    'DONALD TRUMP!!!',
    'Thanks Obama!',
    'because fuck you that\'s why!'
  ];
  teen: string[] = [
    'having  a prescription pill smoothie cause no one understands you!, being a teenager is hard....',
    'tide pods©, am i right?',
    'because you just can\'t even right now',
    'jumping out of a moving truck is totally badass, what could go wrong?',
    'cause fucking on the side of the road is so HAWT!!',
    'going home with someone you just met only to wake up as a skin suit, whoops....',
    'its dangerous to go alone...',
    'why the fuck would you do that!?!?',
    'DONALD TRUMP!!!',
    'Thanks Obama!',
    'because fuck you that\'s why!'
  ];
  adult: string[] = [
  'cause holding Saturn missiles in your bare hands was a great idea',
  'jumping out of a moving truck is totally badass, what could go wrong?',
  'going home with someone you just met only to wake up as a skin suit, whoops....',
  'why the fuck would you do that!?!?',
  'woke up chained to the ground in a bathroom, time to saw off your arm!! 0_0',
  'picking up strangers was a risk you were willing to take',
  'DONALD TRUMP!!!',
  'Thanks Obama!',
  'because fuck you that\'s why!'];
  childDeath: string = this.child[Math.floor(Math.random() * this.child.length)];
  teenDeath: string = this.teen[Math.floor(Math.random() * this.teen.length)];
  adultDeath: string = this.adult[Math.floor(Math.random() * this.adult.length)];

  ageUp() {
    this.currentAge++;
    this.sexCheck();
    this.deathCheck();

  }

  hadSex() {
    this.timesHadSex++;
  }

  sexCheck() {
    if (this.currentAge >= 13) {
      this.canHaveSex = true;
    }
  }

  deathCheck() {
    const death = Math.floor(Math.random() * 100) + 1;
    if (this.currentAge >= 0 && this.currentAge <= 12 && death >= 99) {
      window.alert(this.childDeath + ' AGE: ' + this.currentAge);
    } else if (this.currentAge >= 13 && this.currentAge <= 19 && death >= 95) {
      window.alert(this.teenDeath + ' AGE: ' + this.currentAge);
      console.log('You died at ' + this.currentAge);
  } else if (this.currentAge >= 20 && death >= 80) {
    window.alert(this.adultDeath + 'AGE: ' + this.currentAge);
  } else {
    console.log('Still Alive AGE: ' + this.currentAge);
  }
  }
}
