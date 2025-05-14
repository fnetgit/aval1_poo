import { Cargo } from './cargo'

export abstract class Planet {
  constructor(
    readonly name: string,
    readonly distance: number,
    readonly requiredCoating: number = 0,
    readonly noAcceptedCargoTypes: string[] = []
  ) {}

  abstract description(): string

  // entender melhor
  getRejectedCargoTypes(cargoList: Cargo[]): string[] {
    return cargoList
      .filter((cargo) =>
        this.noAcceptedCargoTypes.includes(cargo.constructor.name)
      )
      .map((cargo) => cargo.constructor.name)
  }
}
