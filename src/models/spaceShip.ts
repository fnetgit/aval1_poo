export abstract class SpaceShip {
  readonly name: string;
  readonly fuel: number;
  readonly capacity: number;
  readonly speed: number;
  readonly fuelConsumption: number;
  readonly coating: number;

  constructor(name: string, fuel: number, capacity: number, speed: number, fuelConsumption: number, coating: number) {
    this.name = name;
    this.fuel = fuel;
    this.capacity = capacity;
    this.speed = speed;
    this.fuelConsumption = fuelConsumption;
    this.coating = coating;
  }
}
