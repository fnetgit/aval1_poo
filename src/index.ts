import { Fauna } from './cargos/fauna'
import { Gases } from './cargos/gases'
import { Liquids } from './cargos/liquids'
import { Ore } from './cargos/ore'
import { Mission } from './models/mission'
import { Desert } from './planets/desert'
import { Ocean } from './planets/ocean'
import { Freighter } from './space_ships/freighter'
import { Runner } from './space_ships/runner'

// Cargas
const fish = new Fauna('Tubarão', 50)
const helium = new Gases('Hélio', 20)
const water = new Liquids('Água', 100)
const goldOre = new Ore('Minério de Ouro', 200)
const gasTank = new Gases('Gas Tank', 150)

// Planetas
const gallifrey = new Desert('Gallifrey', 1000, ['Liquids', 'Gases'])
const tatooine = new Desert('Tatooine', 80, ['Gases'])
const querty = new Ocean('Querty', 90, ['Radioactive'])

// Naves
const evergreen = new Freighter('Evergreen', 3000, 500, 2)
const milenium = new Runner('Milenium', 300, 50, 5)

// Missões
const mission1 = new Mission(gallifrey, evergreen, [fish, goldOre, water, gasTank])
const mission2 = new Mission(tatooine, evergreen, [gasTank])
const mission3 = new Mission(querty, milenium, [helium, water])

mission1.report()
mission2.report()
mission3.report()
