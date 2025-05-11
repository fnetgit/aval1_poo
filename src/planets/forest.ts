import { Planet } from 'src/models/planet'

export class Forest extends Planet {
  constructor(
    name: string,
    distance: number,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, noAcceptedCargoTypes)
  }
}
