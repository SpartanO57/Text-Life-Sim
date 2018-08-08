import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatsays',
  templateUrl: './fatsays.component.html',
  styleUrls: ['./fatsays.component.css']
})
export class FatsaysComponent implements OnInit {

  private shitFatHazardSays: String[] = [
    'I NEED PICTURES OF SPIDER-MAN',
    'The VSS is Useful',
    'Size Doesn\'t Matter',
    'Take a look at my enormous penis',
    'Everybody want to be a nigga, Nobody want to be a nigga',
    'It sucks to suck',
    'IM BROKEN'
  ];

  private currentFatism: String;

  constructor() { }

  ngOnInit() {
    this.fatShuffle();
  }

  fatShuffle() {
    const randomNumberBetweenZeroAndFive = Math.floor(Math.random() * 6);
    this.setFat(randomNumberBetweenZeroAndFive);
  }

  setFat(howFat) {
    this.currentFatism = this.shitFatHazardSays[howFat];
  }

}
