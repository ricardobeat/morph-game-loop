
const FRICTION = 0.97
const ACCELERATION = 0.9
const SIZE = 50

const clamp = (value, precision) => (value * precision | 0) / precision

const step = (player) => {
    let { x, y, speedX, speedY, accelX, accelY } = player

    speedX += accelX * ACCELERATION
    speedY += accelY * ACCELERATION

    speedX *= FRICTION
    speedY *= FRICTION

    x += speedX
    y += speedY

    if (x <= bounds.left || (x + SIZE) >= bounds.right) x += (speedX *= -1)
    if (y <= bounds.top || (y + SIZE) >= bounds.bottom) y += (speedY *= -1)

    player.speedX = clamp(speedX, 100)
    player.speedY = clamp(speedY, 100)
    player.x = clamp(x, 100)
    player.y = clamp(y, 100)

    return player
}

const reducer = (state, action = {}) => {
    switch (action.type) {
        case 'STEP':
            return step(state)

        case 'PLAYER_ACCELERATE_X':
            return Object.assign(state, { accelX: action.value })

        case 'PLAYER_ACCELERATE_Y':
            return Object.assign(state, { accelY: action.value })

        default:
            return state || {
                x: 0,
                y: 0,
                speedX: 0,
                speedY: 0,
                accelX: 0,
                accelY: 0
            }
    }
}

module.exports = reducer
