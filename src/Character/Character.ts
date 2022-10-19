import Archetype, { Mage } from '../Archetypes';
import Energy from '../Energy';
import Fighter from '../Fighter';
import Race, { Elf } from '../Races';
import getRandomInt from '../utils';

export default class Character implements Fighter {
  readonly dexterity: number;
  readonly race!: Race;
  name: string;
  readonly archtype!: Archetype;
  maxLifePoints: number;
  private lifePoints: number;
  readonly strength: number;
  readonly defense: number;
  readonly energy!: Energy;

  constructor(
    name: string,
  ) {
    this.dexterity = getRandomInt(1, 10);
    this.name = name;
    this.race = new Elf(this.name, this.dexterity);
    this.archtype = new Mage(this.name);
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this.lifePoints = this.maxLifePoints;
    this.strength = getRandomInt(1, 10);
    this.defense = getRandomInt(1, 10);
    this.energy.type_ = this.archtype.energyType;
    this.energy.amount = getRandomInt(1, 10); 
  }

  receiveDamage(attackPoints: number): number {
    const damage = this.defense - attackPoints;
    if (damage > 0) {
      const newLifePoints = this.lifePoints - damage;
      if (newLifePoints <= 0) {
        this.lifePoints = -1;
      } else {
        this.lifePoints = newLifePoints; 
      }
      return newLifePoints as number;
    }
    return 0;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }
}