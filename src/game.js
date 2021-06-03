const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissor = document.querySelector('#btn-scissor')
const btnPlay = document.querySelector('#btn-play')
const option = document.querySelector('#option')
const CPU = document.querySelector('#cpu')
const overlay = document.querySelector('#overlay')
const alert = document.querySelector('#alert')
const message = document.querySelector('#message')

const animation = e => {
  if (e == 1) {
    message.innerText = 'YOU WON'
    overlay.className += ' overlay-visible'
    alert.className += ' alert-visible'
  } else if (e == 2) {
    message.innerText = 'TIE'
    overlay.className += ' overlay-visible'
    alert.className += ' alert-visible'
  } else {
    message.innerText = 'YOU LOST'
    overlay.className += ' overlay-visible'
    alert.className += ' alert-visible'
  }
}

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const toPlay = op => {
  let e = 0
  cpu = random(1, 3)

  console.log(cpu, CPU)

  if (cpu == 1) {
    CPU.src = './src/media/icons/rock.png'
  } else if (cpu == 2) {
    CPU.src = './src/media/icons/paper.png'
  } else {
    CPU.src = './src/media/icons/scissor.png'
  }
  if ((op == 1 && cpu == 3) || (op == 2 && cpu == 1) || (op == 3 && cpu == 2)) {
    animation((e = 1))
  } else if (
    (op == 1 && cpu == 1) ||
    (op == 2 && cpu == 2) ||
    (op == 3 && cpu == 3)
  ) {
    animation((e = 2))
  } else {
    animation((e = 3))
  }
}

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
