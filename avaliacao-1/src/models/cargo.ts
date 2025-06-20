export abstract class Cargo {
  readonly name: string
  readonly weight: number

  constructor(name: string, weight: number) {
    this.name = name
    this.weight = weight
  }
}
