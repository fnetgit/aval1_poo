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

  report(): void {
    const totalWeight = this.cargoList.reduce((sum, c) => sum + c.weight, 0)
    const fuelNeeded = this.planet.distance * this.spaceShip.fuelConsumption
    const canLoad = this.canLoadAllCargo()
    const canReach = this.canReachPlanet()
    const rejectedCargo = this.planet.getRejectedCargoTypes(this.cargoList)

    console.log('============== RELATÓRIO DA MISSÃO ==============')
    console.log(`Planeta de destino: ${this.planet.name}`)
    console.log(`Descrição do planeta: ${this.planet.description()}`)
    console.log(`Nave: ${this.spaceShip.name}`)
    console.log(`Distância: ${this.planet.distance} anos-luz`)
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

    if (rejectedCargo.length > 0) {
      const rejectedTypes = rejectedCargo.join(', ')
      statusMensagem = `Missão falhou porque as seguintes cargas não são aceitas pelo planeta: ${rejectedTypes}.`
    } else if (canReach) {
      statusMensagem = 'Missão concluída com sucesso!'
    } else if (!canLoad) {
      statusMensagem = 'Missão falhou: carga excede a capacidade da nave.'
    } else {
      statusMensagem =
        'Missão falhou: combustível insuficiente para alcançar o planeta.'
    }

    console.log(`Status: ${statusMensagem}`)
    console.log('=====================================================\n')
  }
}
