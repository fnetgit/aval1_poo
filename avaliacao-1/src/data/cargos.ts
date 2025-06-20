import { Fauna } from '../implementations/cargos/fauna'
import { Gases } from '../implementations/cargos/gases'
import { Liquids } from '../implementations/cargos/liquids'
import { Ore } from '../implementations/cargos/ore'
import { RadioactiveMaterials } from '../implementations/cargos/radioactiveMaterials'

export const cargos = [
  new Fauna('Tubarão', 50),
  new Fauna('Cavalo', 100),
  new Gases('Hélio', 20),
  new Gases('Tanques de Gás', 150),
  new Liquids('Água', 100),
  new Liquids('Óleo', 90),
  new Ore('Minério de Ouro', 200),
  new Ore('Minério de Chumbo', 250),
  new RadioactiveMaterials('Urânio', 235),
  new RadioactiveMaterials('Césio', 137),
]
