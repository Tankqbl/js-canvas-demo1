let div1 = document.createElement("div");
div1.className = "canvas";
document.body.appendChild(canvas);
canvas.onclick = e => {
  console.log(e);
  console.log(e.clientX);
  console.log(e.clientY);
  div1.style.position = "absolute";
  div1.style.left = e.clientX + "px";
  div1.style.top = e.clientY + "px";
  div1.style.border = "1px red solid";
  div1.style.width = "6px";
  div1.style.height = "6px";
  div1.style.marginLeft = "-3px";
  div1.style.marginTop = "-3px";
  canvas.appendChild(div1);
};
