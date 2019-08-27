
document.addEventListener("DOMContentLoaded", function(){
  const moves = []

  createGrid()
  renderBot(currentPosition)


  const moveButton = document.querySelector("#move-button")
  moveButton.addEventListener("click", function(e){
    const direction = moves.shift()
    if (direction){
      move(direction)
      const moveList = document.querySelector("#moves-container")
      moveList.firstElementChild.remove()
    } else {
      console.log("Done!")
    }
  })

  document.addEventListener("keydown", function(e){
    e.preventDefault()
    switch(e.which){
      case 37:
        addAndDisplayMove("left")
        break;
      case 40:
        addAndDisplayMove("down")
        break;
      case 39:
        addAndDisplayMove("right")
        break;
      case 38:
        addAndDisplayMove("up")
        break;
      case 8:
        deleteMove()
        break;
    }
  })


  function addAndDisplayMove(direction){
    moves.push(direction)

    const moveList = document.querySelector("#moves-container")
    moveList.insertAdjacentHTML("beforeend", `<li>${direction}</li>`)
  }


  function deleteMove(){
    if (moves.length){
      moves.pop()
      const moveList = document.querySelector("#moves-container")
      moveList.lastElementChild.remove()
    }
}


})
