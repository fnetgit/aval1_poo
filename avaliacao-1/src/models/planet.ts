import { Cargo } from './cargo'

export abstract class Planet {
  constructor(
    readonly name: string,
    readonly distance: number,
    readonly requiredCoating: number = 0,
    private rejectedCargoTypes: string[] = []
  ) {}

  abstract description(): string

  getRejectedCargoTypes(cargoList: Cargo[]): string[] {
    const result: string[] = []

    for (const cargo of cargoList) {
      const cargoType = cargo.constructor.name
      if (this.rejectedCargoTypes.includes(cargoType) && !result.includes(cargoType)) {
        result.push(cargoType)
      }
    }

    return result
  }
}
