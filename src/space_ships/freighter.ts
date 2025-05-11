import { SpaceShip } from '../models/spaceShip'

// Cargueiro - Nave grande, consegue levar muitas coisas de uma só vez
export class Freighter extends SpaceShip {
  constructor(
    name: string,
    fuel: number,
    capacity: number,
    fuelConsumption: number
  ) {
    super(name, fuel, capacity, fuelConsumption)
  }
}
