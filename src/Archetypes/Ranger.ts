import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static archeCount = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.archeCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.archeCount;
  }
}