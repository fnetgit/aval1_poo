import { Planet } from '../models/planet'

export class Radioactive extends Planet {
  constructor(
    name: string,
    distance: number,
    requiredCoating: number = 45,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, requiredCoating, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta tomado por forte radiação.'
  }
}
