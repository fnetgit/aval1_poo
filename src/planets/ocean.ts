import { Planet } from '../models/planet'

export class Ocean extends Planet {
  constructor(
    name: string,
    distance: number,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta completamente alagado, tudo se encontra submerso.'
  }
}
