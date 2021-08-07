const pixelBoard = document.querySelector('#pixel-board');

function createPixels() {
  for (let index = 0; index < 5; index += 1) {
     const pixel = document.createElement('div');
     pixel.className = 'pixel';
     pixel.style.backgroundColor = 'white';
     pixelBoard.appendChild(pixel)
  }
}
createPixels()
