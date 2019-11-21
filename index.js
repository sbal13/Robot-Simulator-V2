document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  document.addEventListener('keydown', function(event){
    if (event.key === 'ArrowRight'){
		  let listItem = document.createElement('li')
		  listItem.innerText = 'right' 
      document.getElementById('moves-container').appendChild(listItem)}
    else if (event.key === 'ArrowLeft'){
		  let listItem = document.createElement('li')
		  listItem.innerText = 'left' 
      document.getElementById('moves-container').appendChild(listItem)}
    else if (event.key === 'ArrowDown'){
      let listItem = document.createElement('li')
      listItem.innerText = 'down' 
      document.getElementById('moves-container').appendChild(listItem)}
    else if (event.key === 'ArrowUp'){
      let listItem = document.createElement('li')
      listItem.innerText = 'up' 
      document.getElementById('moves-container').appendChild(listItem)}
    else if (event.key === 'Backspace'){
      let listItems = document.querySelectorAll('li')
      if (listItems.length > 0){
        listItems[listItems.length-1].remove()
      }
    }
  })

  document.addEventListener('click', function(event){
    if (event.target.id === 'move-button') {
      let listItem = document.querySelector('li')
      move(listItem.innerText)
      listItem.remove()
    }
  })
})
