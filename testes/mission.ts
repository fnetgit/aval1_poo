import { Planet } from './planet'
import { SpaceShip } from './spaceShip'
import { Cargo } from './cargo'

export class Mission {
  constructor(
    public planet: Planet,
    public spaceShip: SpaceShip,
    public cargoList: Cargo[]
  ) {}

  canLoadAllCargo(): boolean {
    const totalWeight = this.cargoList.reduce((sum, c) => sum + c.weight, 0)
    return totalWeight <= this.spaceShip.capacity
  }

  cargoTypesAllowed(): boolean {
    return this.cargoList.every(
      (cargo) =>
        !this.planet.noAcceptedCargoTypes.includes(cargo.constructor.name)
    )
  }

  canReachPlanet(): boolean {
    if (!this.canLoadAllCargo()) return false
    if (!this.cargoTypesAllowed()) return false

    const fuelNeeded = this.planet.distance * this.spaceShip.fuelConsumption
    return this.spaceShip.fuel >= fuelNeeded
  }
}
