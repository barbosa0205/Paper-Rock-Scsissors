const btnRock = document.querySelector('#btn-rock')
const btnPaper = document.querySelector('#btn-paper')
const btnScissor = document.querySelector('#btn-scissor')
const btnPlay = document.querySelector('#btn-play')
const option = document.querySelector('#option')
const CPU = document.querySelector('#cpu')
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const toPlay = op => {
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
    console.log('Yow Win')
  } else if (
    (op == 1 && cpu == 1) ||
    (op == 2 && cpu == 2) ||
    (op == 3 && cpu == 3)
  ) {
    console.log('Tie')
  } else {
    console.log('Cpu Win')
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
