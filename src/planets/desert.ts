import { Planet, planet_type } from 'src/models/planet'

class Desert extends Planet {
  constructor(name: string, distance: number) {
    super(name, planet_type.desert, distance)
  }
}

const tatooine = new Desert('tatooine',2)
