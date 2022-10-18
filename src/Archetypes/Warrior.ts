import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static archeCount = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.archeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.archeCount;
  }
}