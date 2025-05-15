import { Planet } from '../../models/planet'

export class Ocean extends Planet {
  static readonly DEFAULT_REQUIRED_COATING = 40

  constructor(
    name: string,
    distance: number,
    noAcceptedCargoTypes: string[] = []
  ) {
    super(name, distance, Ocean.DEFAULT_REQUIRED_COATING, noAcceptedCargoTypes)
  }

  description(): string {
    return 'Planeta coberto por vastos oceanos.'
  }
}
