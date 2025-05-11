import { Cargo } from './cargo'

export abstract class Planet {
  constructor(
    readonly name: string,
    readonly distance: number,
    readonly noAcceptedCargoTypes: string[] // ex: ['Gases', 'Radioactive']
  ) {}

  abstract description(): string

  getRejectedCargoTypes(cargoList: Cargo[]): string[] {
    return cargoList
      .filter((cargo) =>
        this.noAcceptedCargoTypes.includes(cargo.constructor.name)
      )
      .map((cargo) => cargo.constructor.name)
  }
}
