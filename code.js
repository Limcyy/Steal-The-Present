const player = document.querySelector("#player");
const slowElf = document.querySelector("#slowElf");
const fastElf = document.querySelector("#fastElf")
const gift = document.querySelector("#gift")
const snowBall = document.querySelector("#ball")
const shootingElf = document.querySelector("#shootingElf")
const retryButton = document.querySelector("#retryButton")
const maxHeight = window.innerHeight - player.offsetWidth;
const maxWidth = window.innerWidth - player.offsetWidth;

retryButton.style.display = 'none';

retryButton.addEventListener("click", restartPage)

function restartPage() {
  location.reload();
}


function handleKeyPressD(event) {
  if (event.key === 'D' || event.key === 'd') {
    right()
  }
}
function handleKeyPressW(event) {
  if (event.key === 'W' || event.key === 'w') {
    up()
  }
}
function handleKeyPressS(event) {
  if (event.key === 'S' || event.key === 's') {
    down()
  }
}
function handleKeyPressA(event) {
  if (event.key === 'A' || event.key === 'a') {
    left()
  }
}

document.addEventListener('keydown', handleKeyPressD);
document.addEventListener('keydown', handleKeyPressW);
document.addEventListener('keydown', handleKeyPressS);
document.addEventListener('keydown', handleKeyPressA);

player.style.top = "0px"
player.style.left = "0px"


function up() {
  player.style.top = (parseInt(player.style.top) - 30) + 'px';
}

function right() {
  player.style.left = (parseInt(player.style.left) + 30) + 'px';
}

function left() {
  player.style.left = (parseInt(player.style.left) - 30) + 'px';
}

function down() {
  player.style.top = (parseInt(player.style.top) + 30) + 'px';
}

let slowElfPosition = 0
let slowElfDirection = 1;


const firstImage = 'url(src/pixil-frame-0-7.png)';
const secondImage = 'url(src/pixil-frame-0-6.png)';

let slowElfCurrentImage = firstImage;

slowElf.style.left = 30 * 20 + "px"
function slowElfMoving() {

  slowElfPosition += 4 * slowElfDirection;

  if (slowElfPosition > maxHeight || slowElfPosition === 0) {
    slowElfDirection *= -1;
    slowElfCurrentImage = slowElfCurrentImage === firstImage ? secondImage : firstImage;
    slowElf.style.backgroundImage = slowElfCurrentImage;
  }

  slowElf.style.bottom = slowElfPosition + 'px'

};

let fastElfPosition = 0
let fastElfDirection = 1
let fastElfCurrentImage = firstImage;

fastElf.style.left = 30 * 14 + "px"

function fastElfMoving() {

  fastElfPosition += 20 * fastElfDirection;

  if (fastElfPosition > maxHeight || fastElfPosition === 0) {
    fastElfDirection *= -1;
    fastElfCurrentImage = fastElfCurrentImage === firstImage ? secondImage : firstImage;
    fastElf.style.backgroundImage = fastElfCurrentImage;
  }

  fastElf.style.bottom = fastElfPosition + 'px'

};

  gift.style.right = 10 + "px"
  gift.style.bottom = 10 + "px"


let snowBallDirection = 1
let snowBallPosition = 0

snowBall.style.right = 90 + "px"
  snowBall.style.bottom = "510px"

function snowBallMoving() {
  
  snowBallPosition += 20 * snowBallDirection;

  if (snowBallPosition > maxWidth + 90 || snowBallPosition === 0) {
    snowBallPosition = 90

  }

  snowBall.style.right = snowBallPosition + 'px'
}


setInterval(slowElfMoving, 10)
setInterval(snowBallMoving, 4)
setInterval(fastElfMoving, 5)

function death() {
    slowElf.style.display = 'none';
    player.style.display = 'none';
    fastElf.style.display = 'none';
    snowBall.style.display = 'none';
    gift.style.display = 'none';
    shootingElf.style.display = 'none';
    player.style.display = 'none';
    document.body.style.backgroundImage = "url(src/pixil-frame-0-12.png)"
    retryButton.style.display = "block"
    clearInterval(DiedOrWinInterval)
}
 
function win() {
    slowElf.style.display = 'none';
    fastElf.style.display = 'none';
    snowBall.style.display = 'none';
    gift.style.display = 'none';
    shootingElf.style.display = 'none';
    player.style.display = 'none';
    document.body.style.backgroundImage = "url(src/pixil-frame-0-13.png)"
    retryButton.style.backgroundImage = "url(src/pixil-frame-0-17.png)"
    retryButton.style.display = "block"
    clearInterval(DiedOrWinInterval)
}
 
const DiedOrWinInterval = setInterval((function checkCollision() {

  const slowElfsBorder = slowElf.getBoundingClientRect();
  const playersBorder = player.getBoundingClientRect();
  const rect3 = fastElf.getBoundingClientRect();
  const rect4 = gift.getBoundingClientRect();
  const rect5 = snowBall.getBoundingClientRect()
  
  if (
    slowElfsBorder.right >= playersBorder.left &&
    slowElfsBorder.left <= playersBorder.right &&
    slowElfsBorder.bottom >= playersBorder.top &&
    slowElfsBorder.top <= playersBorder.bottom

  ) {
    death()
  }
  if (
    rect3.right >= playersBorder.left &&
    rect3.left <= playersBorder.right &&
    rect3.bottom >= playersBorder.top &&
    rect3.top <= playersBorder.bottom
  ) {
    death()

  }

  if (
    rect4.right >= playersBorder.left &&
    rect4.left <= playersBorder.right &&
    rect4.bottom >= playersBorder.top &&
    rect4.top <= playersBorder.bottom
  ) {
   win()
  }
  if (
    rect5.right >= playersBorder.left &&
    rect5.left <= playersBorder.right &&
    rect5.bottom >= playersBorder.top &&
    rect5.top <= playersBorder.bottom
  ) {
    death()
  }
  if (
    0 > playersBorder.left ||
    window.innerWidth < playersBorder.right ||
    window.innerHeight < playersBorder.bottom ||
    0 > playersBorder.top
  ) {
    death()
  }
}), 10)
