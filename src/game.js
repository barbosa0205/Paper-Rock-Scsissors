const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissor = document.querySelector('#btn-scissor')

let option = 1
btnRock.addEventListener('click', () => {
  option = 1
  console.log(option)
  return option
})
btnPaper.addEventListener('click', () => {
  option = 2
  console.log(option)
  return option
})
btnScissor.addEventListener('click', () => {
  option = 3
  console.log(option)
  return option
})
