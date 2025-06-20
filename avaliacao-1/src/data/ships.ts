import { Commander } from '../implementations/space_ships/commander'
import { Cruiser } from '../implementations/space_ships/cruiser'
import { Freighter } from '../implementations/space_ships/freighter'
import { Runner } from '../implementations/space_ships/runner'

export const ships = [
  new Runner('Raptor'),
  new Runner('Falcon'),
  new Freighter('Evergreen'),
  new Freighter('Tank-5'),
  new Cruiser('Odyssey'),
  new Cruiser('Elegant'),
  new Commander('Titan'),
  new Commander('Big Bird'),
]
