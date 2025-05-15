import { Planet } from '../../models/planet'

export class Radioactive extends Planet {
  static readonly DEFAULT_REQUIRED_COATING = 30

  constructor(
    name: string,
    distance: number,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, Radioactive.DEFAULT_REQUIRED_COATING, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta altamente radioativo, perigoso para a maioria das formas de vida.'
  }
}
