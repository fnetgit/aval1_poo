export class Planet {
  name: string
  type: string
  distance: number
  acceptedCargoTypes: string[]

  constructor(
    name: string,
    type: string,
    distance: number,
    acceptedCargoTypes: string[]
  ) {
    this.name = name
    this.distance = distance
    this.type = type
    this.acceptedCargoTypes = acceptedCargoTypes
  }
}
