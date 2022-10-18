export default abstract class Race {   
  private static raceCount = 0; 
  constructor(private _name: string, private _dexterity: number) {
    Race.raceCount += 1;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number { throw new Error('Not implemented'); }

  abstract get maxLifePoints(): number;
}