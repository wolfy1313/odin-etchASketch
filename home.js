const container = document.querySelector('.container')

const squaresButton = document.querySelector('.squaresButton')

// squaresButton.addEventListener('onclick', e => alert("how many squares?"))

function numberPopup() {
  let num = prompt('How many squares?', "0")
  if (num > 100 || num < 1){

    num = prompt("Enter a valid number between 1-100 please", "0")
    createDiv(num)
  } else {
  createDiv(num)
  }
}

const createDiv = (num) => {

  for (let i = 0; i < num; i++){
    const row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    row.textContent = ''

    for (j =0; j<num; j++){
      const col = document.createElement('div');
      col.className = 'col';
      row.appendChild(col)
      col.textContent = ''
      col.addEventListener('mouseover', e => {e.target.classList.add('my-color-class')})
    }
  }
  
}

createDiv(16)


