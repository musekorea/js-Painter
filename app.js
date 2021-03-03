const canvas = document.querySelector('#jsCanvas');
const colors = document.querySelectorAll('.jsColor');
const colorArr = Array.from(colors);

canvas.width = 650;    //canvas의 크기를 정의해줘야 ctx에서 크기를 받아들임
canvas.height = 650;   //실제 pixel size를 주는 것임 
const ctx = canvas.getContext('2d');
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

colorArr.forEach(event => event.addEventListener('click', changeColor));

function changeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}
if(canvas) {             //이렇게 하면 exist의 여부를 알수 있는군
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);      
  canvas.addEventListener('mouseleave', stopPainting);  
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if(!painting) {    // if(painting===false);
    //마우스를 움직이기만 할때의 동작, 이부분이 없어도 그려지지만, 
    //마우스를 때고 이동했을때 시작점이 초기화 되지 않으면 lineto 때문에 연결 되버린다. 
    //beginPath덕분에 path를 초기화해줘서 거기부터 시작할 수 있게 되는 것 
    //moveTo(x,y)도 같은 역할을 한다. 
    ctx.beginPath();
    //ctx.moveTo(x , y);   
  }else {           //마우스를 down하고 그리기 시작할때 
    ctx.lineTo(x,y);
    ctx.stroke();
  }

}

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

