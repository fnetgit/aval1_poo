import { Desert } from '../implementations/planets/desert'
import { Forest } from '../implementations/planets/forest'
import { Ocean } from '../implementations/planets/ocean'
import { Radioactive } from '../implementations/planets/radioactive'

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
