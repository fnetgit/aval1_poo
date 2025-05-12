import { SpaceShip } from '../models/spaceShip'

// Cruzeiro - Nave de médio porte, equilibrando velocidade e capacidade
export class Cruiser extends SpaceShip {
  static readonly DEFAULT_FUEL = 800
  static readonly DEFAULT_CAPACITY = 300
  static readonly DEFAULT_CONSUMPTION = 5
  static readonly DEFAULT_SHIELD = 45

  constructor(name: string) {
    super(
      name,
      Cruiser.DEFAULT_FUEL,
      Cruiser.DEFAULT_CAPACITY,
      Cruiser.DEFAULT_CONSUMPTION,
      Cruiser.DEFAULT_SHIELD
    )
  }
}
