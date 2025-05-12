import { SpaceShip } from '../models/spaceShip'

// Cargueiro - Nave grande, consegue levar muitas coisas de uma só vez
export class Freighter extends SpaceShip {
  static readonly DEFAULT_FUEL = 1000
  static readonly DEFAULT_CAPACITY = 500
  static readonly DEFAULT_CONSUMPTION = 10
  static readonly DEFAULT_SHIELD = 60

  constructor(name: string) {
    super(
      name,
      Freighter.DEFAULT_FUEL,
      Freighter.DEFAULT_CAPACITY,
      Freighter.DEFAULT_CONSUMPTION,
      Freighter.DEFAULT_SHIELD
    )
  }
}
