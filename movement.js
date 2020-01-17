let currentPosition = { x: 0, y: 0 }
let prevTile

function init() {
  createGrid()
  renderBot(currentPosition)
}

function randomTarget() {
  function randBetween(start, end) {
    return Math.floor(Math.random() * end) + start
  }

  return [randBetween(0, 10), randBetween(0, 10)]
}

function createGrid() {
  const board = document.querySelector("#board")
  const [targetX, targetY] = randomTarget()

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const tile = document.createElement('div')
      tile.dataset.x = x
      tile.dataset.y = y

      tile.classList.add("tile")
      if (x == targetX && y == targetY) {
        tile.classList.add("goal")
      }
      board.appendChild(tile)
    }
  }
}

function renderBot(targetPosition) {
  const newTile = document.querySelector(`.tile[data-x='${targetPosition.x}'][data-y='${targetPosition.y}']`)

  if (!newTile) {
    alert("Clang! Hit a wall")
    return false
  } else {
    if (prevTile) {
      prevTile.classList.remove("robot")
    }

    newTile.classList.add("robot")
    prevTile = newTile

    return true
  }

}

function move(direction) {
  let { x, y } = currentPosition

  switch (direction) {
    case "left":
      x--
      break;
    case "right":
      x++
      break;
    case "up":
      y--
      break;
    case "down":
      y++
      break;
  }

  const moved = renderBot({ x, y })
  if (moved) {
    currentPosition = { x, y }
  }
}