import { Planet } from '../../models/planet'

export class Desert extends Planet {
  static readonly DEFAULT_REQUIRED_COATING = 15
  
  constructor(
    name: string,
    distance: number,
    rejectedCargoTypes: string[] = []
  ) {
    super(name, distance, Desert.DEFAULT_REQUIRED_COATING, rejectedCargoTypes)
  }

  description(): string {
    return 'Planeta seco, sem vegetação na superfície.'
  }
}
