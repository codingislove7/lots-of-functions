// select body
const body = document.querySelector("body");
// place holder for qub
let qub;
// listen on DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  // create a qub and add it style and append it to body
  qub = document.createElement("div");
  qub.textContent = "Hello World";
  qub.style.width = "100px";
  qub.style.height = "100px";
  qub.style.backgroundColor = "yellow";
  qub.style.color = "black";
  qub.style.lineHeight = "100px";
  qub.style.textAlign = "center";
  qub.style.position = "absolute";
  qub.style.top = "100px";
  qub.style.left = "150px";
  body.append(qub);
});

// listen on key down
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  // store key code in a place holder
  let key = e.keyCode;
  console.log(key);
  // go left
  if (key === 37) {
    goLeft();
    // go top
  } else if (key === 38) {
    goTop();
    // go right
  } else if (key === 39) {
    goRight();
    // go down
  } else if (key === 40) {
    goDown();
    // change color 
  } else if (key === 67) {
    qub.style.backgroundColor = changeColor();
  }
});

// go left
function goLeft() {
  let temp = qub.offsetLeft;
  temp -= 50;
  qub.style.left = temp + "px";
}

// go right
function goRight() {
  let temp = qub.offsetLeft;
  temp += 50;
  qub.style.left = temp + "px";
}

// go top
function goTop() {
  let temp = qub.offsetTop;
  temp -= 50;
  qub.style.top = temp + "px";
}

function goDown() {
  let temp = qub.offsetTop;
  temp += 50;
  qub.style.top = temp + "px";
}

// change color
function changeColor() {
  const randomColor = Math.random().toString(16).substr(-6);
  return "#" + randomColor;
}
