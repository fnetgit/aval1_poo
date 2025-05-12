import { Planet } from './planet'
import { SpaceShip } from './spaceShip'
import { Cargo } from './cargo'

export class Mission {
  constructor(
    public planet: Planet,
    public spaceShip: SpaceShip,
    public cargoList: Cargo[]
  ) {}

  canLoadAllCargo(): boolean {
    const totalWeight = this.cargoList.reduce((sum, c) => sum + c.weight, 0)
    return totalWeight <= this.spaceShip.capacity
  }

  canReachPlanet(): boolean {
    if (!this.canLoadAllCargo()) return false

    const fuelNeeded = this.planet.distance * this.spaceShip.fuelConsumption
    return this.spaceShip.fuel >= fuelNeeded
  }

  canShield(): boolean {
    return this.spaceShip.shield >= this.planet.requiredShield
  }

  report(): void {
    const totalWeight = this.cargoList.reduce((sum, c) => sum + c.weight, 0)
    const fuelNeeded = this.planet.distance * this.spaceShip.fuelConsumption
    const canLoad = this.canLoadAllCargo()
    const canReach = this.canReachPlanet()
    const canShield = this.canShield()
    const rejectedCargo = this.planet.getRejectedCargoTypes(this.cargoList)

    console.log('============== RELATÓRIO DA MISSÃO ==============')
    console.log(`Planeta de destino: ${this.planet.name}`)
    console.log(`Descrição do planeta: ${this.planet.description()}`)
    console.log(`Nave: ${this.spaceShip.name}`)
    console.log(`Distância: ${this.planet.distance} anos-luz`)
    console.log(`Blindagem necessária: ${this.planet.requiredShield}`)
    console.log(`Blindagem disponível: ${this.spaceShip.shield}`)
    console.log(`Combustível necessário: ${fuelNeeded} Kl`)
    console.log(`Combustível disponível: ${this.spaceShip.fuel} Kl`)
    console.log(
      `Peso total das cargas: ${totalWeight} / ${this.spaceShip.capacity} Kg`
    )
    console.log('Itens de carga:')
    this.cargoList.forEach((cargo, index) => {
      console.log(`   ${index + 1}. ${cargo.name} - ${cargo.weight} Kg`)
    })

    let statusMensagem = ''

    if (!canShield) {
      statusMensagem = `Missão falhou: blindagem insuficiente (precisa ≥ ${this.planet.requiredShield}).`
    } else if (rejectedCargo.length > 0) {
      const rejectedTypes = rejectedCargo.join(', ')
      statusMensagem = `Missão falhou: tipo cargas não aceitas pelo planeta: ${rejectedTypes}.`
    } else if (!canLoad) {
      statusMensagem = 'Missão falhou: carga excede a capacidade da nave.'
    } else if (!canReach) {
      statusMensagem =
        'Missão falhou: combustível insuficiente para alcançar o planeta.'
    } else {
      statusMensagem = 'Missão concluída com sucesso!'
    }

    console.log(`Status: ${statusMensagem}`)
    console.log('=====================================================\n')
  }
}
