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