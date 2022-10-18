import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints = 80;

  static raceCount = 0;

  constructor(name: string, dexteriry: number) {
    super(name, dexteriry);
    Dwarf.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return this.raceCount;
  }
}