import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {  
  constructor(
    public player1 = new Character('Player 1'),
    public player2 = new Character('Player 2'),
  ) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    while (this.player1.lifePoints >= 0 && this.player2.lifePoints >= 0) {
      this.player2.attack(this.player1);
      this.player1.attack(this.player2);
    }

    super.fight();
    return 0;
  }
}