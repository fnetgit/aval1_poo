import { Planet } from '../../models/planet'

export class Forest extends Planet {
  static readonly DEFAULT_REQUIRED_COATING = 5

  constructor(
    name: string,
    distance: number,
    rejectedCargoTypes: string[] = []
  ) {
    super(name, distance, Forest.DEFAULT_REQUIRED_COATING, rejectedCargoTypes)
  }

  description(): string {
    return 'Planeta coberto por grandes florestas e vegetação.'
  }
}
