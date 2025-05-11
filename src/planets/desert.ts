import { Planet} from 'src/models/planet'

class Desert extends Planet {
  constructor(name: string, distance: number, noAcceptedCargosTypes:[]) {
    super(name, distance, noAcceptedCargosTypes)
  }
}
