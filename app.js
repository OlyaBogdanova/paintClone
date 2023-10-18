const canvas = document.getElementById("jsCanvas");
const range = document.getElementById("jsRange");
const btnMode = document.getElementById("jsMode");
const colors = document.querySelectorAll(".controls__color");
const ctx = canvas.getContext("2d");
const CANVAS_SIZE = 700;
const INITIAL_COLOR = "#2c2c2c";
canvas.height = CANVAS_SIZE;
canvas.width = CANVAS_SIZE;
ctx.lineWidth = 2.5;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;
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
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
function changeRange(e) {
  ctx.lineWidth = +e.target.value;
}

function handleModeClick() {
  filling = !filling;
  btnMode.innerText = filling ? "Рисование" : "Заливка";
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
}
colors.forEach((color) => color.addEventListener("click", changeColor));
range.addEventListener("change", changeRange);
btnMode.addEventListener("click", handleModeClick);
