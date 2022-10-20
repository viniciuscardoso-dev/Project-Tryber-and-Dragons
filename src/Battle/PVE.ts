import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private monsters: Array<SimpleFighter | Fighter>;
  constructor(player1: Fighter, monsters: SimpleFighter[] | Fighter[]) {
    super(player1);
    this.monsters = monsters;
  }

  fight(): number {
    this.monsters.forEach((m) => {
      while (this.player.lifePoints >= 0 && m.lifePoints >= 0) {
        m.attack(this.player);
        this.player.attack(m);
      }
    });
    return super.fight();
  }
}