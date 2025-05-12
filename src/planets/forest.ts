import { Planet } from '../models/planet'

export class Forest extends Planet {
  constructor(
    name: string,
    distance: number,
    pression: number,
    requiredShield: number = 10,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, pression, requiredShield, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta inteiramente preenchido de vida vegetal e não-vegetal.'
  }
}
