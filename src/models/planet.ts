export enum planet_type {
  desert,
  forest,
  ocean,
  radioactive,
}
export class Planet {
  constructor(
    readonly name: string,
    readonly type: planet_type,
    readonly distance: number
  ) // acceptedCargoTypes: string[]
  {}
}
