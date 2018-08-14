import * as Constants from '../constants';
import {Rule} from '../models/rule.model';
import {Actor} from '../models/actor.model';
export class Game {
  currentAge = 0;
  deaths: number = Math.floor(Math.random() * 17) + 1;
  timesHadSex = 0;
  canHaveSex = false;
  gender = 'male';
  child: string[] = Constants.child;
  teen: string[] = Constants.teen;
  adult: string[] = Constants.adult;
  childDeath: string = this.child[Math.floor(Math.random() * this.child.length)];
  teenDeath: string = this.teen[Math.floor(Math.random() * this.teen.length)];
  adultDeath: string = this.adult[Math.floor(Math.random() * this.adult.length)];
  ruleSet: Rule[] = [new Rule('currentHealth', -1, 'Aging')];
  actor: Actor = new Actor(Constants.startingHealth);
  tick() {
    this.ruleSet.forEach(rule => {
      if (this.actor[rule.ruleKind]) {
        this.actor[rule.ruleKind] += rule.scale;
      }
    });
  }

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
