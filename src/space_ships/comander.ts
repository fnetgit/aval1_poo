import { SpaceShip } from '../models/spaceShip'

// Comandante - Grande que nem o cagueiro e rápido como o runner, mas gasta mais combustível
export class Commander extends SpaceShip {
  static readonly DEFAULT_FUEL = 1200
  static readonly DEFAULT_CAPACITY = 400
  static readonly DEFAULT_SPEED = 25
  static readonly DEFAULT_CONSUMPTION = 8
  static readonly DEFAULT_COATING = 70

  constructor(name: string) {
    super(
      name,
      Commander.DEFAULT_FUEL,
      Commander.DEFAULT_CAPACITY,
      Commander.DEFAULT_SPEED,
      Commander.DEFAULT_CONSUMPTION,
      Commander.DEFAULT_COATING
    )
  }
}
