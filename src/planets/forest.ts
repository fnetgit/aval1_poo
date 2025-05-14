import { Planet } from '../models/planet'

export class Forest extends Planet {
  constructor(
    name: string,
    distance: number,
    requiredCoating: number = 10,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, requiredCoating, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta coberto por extensa vida vegetal.'
  }
}
