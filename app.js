const canvas = document.querySelector('#jsCanvas');
canvas.width = 650;    //canvas의 크기를 정의해줘야 ctx에서 크기를 받아들임
canvas.height = 650;   //실제 pixel size를 주는 것임 
const ctx = canvas.getContext('2d');
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

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
    //마우스를 때고 이동했을때 아래의 lineto 때문에 연결 되버린다. 
    //beginPath덕분에 path를 초기화해줘서 거기부터 시작할 수 있게 되는 것 
    ctx.beginPath();
    //ctx.moveTo(x , y);   //이건 필요 없을 듯, 이건 직선그리기 기능을 넣었을때 사용할 수 있을듯 
  }else {           //마우스를 down하고 그리기 시작할때 
    ctx.lineTo(x,y);
    ctx.stroke();
  }

}

function onMouseDown(event) {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}