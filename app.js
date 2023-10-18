const canvas = document.getElementById("jsCanvas");
const range = document.getElementById("jsRange");
const btnMode = document.getElementById("jsMode");
const colors = document.querySelectorAll(".controls__color");
const ctx = canvas.getContext("2d");
canvas.height = 700;
canvas.width = 700;
ctx.lineWidth = 2.5;
ctx.strokeStyle = "#2c2c2c";
let painting = false;
function onMouseMove(e) {
  x = e.offsetX;
  y = e.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function onMouseDown(e) {
  startPainting();
}

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function changeColor(e) {
  ctx.strokeStyle = e.target.style.backgroundColor;
}
function changeRange(e) {
  ctx.lineWidth = +e.target.value;
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
colors.forEach((color) => color.addEventListener("click", changeColor));
range.addEventListener("change", changeRange);
// btnMode.addEventListener('click', )
