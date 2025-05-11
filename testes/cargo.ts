export abstract class Cargo {
  readonly name: string
  readonly type: string
  readonly weight: number

  constructor(name: string, type: string, weight: number) {
    this.name = name
    this.weight = weight
    this.type = type
  }
}

export class Fauna extends Cargo {}

export class Gases extends Cargo {}

export class Liquids extends Cargo {}

export class Ore extends Cargo {}

