import { Planet } from '../models/planet'

export class Forest extends Planet {
  constructor(
    name: string,
    distance: number,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta inteiramente preenchido de vida vegetal e não-vegetal.'
  }
}
