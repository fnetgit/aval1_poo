// src/data/ships.ts
import { Runner } from '../space_ships/runner'
import { Freighter } from '../space_ships/freighter'
import { Cruiser } from '../space_ships/cruiser'
import { Commander } from '../space_ships/commander'

export const ships = [
  new Runner('Raptor'),
  new Freighter('Evergreen'),
  new Cruiser('Odyssey'),
  new Commander('Titan'),
]
