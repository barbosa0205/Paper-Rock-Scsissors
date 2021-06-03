const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissor = document.querySelector('#btn-scissor')
const btnPlay = document.querySelector('#btn-play')
const option = document.querySelector('#option')

const toPlay = () => {}

let op = 1
btnRock.addEventListener('click', () => {
  op = 1
  console.log(option)
  option.src = './src/media/icons/rock.png'
  return option
})
btnPaper.addEventListener('click', () => {
  op = 2
  console.log(option)
  option.src = './src/media/icons/paper.png'
  return option
})
btnScissor.addEventListener('click', () => {
  op = 3
  console.log(option)
  option.src = './src/media/icons/scissor.png'
  return option
})

btnPlay.addEventListener('click', () => {
  toPlay(op)
})
