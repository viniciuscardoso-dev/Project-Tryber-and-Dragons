import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints = 60;

  static raceCount = 0;

  constructor(name: string, dexteriry: number) {
    super(name, dexteriry);
    Halfling.raceCount += 1;
  }

  static createdRacesInstances(): number {
    return this.raceCount;
  }
}