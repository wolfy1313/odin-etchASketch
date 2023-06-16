// const container = document.querySelector('.container')
// let rows = []
// let cells = []

// const squaresButton = document.querySelector('.squaresButton')


// function numberPopup() {
//   let num = prompt('How many squares?', "1")
//   if (num > 100 || num < 1){

//     num = prompt("Enter a valid number between 1-100 please", "1")
//     removeDiv()
//     createDiv(num)
//   } else {
//     removeDiv()
//     createDiv(num)
//     cells.forEach((cell) => {
//       cell.classList.remove('my-color-class');
//     })
//   }
// }

// const createDiv = (num) => {
//   container.style.setProperty('--num-rows', num)
//   container.style.setProperty('--num-columns', num)

//   for (let i = 0; i < num; i++){
//     const row = document.createElement('div')
//     row.classList.add('row')
//     container.appendChild(row)
//     rows.push(row)

//     for (j =0; j<num; j++){
//       const cell = document.createElement('div');
//       cell.className = 'col';
//       row.appendChild(cell)
//       cells.push(cell)
//       cell.addEventListener('mouseover', e => {e.target.classList.add('my-color-class')})
//     }
//   }
  
// }

// const removeDiv = () => {
//   rows.forEach(row => row.remove())
  // cells.forEach(cell => cell.remove())
//   rows = []
//   cells = []
// }

// createDiv(16)

// const container = document.querySelector('.container')
// let cells = []

// function numberPopup() {
//   let num = prompt('How many squares?', "1")
//   if (num > 100 || num < 1) {
//     num = prompt("Enter a valid number between 1-100, please", "1")
//   }
//   removeDiv()
//   createDiv(num)
// }

// const createDiv = (num) => {
//   container.style.setProperty('--num-rows', num)
//   container.style.setProperty('--num-columns', num)

//   const cellSize = `${100 / num}%`

//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       const cell = document.createElement('div')
//       cell.className = 'col'
//       cell.style.width = cellSize
//       cell.style.height = cellSize
//       container.appendChild(cell)
//       cells.push(cell)
//       cell.addEventListener('mouseover', e => {
//         e.target.classList.add('my-color-class')
//       })
//     }
//   }
// }

// const removeDiv = () => {
//   cells.forEach(cell => cell.remove())
//   cells = []
// }

// createDiv(16)

const container = document.querySelector('.container')
let cells = []

function numberPopup() {
  let num = prompt('How many squares?', "1")
  if (num > 100 || num < 1) {
    num = prompt("Enter a valid number between 1-100, please", "1")
  }
  removeDiv()
  createDiv(num)
}

const createDiv = (num) => {
  container.style.setProperty('--num-rows', num)
  container.style.setProperty('--num-columns', num)

  // const cellSize = `${960 / num}px`
  const containerSize = container.clientWidth;
  const cellSize = `${containerSize / num}px`;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const cell = document.createElement('div')
      cell.className = 'col'
      cell.style.width = cellSize
      cell.style.height = cellSize
      container.appendChild(cell)
      cells.push(cell)
      cell.addEventListener('mouseover', e => {
        e.target.classList.add('my-color-class')
      })
    }
  }
}

const removeDiv = () => {
  cells.forEach(cell => cell.remove())
  cells = []
}

createDiv(16)
