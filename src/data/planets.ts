import { Desert } from '../planets/desert'
import { Forest } from '../planets/forest'
import { Ocean } from '../planets/ocean'
import { Radioactive } from '../planets/radioactive'

export const planets = [
  new Desert('Tatooine', 80, ['Liquids', 'Gases']),
  new Desert('Gallifrey', 110, []),
  new Forest('Endor', 150, ['radioactiveMaterials']),
  new Forest('Relvion', 120, []),
  new Ocean('Querty', 90, []),
  new Ocean('Jamlam', 130, ['Ore']),
  new Radioactive('Lum', 100, []),
  new Radioactive('Korez', 200, ['Fauna']),
]
