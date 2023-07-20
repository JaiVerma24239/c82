var mouseevent= "empty"
var lastX,lastY
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="black"
widthofline=1
canvas.addEventListener("mouseDown",mymousedown)
function mymousedown(e){
    color=document.getElementById("color").value
    widthofline=document.getElementById("widthofline").value
    mouseevent="mousedown"
}
canvas.addEventListener("mouseup",mymouseup)
function mymouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mouseleave",mymouseleave)
function mymouseleave(e){
    mouseevent="mouseleave"
}
canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
 currentX=e.clientX-canvas.offsetLeft
 currentY=e.clientY-canvas.offsetTop

 if (mouseevent =="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.moveTo(lastX,LastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
 }
 lastX=currentX
 lastY=currentY

}
function clear() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
