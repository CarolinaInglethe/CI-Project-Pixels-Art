const pixelBoard = document.querySelector('#pixel-board');
const colorsPalet = document.querySelectorAll('.color');

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

 function selectColor(event) {
    colorsPalet.forEach((color) => {
        color.className = 'color'
    })
    event.target.className = 'color selected'
}

colorsPalet.forEach((color) => {
  color.addEventListener('click', selectColor);
})
