import { Planet } from '../models/planet'

export class Radioactive extends Planet {
  constructor(
    name: string,
    distance: number,
    pression: number,
    requiredShield: number = 100,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, pression, requiredShield, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta tomado por forte radiação.'
  }
}
