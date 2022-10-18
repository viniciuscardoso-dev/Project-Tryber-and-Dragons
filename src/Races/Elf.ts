import Race from './Race';

export default class Elf extends Race {
  maxLifePoints = 99;
  static raceCount = 0;

  constructor(name: string, dexteriry: number) {
    super(name, dexteriry);
    Elf.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return this.raceCount;
  }
}