import { Planet } from '../models/planet'

export class Ocean extends Planet {
  constructor(
    name: string,
    distance: number,
    requiredCoating: number = 20,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, requiredCoating, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta completamente alagado, tudo se encontra submerso.'
  }
}
