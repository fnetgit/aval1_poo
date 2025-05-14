import { Planet } from '../models/planet'

export class Desert extends Planet {
  constructor(
    name: string,
    distance: number,
    requiredCoating: number = 15,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, requiredCoating, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta seco, sem vegetação na superfície.'
  }
}
