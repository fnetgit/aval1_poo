// src/data/ships.ts
import { Runner } from '../space_ships/runner'
import { Freighter } from '../space_ships/freighter'
import { Cruiser } from '../space_ships/cruiser'
import { Commander } from '../space_ships/commander'

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
