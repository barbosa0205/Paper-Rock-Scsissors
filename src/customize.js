const closePainter = document.querySelector('#close-painter')
const overlayPainter = document.querySelector('.overlay-painter')
const selectHand = document.querySelector('#select-hand')
const applyHand = document.querySelector('#apply-hand')
const imgPainter = document.querySelector('.img-painter')

const openPaint = () => {
  overlayPainter.className += ' overlay-painter-visible'
}
const closePaint = () => {
  overlayPainter.classList.remove('overlay-painter-visible')
}

const changeColorHand = op => {
  if (op.value == 'white') {
    rps.rock = './src/media/icons/rock.png'
    rps.paper = './src/media/icons/paper.png'
    rps.scissor = './src/media/icons/scissor.png'
    if (optionPlayer == 1) {
      option.src = './src/media/icons/rock.png'
    } else if (optionPlayer == 2) {
      option.src = './src/media/icons/paper.png'
    } else {
      option.src = './src/media/icons/scissor.png'
    }
    imgPainter.src = rps.scissor
  } else if (op.value == 'yellow') {
    rps.rock = './src/media/icons/rock-yellow.png'
    rps.paper = './src/media/icons/paper-yellow.png'
    rps.scissor = './src/media/icons/scissor-yellow.png'
    if (optionPlayer == 1) {
      option.src = './src/media/icons/rock-yellow.png'
    } else if (optionPlayer == 2) {
      option.src = './src/media/icons/paper-yellow.png'
    } else {
      option.src = './src/media/icons/scissor-yellow.png'
    }
    imgPainter.src = rps.scissor
  } else if (op.value == 'brown') {
    rps.rock = './src/media/icons/rock-brown.png'
    rps.paper = './src/media/icons/paper-brown.png'
    rps.scissor = './src/media/icons/scissor-brown.png'
    if (optionPlayer == 1) {
      option.src = './src/media/icons/rock-brown.png'
    } else if (optionPlayer == 2) {
      option.src = './src/media/icons/paper-brown.png'
    } else {
      option.src = './src/media/icons/scissor-brown.png'
    }
    imgPainter.src = rps.scissor
  } else if (op.value == 'orange') {
    rps.rock = './src/media/icons/rock-orange.png'
    rps.paper = './src/media/icons/paper-orange.png'
    rps.scissor = './src/media/icons/scissor-orange.png'
    if (optionPlayer == 1) {
      option.src = './src/media/icons/rock-orange.png'
    } else if (optionPlayer == 2) {
      option.src = './src/media/icons/paper-orange.png'
    } else {
      option.src = './src/media/icons/scissor-orange.png'
    }
    imgPainter.src = rps.scissor
  }
}

const setColor = op => {
  if (op.id == 'select-hand') {
    changeColorHand(op)
  } else if (op.id == 'select-button') {
    changeColorButton(op)
  }
}

btnRoller.addEventListener('click', () => {
  openPaint()
})

closePainter.addEventListener('click', () => {
  closePaint()
})

applyHand.addEventListener('click', () => {
  setColor(selectHand)
})
