const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissor = document.querySelector("#btn-scissor");
const btnPlay = document.querySelector("#btn-play");
const option = document.querySelector("#option");
const CPU = document.querySelector("#cpu");
const overlay = document.querySelector("#overlay");
const alert = document.querySelector("#alert");
const message = document.querySelector("#message");
const btnRetry = document.querySelector("#btn-retry");
const btnReset = document.querySelector("#btn-reset");
const alertMusic = document.querySelector("#alert-music");
const playerWins = document.querySelector("#player-wins");
const cpuWins = document.querySelector("#cpu-wins");
const rps = {
  rock: "./src/media/icons/rock.png",
  paper: "./src/media/icons/paper.png",
  scissor: "./src/media/icons/scissor.png",
};

let e;

//Close Alert
const closeAlert = () => {
  overlay.classList.remove("overlay-visible");
  overlay.className += " overlay-hidden";
  alert.classList.remove("alert-visible");
  alert.className += " alert-hidden";
  alert.classList.remove("alert-won");
  alert.classList.remove("alert-tie");
  alert.classList.remove("alert-lost");
  CPU.src = "./src/media/icons/interrogationSign.png";
};

const animation = (e) => {
  if (e == 1) {
    alertMusic.src = "./src/music/win.wav";
    alertMusic.volume = 0.4;
    alertMusic.play();
    message.innerHTML = "YOU WON <b>🏆</b>";
    overlay.classList.remove("overlay-hidden");
    overlay.className += " overlay-visible";
    alert.classList.remove("alert-hidden");
    alert.className += " alert-visible";
    alert.className += " alert-won";
  } else if (e == 2) {
    alertMusic.src = "./src/music/tie.wav";
    alertMusic.volume = 0.4;
    alertMusic.play();
    message.innerHTML = "TIE <b>🤝</b>";
    overlay.classList.remove("overlay-hidden");
    overlay.className += " overlay-visible";
    alert.classList.remove("alert-hidden");
    alert.className += " alert-visible";
    alert.className += " alert-tie";
  } else {
    alertMusic.src = "./src/music/lost.wav";
    alertMusic.volume = 0.4;
    alertMusic.play();
    message.innerHTML = "YOU LOST <b>😔</b>";
    overlay.classList.remove("overlay-hidden");
    overlay.className += " overlay-visible";
    alert.classList.remove("alert-hidden");
    alert.className += " alert-visible";
    alert.className += " alert-lost";
  }
};

let winnersPlayer = 0;
let winnersCpu = 0;

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const toPlay = (op) => {
  const cpu = random(1, 3);

  if (cpu == 1) {
    CPU.src = rps.rock;
  } else if (cpu == 2) {
    CPU.src = rps.paper;
  } else {
    CPU.src = rps.scissor;
  }

  if ((op == 1 && cpu == 3) || (op == 2 && cpu == 1) || (op == 3 && cpu == 2)) {
    e = 1;
    animation(e);
    whyWin(true);
  } else if (
    (op == 1 && cpu == 1) ||
    (op == 2 && cpu == 2) ||
    (op == 3 && cpu == 3)
  ) {
    e = 2;
    animation(e);
  } else {
    e = 3;
    animation(e);
    whyWin(false);
  }
};

const whyWin = (x) => {
  if (x) {
    playerWins.innerText = ++winnersPlayer;
  } else {
    cpuWins.innerText = ++winnersCpu;
  }
};

//dynamic change in the option img
let optionPlayer = 1;
btnRock.addEventListener("click", () => {
  optionPlayer = 1;
  option.src = rps.rock;
  return option;
});
btnPaper.addEventListener("click", () => {
  optionPlayer = 2;
  option.src = rps.paper;
  return option;
});
btnScissor.addEventListener("click", () => {
  optionPlayer = 3;
  option.src = rps.scissor;
  return option;
});

btnPlay.addEventListener("click", () => {
  toPlay(optionPlayer);
});

btnRetry.addEventListener("click", () => {
  closeAlert();
});

btnReset.addEventListener("click", () => {
  winnersPlayer = 0;
  winnersCpu = 0;
  playerWins.innerText = winnersPlayer;
  cpuWins.innerText = winnersCpu;
  closeAlert();
});
