const nightBtn = document.querySelector('#nightbtn')
console.log(nightBtn)
let nightMode = false

const changeNightMode = () => {
  const colorMode = document.querySelector('#colormode')
  colorMode.className += ' moon-night'
  colorMode.classList.remove('moon-day')
  nightBtn.className += ' span-night'
  nightBtn.classList.remove('span-day')
  nightMode = true
  console.log(nightMode)
  return nightMode
}

const changeDayMode = () => {
  console.log('modo dia activado')
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
