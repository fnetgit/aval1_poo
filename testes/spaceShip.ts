export abstract class SpaceShip {
  readonly name: string
  readonly fuel: number
  readonly capacity: number
  readonly fuelConsumption: number

  constructor(
    name: string,
    fuel: number,
    capacity: number,
    fuelConsumption: number
  ) {
    this.name = name
    this.fuel = fuel
    this.capacity = capacity
    this.fuelConsumption = fuelConsumption
  }
}

// Comandante - Grande que nem o cagueiro e rapido como o runner, mas gasta mais combustível
class Comander extends SpaceShip {}

// Cruzeiro - Nave de médio porte, equilibrando velocidade e capacidade
class Cruiser extends SpaceShip {}

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

const evergreen = new Freighter('evergreen', 100, 600, 1)

// Corredor - Nave nave pequena, mas rápida
class Courier extends SpaceShip {}
