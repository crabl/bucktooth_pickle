$(document).ready(function() {
      var canvas = $("#myCanvas");
      var ctx = canvas.get(0).getContext("2d");

      canvas.get(0).width = $(window).width() - 20;
      canvas.get(0).height = $(window).height() - 120;

      var xoff = -50;
      var yoff = -50;

      // Draw the pickle
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.fillStyle = "008100";
      ctx.moveTo(280 + xoff, 115 + yoff);
      ctx.bezierCurveTo(130 + xoff, 45 + yoff, 228 + xoff, 480 + yoff, 371 + xoff, 415 + yoff);
      ctx.bezierCurveTo(442 + xoff, 389 + yoff, 355 + xoff, 299 + yoff, 341 + xoff, 250 + yoff);
      ctx.bezierCurveTo(330 + xoff, 221 + yoff, 331 + xoff, 140 + yoff, 280 + xoff, 115 + yoff);
      ctx.closePath();
      
      ctx.stroke();
      ctx.fill();

      var scl_factor = 1.5;
      // Draw the eyes
      centerX_l = 250 + xoff;
      centerY_l = 115 + (yoff / scl_factor);
      radius = 10;
      ctx.scale(1,scl_factor);
      ctx.beginPath();
      ctx.arc(centerX_l, centerY_l, radius, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fillStyle = "white";
      ctx.stroke();
      ctx.fill();

      centerX_r = 280 + xoff;
      centerY_r = 115 + (yoff / scl_factor);
      ctx.beginPath();
      ctx.arc(centerX_r, centerY_r, radius, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fillStyle = "white";
      ctx.stroke();
      ctx.fill();

      ctx.scale(1, 1/1.5);
      // Draw the pupils
      // TODO: Fix the scaling shit
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(centerX_l, centerY_l - yoff/scl_factor + 7, 3, 0, 2 * Math.PI, true);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(centerX_r, centerY_r - yoff/scl_factor + 7, 3, 0, 2 * Math.PI, true);
      ctx.fill();

      var img = new Image();
      img.src = "teeth.png";
      img.onload = function() {
	 ctx.drawImage(img, 250 + xoff, 200 + yoff);
      };
   });
