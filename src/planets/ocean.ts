import { Planet } from '../models/planet'

export class Ocean extends Planet {
  constructor(
    name: string,
    distance: number,
    pression: number,
    requiredShield: number = 20,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, pression, requiredShield, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta completamente alagado, tudo se encontra submerso.'
  }
}
