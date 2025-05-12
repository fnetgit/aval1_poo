import { Planet } from '../models/planet'

export class Desert extends Planet {
  constructor(
    name: string,
    distance: number,
    pression: number,
    requiredShield: number = 15,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, pression, requiredShield, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta seco, calor extremo, sem vegetação na superfície.'
  }
}
