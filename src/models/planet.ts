export abstract class Planet {
  constructor(
    readonly name: string,
    readonly distance: number,
    noAcceptedCargoTypes: string[]
  ) {}
}
