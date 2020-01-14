let currentPosition = { x: 0, y: 0 }
let prevTile

function init() {
  createGrid()
  renderBot(currentPosition)
}

function createGrid() {
  const board = document.querySelector("#board")

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      board.insertAdjacentHTML("beforeend", `
        <div class="tile" data-x=${j} data-y=${i}></div>
      `)
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



