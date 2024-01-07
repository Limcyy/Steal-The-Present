var box = document.querySelector("#box");
var rightButton = document.querySelector("#right")
var box2 = document.querySelector("#box2");
var boxx = document.querySelector("#boxX")
var bo = document.querySelector("#bo")
var ball = document.querySelector("#ball")
var boxxx = document.querySelector("#boxxx")
var retryButton = document.querySelector("#retryButton")
var text = document.querySelector("#text")
retryButton.style.display = 'none';
text.style.display = "none"
let up2 = 1;
let right2 = 1;
let left2 = 1;
let down2 = 1;
retryButton.addEventListener("click", restartPage)
function restartPage() {
    // Reload the current page
    location.reload();
  }


function handleKeyPressD(event) {
    if (event.key === 'D' || event.key === 'd') {
      right()
      console.log(window.innerHeight, window.innerWidth )
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

let position = 0
let direction = 1;
const maxWidth = window.innerHeight - box.offsetWidth;
const xmaxWidth = window.innerWidth - box.offsetWidth;
righ()
const xfirstImage = 'url(src/pixil-frame-0-7.png)';
    const xsecondImage = 'url(src/pixil-frame-0-6.png)';
    let xcurrentImage = xfirstImage;
function righ() {
    box.style.left = 30 * 20 + "px"
    
    
        position += 4 * direction;
        if (position > maxWidth || position === 0) {
            direction *= -1;
            xcurrentImage = xcurrentImage === xfirstImage ? xsecondImage : xfirstImage;
      box.style.backgroundImage = xcurrentImage;
          }
          box.style.bottom = position + 'px'
};
    let xposition = 0
    let xdirection = 1
    const firstImage = 'url(src/pixil-frame-0-7.png)';
    const secondImage = 'url(src/pixil-frame-0-6.png)';
    let currentImage = firstImage;
    function rig() {
    boxx.style.left = 30 * 14 + "px"
    
    
        xposition += 4 * xdirection;
        if (xposition > maxWidth || xposition === 0) {
            xdirection *= -1;
            currentImage = currentImage === firstImage ? secondImage : firstImage;
      boxx.style.backgroundImage = currentImage;
          }
        boxx.style.bottom = xposition + 'px'
        
        
    
  };
  function ri() {
    bo.style.right = 10 + "px"
    bo.style.bottom = 10 + "px"
     
  };
  let xxdirection = 1
    let xxposition = 0
  function r() {
    ball.style.right = 90 + "px"
    ball.style.bottom = "510px"
    xxposition += 6 * xxdirection;
    
    
    if (xxposition > xmaxWidth + 90 || xxposition === 0) {
        xxposition = 90
        
       }
       ball.style.right = xxposition + 'px'
  }
setInterval(r, 3)
setInterval(ri, 10)
setInterval(rig, 10)
setInterval(righ, 5)

box2.style.top = "0px"
box2.style.left = "0px"


let xxwinCount = localStorage.getItem("xxwincount")
function save() {
  xxwinCount++
  localStorage.setItem("xxwincount", xxwinCount);
  console.log(localStorage.getItem("xxwincount"))
  

}
function up() {
    
    box2.style.top = (parseInt(box2.style.top) - 30) + 'px';
    
}
  
  function right() {
    box2.style.left = (parseInt(box2.style.left) + 30) + 'px';
  }
  
  function left() {
    box2.style.left = (parseInt(box2.style.left) - 30) + 'px';
  }
  
  function down() {
    box2.style.top = (parseInt(box2.style.top) + 30) + 'px';
  }
  var x = setInterval((function checkCollision() {
    
    const rect1 = box.getBoundingClientRect();
    const rect2 = box2.getBoundingClientRect();
    const rect3 = boxx.getBoundingClientRect();
    const rect4 = bo.getBoundingClientRect();
    const rect5 = ball.getBoundingClientRect()
    if (
      rect1.right >= rect2.left &&
      rect1.left <= rect2.right &&
      rect1.bottom >= rect2.top &&
      rect1.top <= rect2.bottom 
      
    ) {
        box2.style.display = 'none';
        boxx.style.display = 'none';
        ball.style.display = 'none';
        bo.style.display = 'none';
        boxxx.style.display = 'none';
        box.style.display = 'none';
        document.body.style.backgroundImage = "url(src/pixil-frame-0-12.png)"
        retryButton.style.display = "block"
        clearInterval(x)
    }
    if (
      rect3.right >= rect2.left &&
      rect3.left <= rect2.right &&
      rect3.bottom >= rect2.top &&
      rect3.top <= rect2.bottom
    ) {
        box2.style.display = 'none';
        boxx.style.display = 'none';
        ball.style.display = 'none';
        bo.style.display = 'none';
        boxxx.style.display = 'none';
        box.style.display = 'none';
        document.body.style.backgroundImage = "url(src/pixil-frame-0-12.png)"
        retryButton.style.display = "block"
        clearInterval(x)
        console.log(rect2.left)
    }

     if (
      rect4.right >= rect2.left &&
      rect4.left <= rect2.right &&
      rect4.bottom >= rect2.top &&
      rect4.top <= rect2.bottom
     )
     
     {
        box2.style.display = 'none';
        boxx.style.display = 'none';
        ball.style.display = 'none';
        bo.style.display = 'none';
        boxxx.style.display = 'none';
        box.style.display = 'none';
        document.body.style.backgroundImage = "url(src/pixil-frame-0-13.png)"
        retryButton.style.backgroundImage = "url(src/pixil-frame-0-17.png)"
        retryButton.style.display = "block"
        text.style.display = "block"
        save()
        text.innerHTML = "U won " + localStorage.getItem("xxwincount") + " times"
        clearInterval(x)
    }
     if (
        rect5.right >= rect2.left &&
        rect5.left <= rect2.right &&
        rect5.bottom >= rect2.top &&
        rect5.top <= rect2.bottom
       )
       
       {
        box2.style.display = 'none';
        boxx.style.display = 'none';
        ball.style.display = 'none';
        bo.style.display = 'none';
        boxxx.style.display = 'none';
        box.style.display = 'none';
        document.body.style.backgroundImage = "url(src/pixil-frame-0-12.png)"
        retryButton.style.display = "block"
        
        
        
        clearInterval(x)
    
      } 
    if  (
        0 > rect2.left ||
        window.innerWidth < rect2.right ||
        window.innerHeight < rect2.bottom ||
        0 > rect2.top
        )
        {
            box2.style.display = 'none';
            boxx.style.display = 'none';
            ball.style.display = 'none';
            bo.style.display = 'none';
            boxxx.style.display = 'none';
            box.style.display = 'none';
            document.body.style.backgroundImage = "url(src/pixil-frame-0-12.png)"
            retryButton.style.display = "block"
            clearInterval(x)
        } 
  }), 10)
  
  // Check collision on an interval (e.g., every 100 milliseconds)
  

//if (left2 === 1000) {
        //    clearInterval(x);
       // }