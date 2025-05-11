export abstract class Planet {
  constructor(
    readonly name: string,
    readonly distance: number,              // em milhões de km
    readonly noAcceptedCargoTypes: string[] // ex: ['Gases', 'Radioactive']
  ) {}
}
