const canvas = document.getElementById("jsCanvas");
let painting = false;
function onMouseMove(e) {
  x = e.offsetX;
  y = e.offsetY;
}
function onMouseDown(e) {
  painting = true;
}
function onMouseUp(e) {
  stopPainting();
}

function stopPainting() {
  painting = false;
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
