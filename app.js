// select body
const body = document.querySelector("body");
// place holder for qub
let qub;
// place holder for command functions
let functions;
// place holder to store commands list
let commands = [];
// list of random movement
const r = ["right", "left", "up", "down"];
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
  functions = document.createElement("div");
  body.append(functions);
});

// listen on key down
document.addEventListener("keydown", (e) => {
  e.preventDefault();
  // store key code in a place holder
  let key = e.keyCode;

  if (key === 37) {
    addCommand("left");
  } else if (key === 38) {
    addCommand("up");
  } else if (key === 39) {
    addCommand("right");
  } else if (key === 40) {
    addCommand("down");
  } else if (key === 67) {
    qub.style.backgroundColor = changeColor();
  } else if (key === 82) {
    let temp = movementArray[Math.floor(Math.random() * movementArray.length)];
    addCommand(temp);
  } else if (key === 13 || key === 32) {
    mover();
  }
});

// change color
function changeColor() {
  const randomColor = Math.random().toString(16).substr(-6);
  return "#" + randomColor;
}
// add to command array
function addCommand(params) {
  let span = document.createElement("span");
  span.textContent = params;
  span.style.color = "white";
  span.style.padding = "10px";
  span.style.border = "1px solid grey";
  span.addEventListener("mouseover", () => {
    span.style.backgroundColor = "red";
  });
  span.addEventListener("mouseout", () => {
    span.style.backgroundColor = "";
  });
  span.addEventListener("click",function(){
    let curIndex = commands.indexOf(this)
    commands.splice(curIndex,1)
    functions.removeChild(this)
  })
  functions.append(span);
  commands.push(span);
  console.log(commands);
}

// run commands when we click on enter or space
function mover() {
  if (commands.length > 0) {
    let cur = qub.getBoundingClientRect();
    let el = commands.shift();
    let item = el.textContent.replace("+", "");
    functions.removeChild(el);
    qub.innerHTML = "Move" + item;
    if (item == "left") {
      qub.style.left = cur.left - cur.width + "px";
    }
    if (item == "right") {
      qub.style.left = cur.left + cur.width + "px";
    } 
    if (item == "up") {
      qub.style.top = cur.top - cur.height + "px";
    }
    if (item == "down") {
      qub.style.top = cur.top + cur.height + "px";
    }
    setTimeout(mover, 300);
  } else {
    qub.innerHTML = "Set Path";
  }
}
