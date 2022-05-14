var canvas = document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height =600;

function drawRect(ctx, startx, starty, width, height, color) {
    ctx.beginPath();
    ctx.rect(startx, starty, width, height);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  drawRect(ctx, 50, 40, canvas.width/2, canvas.height/2, "blue");