export abstract class spaceShip {
  readonly name: string
  readonly fuel: number
  readonly capacity: number

  constructor(name: string, fuel: number, capacity: number) {
    this.name = name
    this.fuel = fuel
    this.capacity = capacity
  }
}
