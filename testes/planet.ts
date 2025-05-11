export abstract class Planet {
  constructor(
    readonly name: string,
    readonly distance: number,
    noAcceptedCargoTypes: string[]
  ) {}
}

class Desert extends Planet {
  constructor(name: string, distance: number, noAcceptedCargosTypes: []) {
    super(name, distance, noAcceptedCargosTypes)
  }
}

class Forest extends Planet {}

class Ocean extends Planet {}

class Radioactive extends Planet {}
