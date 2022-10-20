import Fighter from './Fighter';

export default interface SimpleFighter {
  lifePoints: number,
  strength: number,
  attack(enemy: SimpleFighter | Fighter): void,
  receiveDamage(attackPoints: number): number, 
}