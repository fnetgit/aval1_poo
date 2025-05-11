import { Planet } from '../models/planet'

export class Radioactive extends Planet {
  constructor(
    name: string,
    distance: number,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta tomado por forte radiação.'
  }
}
