const container = document.querySelector('.container')

const squaresButton = document.querySelector('.squaresButton')



const createDiv = () => {

  for (let i = 0; i < 16; i++){
    const row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)
    row.textContent = ''

    for (j =0; j<16; j++){
      const col = document.createElement('div');
      col.className = 'col';
      row.appendChild(col)
      col.textContent = ''
      col.addEventListener('mouseover', e => {e.target.classList.add('my-color-class')})
    }
  }
  
}

createDiv()


