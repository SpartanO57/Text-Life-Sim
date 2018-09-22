export class Career {
  public maxHealth: number;
  public currentHealth: number;
  public name?: string;
  public inventory: object;
  constructor(startingHealth: number) {
    this.maxHealth = startingHealth;
    this.currentHealth = this.maxHealth;
  }
}
