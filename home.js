const container = document.querySelector('.container')
const info = document.querySelector('.info')
let cells = []

function numberPopup() {
  let num = prompt('How many squares?', "1")
  while (num > 100 || num < 1) {
    num = prompt("Enter a valid number between 1-100, please", "1")
  }
  removeDiv()
  createDiv(num)
}

const createDiv = (num) => {
  container.style.setProperty('--num-rows', num)
  container.style.setProperty('--num-columns', num)
  info.textContent = `Number of pixels: ` + Math.pow(num, 2);

  const containerSize = container.clientWidth;
  const cellSize = `${containerSize / num}px`;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      const cell = document.createElement('div')
      cell.className = 'cell'
      cell.style.width = cellSize
      cell.style.height = cellSize
      container.appendChild(cell)
      cells.push(cell)
      cell.addEventListener('mouseover', e => {
        // e.target.classList.add('my-color-class'
        let randomRGB = `rgba(${randomColor()}, ${randomColor()}, ${randomColor()})`
        e.target.style.backgroundColor = randomRGB
      })
    }
  }
}

const randomColor = () => {
  return Math.floor(Math.random ()* 255)
}

const removeDiv = () => {
  cells.forEach(cell => cell.remove())
  cells = []
}

createDiv(16)
