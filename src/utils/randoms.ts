import { ships } from '../data/ships'
import { planets } from '../data/planets'
import { cargos } from '../data/cargos'

import { Mission } from '../models/mission'
import { SpaceShip } from '../models/spaceShip'
import { Planet } from '../models/planet'
import { Cargo } from '../models/cargo'

export function choice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

export function sample<T>(array: T[], count: number): T[] {
  const copy = [...array]
  const selectedItems: T[] = []
  for (let i = 0; i < count && copy.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * copy.length)
    selectedItems.push(copy.splice(randomIndex, 1)[0])
  }
  return selectedItems
}

export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getRandomShip(): SpaceShip {
  return choice(ships)
}

export function getRandomPlanet(): Planet {
  return choice(planets)
}

export function getRandomCargoList(): Cargo[] {
  return sample(cargos, randInt(1, 3))
}

export function generateRandomMissions(n: number): Mission[] {
  const missions: Mission[] = []
  for (let i = 0; i < n; i++) {
    missions.push(
      new Mission(getRandomPlanet(), getRandomShip(), getRandomCargoList())
    )
  }
  return missions
}
