import {Game} from './game.model';
export class Rule {
  public ruleKind: string;
  public scale: number;
  public name?: string;
  constructor(ruleKind: string, scale: number, name?: string) {
    this.ruleKind = ruleKind;
    this.scale = scale;
    this.name = name;
  }
}
