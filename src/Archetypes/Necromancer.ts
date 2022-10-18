import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static archeCount = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.archeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.archeCount;
  }
}