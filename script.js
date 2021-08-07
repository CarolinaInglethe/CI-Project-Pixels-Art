const pixelBoard = document.querySelector('#pixel-board');

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
createPixels()
