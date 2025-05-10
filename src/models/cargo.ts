export class Cargo {
  name: string
  type: string
  weight: number

  constructor(name: string, type: string, weight: number) {
    this.name = name
    this.weight = weight
    this.type = type
  }
}
