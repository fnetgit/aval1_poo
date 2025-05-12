import { SpaceShip } from '../models/spaceShip'

// Corredor - Nave nave pequena, mas rápida
export class Runner extends SpaceShip {
  static readonly DEFAULT_FUEL = 500
  static readonly DEFAULT_CAPACITY = 100
  static readonly DEFAULT_CONSUMPTION = 3
  static readonly DEFAULT_SHIELD = 30

  constructor(name: string) {
    super(
      name,
      Runner.DEFAULT_FUEL,
      Runner.DEFAULT_CAPACITY,
      Runner.DEFAULT_CONSUMPTION,
      Runner.DEFAULT_SHIELD
    )
  }
}
