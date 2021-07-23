const nightBtn = document.querySelector("#nightbtn");
const colorMode = document.querySelector("#colormode");
const header = document.querySelector("#header");
const main = document.querySelector("#main");
const btnPlayOut = document.querySelector("#btn-play");
const btnPlayOn = document.querySelector("#play-on");
const play = document.querySelector("#play");
const reflect = document.querySelector("#reflect");
const btnSetting = document.querySelector("#btn-setting");
const iconSetting = document.querySelector("#icon-setting");
const btnRoller = document.querySelector("#btn-roller");
const iconRoller = document.querySelector("#icon-roller");
const body = document.querySelector("body");
const win = document.querySelector("#win");
const winCpu = document.querySelector("#win-cpu");
let nightMode = false;
let count = 0;

const changeNightMode = () => {
  colorMode.className += " moon-night";
  colorMode.classList.remove("moon-day");
  nightBtn.className += " span-night";
  nightBtn.classList.remove("span-day");

  btnSetting.className += " span-night";
  btnSetting.classList.remove("span-day");
  btnRoller.className += " span-night";
  btnRoller.classList.remove("span-day");
  iconSetting.className += " settings-night";
  iconSetting.classList.remove("settings-day");
  iconRoller.className += " roller-night";
  iconRoller.classList.remove("roller-day");

  header.className += " header-night";
  header.classList.remove("header-day");
  win.classList.add("win-night");
  winCpu.classList.add("win-night");
  body.className += " main-night";
  body.classList.remove("main-day");
  btnPlayOut.className += " play-out-night";
  btnPlayOn.className += " play-on-night";
  play.className += " play-night";
  reflect.className += " reflect-night";

  nightMode = true;
  console.log(nightMode);
  return nightMode;
};

const changeDayMode = () => {
  colorMode.className += " moon-day";
  colorMode.classList.remove("moon-night");
  colorMode.classList.remove("fa-sun");
  colorMode.className += " fa-moon";
  nightBtn.className += " span-day";
  win.classList.remove("win-night");
  winCpu.classList.remove("win-night");
  nightBtn.classList.remove("span-night");

  btnSetting.className += " span-day";
  btnSetting.classList.remove("span-night");
  btnRoller.className += " span-day";
  btnRoller.classList.remove("span-night");
  iconSetting.className += " settings-day";
  iconSetting.classList.remove("settings-night");
  iconRoller.className += " roller-day";
  iconSetting.classList.remove("roller-night");

  header.className += " header-day";
  header.classList.remove("header-night");
  body.className += " main-day";
  body.classList.remove("main-night");
  btnPlayOut.classList.remove("play-out-night");
  btnPlayOn.classList.remove("play-on-night");
  play.classList.remove("play-night");

  nightMode = false;
  console.log(nightMode);
  return nightMode;
};

const changeWebStyle = (nightMode) => {
  if (nightMode == false) {
    changeNightMode();
  } else {
    changeDayMode();
  }
};

nightBtn.addEventListener("click", () => {
  changeWebStyle(nightMode);
});
