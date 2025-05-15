import { Cargo } from './cargo'

export abstract class Planet {
  constructor(
    readonly name: string,
    readonly distance: number,
    readonly requiredCoating: number = 0,
    readonly noAcceptedCargoTypes: string[] = []
  ) {}

  abstract description(): string

  getRejectedCargoTypes(cargoList: Cargo[]): string[] {
    const names = cargoList.map((cargo) => cargo.constructor.name)
    const rejected = names.filter((name) => this.noAcceptedCargoTypes.includes(name))
    return [...new Set(rejected)]
  }
}
