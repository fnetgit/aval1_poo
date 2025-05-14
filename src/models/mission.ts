import { Cargo } from './cargo'
import { Planet } from './planet'
import { SpaceShip } from './spaceShip'

export class Mission {
  constructor(
    public planet: Planet,
    public spaceShip: SpaceShip,
    public cargoList: Cargo[]
  ) {}

  get totalWeight(): number {
    return this.cargoList.reduce((sum, c) => sum + c.weight, 0)
  }

  get fuelNeeded(): number {
    return this.planet.distance * this.spaceShip.fuelConsumption
  }

  get travelTimeDays(): number {
    return this.planet.distance / this.spaceShip.speed
  }

  canLoadAllCargo(): boolean {
    return this.totalWeight <= this.spaceShip.capacity
  }

  canReachPlanet(): boolean {
    return this.canLoadAllCargo() && this.spaceShip.fuel >= this.fuelNeeded
  }

  meetsCoatingRequirement(): boolean {
    return this.spaceShip.coating >= this.planet.requiredCoating
  }

  getStatusMessage(): string {
    const rejected = this.planet.getRejectedCargoTypes(this.cargoList)

    if (!this.meetsCoatingRequirement()) {
      return `Missão falhou: revestimento insuficiente (precisa ≥ ${this.planet.requiredCoating}).`
    }
    if (rejected.length > 0) {
      return `Missão falhou: tipos de carga não aceitos: ${rejected.join(
        ', '
      )}.`
    }
    if (!this.canLoadAllCargo()) {
      return 'Missão falhou: carga excede a capacidade da nave.'
    }
    if (!this.canReachPlanet()) {
      return 'Missão falhou: combustível insuficiente para alcançar o planeta.'
    }
    return 'Missão concluída com sucesso!'
  }

  formatReport(): string {
    const lines: string[] = []

    lines.push('============== RELATÓRIO DA MISSÃO ==============')
    lines.push(`Planeta de destino: ${this.planet.name}`)
    lines.push(`Descrição: ${this.planet.description()}`)
    lines.push(`Nave: ${this.spaceShip.name}`)
    lines.push(`Distância: ${this.planet.distance} anos-luz`)
    lines.push(
      `Tempo estimado de viagem: ${Math.ceil(this.travelTimeDays)} dias` +
        ` (velocidade ${this.spaceShip.speed} anos-luz/dia)`
    )
    lines.push(
      `Revestimento: necessário ${this.planet.requiredCoating}, disponível ${this.spaceShip.coating}`
    )
    lines.push(
      `Combustível: necessário ${this.fuelNeeded.toFixed(
        2
      )} L, disponível ${this.spaceShip.fuel.toFixed(2)} L`
    )
    lines.push(
      `Peso das cargas: ${this.totalWeight} / ${this.spaceShip.capacity} Kg`
    )
    lines.push('Itens de carga:')
    this.cargoList.forEach((c, i) =>
      lines.push(`  ${i + 1}. ${c.name} - ${c.weight} Kg`)
    )
    lines.push(`Status: ${this.getStatusMessage()}`)
    lines.push('=====================================================')

    return lines.join('\n') + '\n\n'
  }

  report(): void {
    console.log(this.formatReport())
  }
}
