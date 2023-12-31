// @ts-ignore
import { EnemyBlue, EnemyRed } from "./enemyClasses.js"
import { delay } from "./helpers.js"

export const levels = {
  1: level1,
  2: level2
}

// Level Declarations
async function level1(scene) {
  scene.startWave(l1_w1)
  await delay(10)
  let enemy1 = scene.createSimpleEnemy(-40, 300, EnemyRed)
  enemy1.queueWaypoint({x: 400, y: 300, speed: 2})
  await delay(5)
  scene.startWave(l1_w2)
  let enemy2 = scene.createSimpleEnemy(0, -20, EnemyBlue, true)
  enemy2.queueWaypoint({x: 450, y: 150, speed: 1})
  enemy2.queueWaypoint({x: 350, y: 250, speed: 1})
  enemy2.queueWaypoint({x: 450, y: 350, speed: 1})
  enemy2.queueWaypoint({x: 840, y: 350, speed: 2})
  await delay(4)
  scene.startWave(l1_w3)
  await delay(8)
  scene.startWave(l1_w4)
  await delay(3)
  scene.startWave(l1_w5)
  await delay(5)
  scene.startWave(l1_w6)
  let enemy3 = scene.createSimpleEnemy(840, 200, EnemyBlue)
  enemy3.queueWaypoint({x: 450, y: 350, speed: 1})
  enemy3.queueWaypoint({x: 150, y: 150, speed: 1})
  enemy3.queueWaypoint({x: 350, y: 250, speed: 1})
  scene.levelFinished = true
}

async function level2(scene){
  scene.startWave(l2_w1)
  await delay(3)
  let enemy1 = scene.createSimpleEnemy(-20, 400, EnemyBlue)
  enemy1.queueWaypoint({x: 740, y: 80, speed: 1.5})
  enemy1.queueWaypoint({x: 300, y: 200, speed: 0.75})
  await delay(5)
  let enemy2 = scene.createSimpleEnemy(840, 400, EnemyBlue, true)
  enemy2.queueWaypoint({x: 40, y: 100, speed: 0.75})
  enemy2.queueWaypoint({x: 600, y: 300, speed: 0.75})
  enemy2.queueWaypoint({x: 100, y: 150, speed: 0.75})
  enemy2.queueWaypoint({x: 840, y: 150, speed: 0.75})
  await delay(3.5)
  scene.startWave(l2_w2)
  await delay(8)
  scene.startWave(l2_w3)
  await delay(3)
  let enemy3 = scene.createSimpleEnemy(840, 100, EnemyBlue)
  enemy3.queueWaypoint({x: 40, y: 150, speed: 0.7})
  enemy3.queueWaypoint({x: 650, y: 400, speed: 1})
  enemy3.queueWaypoint({x: 300, y: 100, speed: 0.7})
  scene.levelFinished = true
}

  // Wave Declarations
const l1_w1 = {
  enemies: [EnemyRed, EnemyRed, EnemyRed, EnemyRed, EnemyBlue],
  timeBetweenSpawn: 1,
  waypoints: [
    { x: 0, y: 0, speed: null },
    { x: 300, y: 300, speed: 1 },
    { x: 820, y: 100, speed: 1 }
  ],
}

const l1_w2 = {
  enemies: [EnemyRed, EnemyRed, EnemyRed, EnemyRed],
  timeBetweenSpawn: 1,
  waypoints: [
    { x: 840, y: -30, speed: null },
    { x: 50, y: 200, speed: 2 },
    { x: 840, y: 300, speed: 3 }
  ],
}

const l1_w3 = {
  enemies: [EnemyBlue, EnemyBlue, EnemyBlue],
  timeBetweenSpawn: 1,
  waypoints: [
    { x: 815, y: 200, speed: null },
    { x: 15, y: 300, speed: 4 },
    { x: 815, y: 400, speed: 2 }
  ],
}

const l1_w4 = {
  enemies: [EnemyBlue, EnemyRed, EnemyBlue, EnemyRed],
  timeBetweenSpawn: 1,
  waypoints: [
    { x: -10, y: 0, speed: null },
    { x: 400, y: 150, speed: 1.2 },
    { x: -10, y: 300, speed: 1.2 },
  ]
}

const l1_w5 = {
  enemies: [EnemyBlue, EnemyRed, EnemyBlue, EnemyRed],
  timeBetweenSpawn: 1,
  waypoints: [
    { x: 810, y: 0, speed: null },
    { x: 400, y: 150, speed: 1.2 },
    { x: 810, y: 300, speed: 1.2 },
  ]
}

const l1_w6 = {
  enemies: [EnemyRed, EnemyBlue, EnemyBlue, EnemyRed, EnemyBlue, EnemyRed],
  timeBetweenSpawn: 1,
  waypoints: [
    { x: 820, y: 20, speed: null },
    { x: 80, y: 100, speed: 1 },
    { x: 100, y: 200, speed: 1 },
    { x: 820, y: 150, speed: 1.5 },
  ]
}

const l2_w1 = {
  enemies: [EnemyRed, EnemyBlue, EnemyRed, EnemyRed, EnemyRed, EnemyBlue],
  timeBetweenSpawn: 0.75,
  waypoints: [
    { x: 820, y: 20, speed: null },
    { x: -20, y: 100, speed: 1.75 },
    { x: 820, y: 200, speed: 1.25 },
    { x: -20, y: 300, speed: 1.75 },
  ]
}

const l2_w2 = {
  enemies: [EnemyRed, EnemyBlue, EnemyRed, EnemyRed, EnemyBlue, EnemyRed],
  timeBetweenSpawn: 0.5,
  waypoints: [
    { x: -20, y: 0, speed: null },
    { x: 820, y: 350, speed: 1 },
    { x: 820, y: 80, speed: 0.5 },
    { x: 20, y: 200, speed: 1 }
  ]
}

const l2_w3 = {
  enemies: [EnemyBlue, EnemyBlue, EnemyRed, EnemyBlue, EnemyRed],
  timeBetweenSpawn: 0.65,
  waypoints: [
    { x: -20, y: 300, speed: null },
    { x: 650, y: 300, speed: 1 },
    { x: 500, y: 100, speed: 0.5 },
    { x: -20, y: 200, speed: 0.75 }
  ]
}