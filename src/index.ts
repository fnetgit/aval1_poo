import { Fauna } from './cargos/fauna'
import { Gases } from './cargos/gases'
import { Liquids } from './cargos/liquids'
import { Ore } from './cargos/ore'

import { Mission } from './models/mission'

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
const gallifrey = new Desert('Gallifrey', 1000, 10, 15, ['Liquids', 'Gases'])
const tatooine = new Desert('Tatooine', 80, 20, 10, [])
const querty = new Ocean('Querty', 90, 10, 100, [])
const atlantis = new Ocean('Atlantis', 70, 0.9, 10, [])
const netuno = new Ocean('Netuno', 300, 1.1, 10, [])

// Naves

const runner = new Runner('Raptor')
const freighter = new Freighter('Evergreen')
const cruiser = new Cruiser('Odyssey')
const commander = new Commander('Titan')

// Missões
const runnerSuccess = new Mission(tatooine, runner, [helium])

const runnerFailOverweight = new Mission(tatooine, runner, [goldOre])

const freighterFailFuel = new Mission(netuno, freighter, [helium])

const cruiserFailShield = new Mission(querty, cruiser, [helium])

const commanderFailCargoRejected = new Mission(gallifrey, commander, [gasTank])


runnerSuccess.report()
runnerFailOverweight.report()
freighterFailFuel.report()
cruiserFailShield.report()
commanderFailCargoRejected.report()
