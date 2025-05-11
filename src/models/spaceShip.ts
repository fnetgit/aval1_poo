export abstract class SpaceShip {
  readonly name: string;
  readonly fuel: number;
  readonly capacity: number;
  readonly fuelConsumption: number;

  constructor(name: string, fuel: number, capacity: number, fuelConsumption: number) {
    this.name = name;
    this.fuel = fuel;
    this.capacity = capacity;
    this.fuelConsumption = fuelConsumption;
  }
}
