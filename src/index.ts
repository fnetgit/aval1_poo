import { Fauna } from './cargos/fauna'
import { Gases } from './cargos/gases'
import { Liquids } from './cargos/liquids'
import { Ore } from './cargos/ore'

import { Mission } from './models/mission'
import { SpaceShip } from './models/spaceShip'

import { Desert } from './planets/desert'
import { Ocean } from './planets/ocean'
import { Radioactive } from './planets/radioactive'

import { Commander } from './space_ships/comander'
import { Cruiser } from './space_ships/cruiser'
import { Freighter } from './space_ships/freighter'
import { Runner } from './space_ships/runner'

// Cargas
const fish = new Fauna('Tubarão', 50)
const helium = new Gases('Hélio', 20)
const water = new Liquids('Água', 100)
const goldOre = new Ore('Minério de Ouro', 200)
const plumbOre = new Ore('Minério de Chumbo', 250)
const gasTank = new Gases('Tanque de Gás', 150)

// Planetas
const gallifrey = new Desert('Gallifrey', 1000, 15, ['Liquids', 'Gases'])
const tatooine = new Desert('Tatooine', 80, 10, [])
const querty = new Ocean('Querty', 90, 100, [])
const atlantis = new Ocean('Atlantis', 70, 10, [])
const netuno = new Ocean('Netuno', 300, 10, [])

// Naves
const ships: SpaceShip[] = [
  new Runner('Raptor'),
  new Freighter('Evergreen'),
  new Cruiser('Odyssey'),
  new Commander('Titan'),
]
// const runner = new Runner('Raptor')
// const freighter = new Freighter('Evergreen')
// const cruiser = new Cruiser('Odyssey')
// const commander = new Commander('Titan')

// Missões
const runnerSuccess = new Mission(tatooine, ships[0], [helium])

const runnerFailOverweight = new Mission(tatooine, ships[0], [goldOre])

const freighterFailFuel = new Mission(netuno, ships[1], [helium])

const cruiserFailCoating = new Mission(querty, ships[2], [helium])

const commanderFailCargoRejected = new Mission(gallifrey, ships[3], [gasTank])

runnerSuccess.report()
runnerFailOverweight.report()
freighterFailFuel.report()
cruiserFailCoating.report()
commanderFailCargoRejected.report()
