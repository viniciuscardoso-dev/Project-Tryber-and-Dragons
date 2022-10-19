import Archetype, { Mage } from '../Archetypes';
import Energy from '../Energy';
import Fighter from '../Fighter';
import Race, { Elf } from '../Races';
import getRandomInt from '../utils';

export default class Character implements Fighter {
  private _race!: Race;
  private _archtype!: Archetype;
  private _energy!: Energy;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _maxLifePoints: number;
  name: string;

  constructor(
    name: string,
  ) {
    this._dexterity = getRandomInt(1, 10);
    this.name = name;
    this._race = new Elf(this.name, this._dexterity);
    this._archtype = new Mage(this.name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy.type_ = this._archtype.energyType;
    this._energy.amount = getRandomInt(1, 10); 
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._defense - attackPoints;
    if (damage > 0) {
      const newLifePoints = this._lifePoints - damage;
      if (newLifePoints <= 0) {
        this._lifePoints = -1;
      } else {
        this._lifePoints = newLifePoints; 
      }
      return newLifePoints as number;
    }
    return 0;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    const newMaxLife = this._maxLifePoints + getRandomInt(1, 10);
    if (newMaxLife > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
      this._lifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = newMaxLife;
      this._lifePoints = newMaxLife;
    }
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }
}

// problema com o energy e seu modificador de acesso por ser um objeto e