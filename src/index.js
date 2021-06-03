const nightBtn = document.querySelector('#nightbtn')
const colorMode = document.querySelector('#colormode')
const header = document.querySelector('#header')
const main = document.querySelector('#main')
const btnPlayOut = document.querySelector('#btn-play')
const btnPlayOn = document.querySelector('#play-on')
const play = document.querySelector('#play')
const reflect = document.querySelector('#reflect')
let nightMode = false
let count = 0

const changeNightMode = () => {
  colorMode.className += ' moon-night'
  colorMode.classList.remove('moon-day')
  nightBtn.className += ' span-night'
  nightBtn.classList.remove('span-day')
  header.className += ' header-night'
  header.classList.remove('header-day')
  main.className += ' main-night'
  main.classList.remove('main-day')
  btnPlayOut.className += ' play-out-night'
  btnPlayOn.className += ' play-on-night'
  play.className += ' play-night'
  reflect.className += ' reflect-night'

  nightMode = true
  console.log(nightMode)
  return nightMode
}

const changeDayMode = () => {
  colorMode.className += ' moon-day'
  colorMode.classList.remove('moon-night')
  colorMode.classList.remove('fa-sun')
  colorMode.className += ' fa-moon'
  nightBtn.className += ' span-day'
  nightBtn.classList.remove('span-night')
  header.className += ' header-day'
  header.classList.remove('header-night')
  main.className += ' main-day'
  main.classList.remove('main-night')
  btnPlayOut.classList.remove('play-out-night')
  btnPlayOn.classList.remove('play-on-night')
  play.classList.remove('play-night')

  nightMode = false
  console.log(nightMode)
  return nightMode
}

const changeWebStyle = nightMode => {
  if (nightMode == false) {
    changeNightMode()
  } else {
    changeDayMode()
  }
}

nightBtn.addEventListener('click', () => {
  changeWebStyle(nightMode)
})
