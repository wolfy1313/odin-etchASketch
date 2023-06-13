const container = document.querySelector('.container')
let rows = []
let cols = []

const squaresButton = document.querySelector('.squaresButton')


function numberPopup() {
  let num = prompt('How many squares?', "0")
  if (num > 100 || num < 1){

    num = prompt("Enter a valid number between 1-100 please", "1")
    removeDiv()
    createDiv(num)
  } else {
    removeDiv()
  createDiv(num)
  }
}

const createDiv = (num) => {
  for (let i = 0; i < num; i++){
    const row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    row.textContent = ''
    rows.push(row)

    for (j =0; j<num; j++){
      const col = document.createElement('div');
      col.className = 'col';
      row.appendChild(col)
      col.textContent = ''
      cols.push(col)
      col.addEventListener('mouseover', e => {e.target.classList.add('my-color-class')})
    }
  }
  
}

const removeDiv = () => {
  rows.forEach(row => row.remove())
  cols.forEach(col => col.remove())
  rows = []
  cols = []
}

createDiv(16)


