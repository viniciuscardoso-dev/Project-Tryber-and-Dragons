import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private player1: Fighter, 
    private monsters: Array<SimpleFighter | Fighter>,
  ) {
    super(player1);
  }

  fight(): number {
    this.monsters.forEach((m) => {
      while (this.player.lifePoints > 0 && m.lifePoints > 0) {
        m.attack(this.player);
        this.player.attack(m);
        console.log(this.player);
      }
    });
    return super.fight();
  }
}