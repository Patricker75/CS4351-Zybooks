const directions = {
   UP: 'up',
   DOWN: 'down',
   LEFT: 'left',
   RIGHT: 'right'
}

window.addEventListener("load", function () {
   const canvas = document.querySelector("canvas");

   // Draw 4 frogs facing different directions
   drawFrog(canvas, 50, 50, directions.UP);
   drawFrog(canvas, 180, 50, directions.DOWN);   
   drawFrog(canvas, 50, 180, directions.LEFT);
   drawFrog(canvas, 180, 180, directions.RIGHT);
});

function drawFrog(canvas, x, y, direction = directions.UP) {   
   const context = canvas.getContext("2d");
   const frogImg = document.querySelector("img");

   let xCoord = x + frogImg.width / 2;
   let yCoord = y + frogImg.height / 2
   switch (direction) {
      case directions.DOWN:
         context.translate(xCoord, yCoord);
         context.rotate(Math.PI);
         context.translate(-xCoord, -yCoord);

         break;
      case directions.LEFT:
         context.translate(xCoord, yCoord);
         context.rotate(-90 * Math.PI / 180);
         context.translate(-xCoord, -yCoord);
         break;
      case directions.RIGHT:
         context.translate(xCoord, yCoord);
         context.rotate(90 * Math.PI / 180);
         context.translate(-xCoord, -yCoord);
         break;
   }

   context.drawImage(frogImg, x, y);

   // Necessary so next call to drawFrog isn't rotated or translated
   context.resetTransform();
}