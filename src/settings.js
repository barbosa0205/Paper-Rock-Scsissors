const closeset = document.querySelector('#close-settings')
const overlaySettings = document.querySelector('.overlay-settings')

const openSettings = () => {
  overlaySettings.className += ' overlay-settings-visible'
}
const closeSettings = () => {
  overlaySettings.classList.remove('overlay-settings-visible')
}

btnSetting.addEventListener('click', () => {
  openSettings()
})

closeset.addEventListener('click', () => {
  closeSettings()
})
