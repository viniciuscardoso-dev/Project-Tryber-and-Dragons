import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly special: number;
  readonly cost: number;
  
  constructor(
    private _name: string,
  ) {
    this.special = 0;
    this.cost = 0;
  }
  
  public get name(): string {
    return this._name;
  }

  //  tratamento para os atributos private
  // public get special(): number {
  //   return this._special;
  // }

  // public get cost(): number {
  //   return this._cost;
  // }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');  
  }

  public abstract get energyType(): EnergyType;
}