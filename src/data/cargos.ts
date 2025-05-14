import { Fauna } from '../cargos/fauna'
import { Gases } from '../cargos/gases'
import { Liquids } from '../cargos/liquids'
import { Ore } from '../cargos/ore'
import { RadioactiveMaterials } from '../cargos/radioactiveMaterials'

export const cargos = [
  new Fauna('Tubarão', 50),
  new Gases('Hélio', 20),
  new Liquids('Água', 100),
  new Ore('Minério de Ouro', 200),
  new Ore('Minério de Chumbo', 250),
  new Gases('Tanque de Gás', 150),
  new RadioactiveMaterials('Uranium', 150),
]
