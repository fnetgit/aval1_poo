export abstract class SpaceShip {
  readonly name: string;
  readonly fuel: number;
  readonly capacity: number;
  readonly fuelConsumption: number;
  readonly shield: number;

  constructor(name: string, fuel: number, capacity: number, fuelConsumption: number, shield: number) {
    this.name = name;
    this.fuel = fuel;
    this.capacity = capacity;
    this.fuelConsumption = fuelConsumption;
    this.shield = shield
  }
}
