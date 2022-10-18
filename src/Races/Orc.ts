import Race from './Race';

export default class Orc extends Race {
  maxLifePoints = 74;
  static raceCount = 0;

  constructor(name: string, dexteriry: number) {
    super(name, dexteriry);
    Orc.raceCount += 1;
  }
  
  static createdRacesInstances(): number {
    return this.raceCount;
  }
}