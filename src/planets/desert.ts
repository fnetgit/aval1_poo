import { Planet } from '../models/planet'

export class Desert extends Planet {
  constructor(
    name: string,
    distance: number,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta seco, calor extremo, sem vegetação na superfície.'
  }
}
