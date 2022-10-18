import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static archeCount = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.archeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.archeCount;
  }
}