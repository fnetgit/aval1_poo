import { Desert, Ocean, Radioactive } from './planet'
import { Freighter, Courier, Cruiser, Comander } from './spaceShip'
import { Fauna, Gases, Liquids, Ore } from './cargo'
import { Mission } from './mission'

// Criando cargas
const fish = new Fauna('Tubarão', 'animal', 50)
const helium = new Gases('Hélio', 'gas', 20)
const water = new Liquids('Água', 'liquid', 100)
const goldOre = new Ore('Minério de Ouro', 'ore', 200)

// Criando planetas
const gallifrey = new Desert('Gallifrey', 500, ['Gases', 'Liquids'])

// Criando naves
const evergreen = new Freighter('Evergreen', 1000, 500, 2)

// Criando missions
const mission = new Mission(gallifrey, evergreen, [fish, goldOre, water])

// testes
console.log('Cabe tudo?', mission.canLoadAllCargo())          // false se > capacity
console.log('Tipos permitidos?', mission.cargoTypesAllowed()) // false se cargo proibido
console.log('Consegue chegar?', mission.canReachPlanet())     // só true se tudo OK
