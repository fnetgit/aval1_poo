import { Desert } from "../planets/desert";
import { Forest } from "../planets/forest";
import { Ocean } from "../planets/ocean";
import { Radioactive } from "../planets/radioactive";

export const planets = [
  new Desert('Tatooine', 80, 10, ['Liquids', 'Gases']),
  new Forest('Endor', 150, 5, []),
  new Ocean('Querty', 90, 100, []),
  new Radioactive('Gallifrey', 1000, 50, ['Liquids', 'Gases']),
]
