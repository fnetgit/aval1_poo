export class Mission {
    constructor(
        public planet: Planet,
        public spaceShip: SpaceShip,
        public cargo: Cargo
    ) {}

    canReachPlanet(): boolean {
        const distance = this.planet.distance;                  // por exemplo: 500 (milhões de km)
        const fuelConsumption = this.spaceShip.fuelConsumption; // por milhão de km
        const availableFuel = this.spaceShip.fuel;              // total de combustível

        const fuelNeeded = distance * fuelConsumption;

        return availableFuel >= fuelNeeded;
    }
}
