import { generateRandomMissions } from './utils/randoms'

const missions = generateRandomMissions(10)

missions.forEach((mission, i) => {
  console.log(`\n--- MISSÃO ${i + 1} ---`)
  mission.report()
})
