import { EnergyType } from '../Energy';

export default abstract class Archetype {
  constructor(
    readonly name: string,
    readonly special = 0,
    readonly cost = 0,
  ) {}

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');  
  }

  abstract get energyType(): EnergyType;
}