const close = document.querySelector('#close')
const overlayPainter = document.querySelector('.overlay-painter')

const openPaint = () => {
  overlayPainter.className += ' overlay-painter-visible'
}

const closePaint = () => {
  overlayPainter.classList.remove('overlay-painter-visible')
}

btnRoller.addEventListener('click', () => {
  openPaint()
})

btnSetting.addEventListener('click', () => {})

close.addEventListener('click', () => {
  closePaint()
})
