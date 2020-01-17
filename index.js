document.addEventListener("DOMContentLoaded", function () {
  init()

  // ADD CODE HERE!
  const moveList = document.getElementById("moves-container")
  const moveButton = document.getElementById("move-button")

  document.addEventListener('keydown', ({ key }) => {
    const nextMove = key.slice(5).toLowerCase()
    if (["up", "down", "left", "right"].includes(nextMove)) {
      moveList.insertAdjacentHTML("beforeend", `<li>${nextMove}</li>`)
    }
  })

  moveButton.addEventListener("click", () => {
    moveList.querySelectorAll("li").forEach((li, index) => {
      setTimeout(() => {
        move(li.textContent)
        li.remove()
      }, index * 1000);
    })
  })

})
