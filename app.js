const canvas = document.querySelector('#jsCanvas');
let painting = false;

if(canvas) {                                             //이렇게 하면 exist의 여부를 알수 있는군
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', stopPainting);
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
 // stopPainting()
}

function onMouseLeave(event) {
  stopPainting()
}

function stopPainting() {
  painting = false;
}