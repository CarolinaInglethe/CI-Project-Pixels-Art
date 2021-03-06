window.onload = () => {
  
  const pixelBoard = document.querySelector('#pixel-board');
  const colorsPalet = document.querySelectorAll('.color');

// Criar quadro de pixels
function createPixels() {
  for (let index = 0; index < 5; index += 1) {
    const pixel = document.createElement('th');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel)
    for (let indexx = 1; indexx < 5; indexx += 1) {
        const pixel = document.createElement('td');
        pixel.className = 'pixel';
        pixel.style.backgroundColor = 'white';
        pixelBoard.appendChild(pixel)
      }
  }
}
createPixels();


// Selecionar cor na paleta
 function selectColor(event) {
    colorsPalet.forEach((color) => {
        color.className = 'color'
    })
    event.target.className = 'color selected'
}
colorsPalet.forEach((color) => {
  color.addEventListener('click', selectColor);
})


// Colorir Pixels
function paintPixels(event) {
  const colorSelected = document.querySelector('.selected');
  event.target.style.backgroundColor = window.getComputedStyle(colorSelected).getPropertyValue('background-color')
}

const pixel = document.querySelectorAll('.pixel');
pixel.forEach((pix) => {
    pix.addEventListener('click', paintPixels);
})

// Botao para limpar pixels
function clearBoard() {
  const pixels = document.querySelectorAll('.pixel')
  pixels.forEach((pix) => {
      pix.style.backgroundColor = 'white'
  })
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearBoard);
 

// Input e botao de definir Tamanho de board de pixels
function removePixels() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => pixel.remove());
}

function sizePixels() {
  // removePixels()
  const inputSize = document.querySelector('#board-size').value

  pixelBoard.style.height = `${inputSize * 2}px`;
  pixelBoard.style.width = `${inputSize * 2}px`
  pixelBoard.style.display = 'flex'
  pixelBoard.style.flexFlow = 'row wrap'
 }
const buttonBoardSize = document.querySelector('#generate-board');
buttonBoardSize.addEventListener('click', sizePixels)

}