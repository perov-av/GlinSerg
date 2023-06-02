"use strict";

var canvas = document.getElementsByClassName('rain')[0];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
function randomNum(max, min) {
  return Math.floor(Math.random() * max) + min;
}
function RainDrops(x, y, endy, velocity, opacity) {
  this.x = x;
  this.y = y;
  this.endy = endy;
  this.velocity = velocity;
  this.opacity = opacity;
  this.draw = function () {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x, this.y - this.endy);
    c.lineWidth = 1;
    c.strokeStyle = "rgba(255, 255, 255, " + this.opacity + ")";
    c.stroke();
  };
  this.update = function () {
    var rainEnd = window.innerHeight + 100;
    if (this.y >= rainEnd) {
      this.y = this.endy - 100;
    } else {
      this.y = this.y + this.velocity;
    }
    this.draw();
  };
}
var rainArray = [];
for (var i = 0; i < 140; i++) {
  var rainXLocation = Math.floor(Math.random() * window.innerWidth) + 1;
  var rainYLocation = Math.random() * -500;
  var randomRainHeight = randomNum(10, 2);
  var randomSpeed = randomNum(20, .2);
  var randomOpacity = Math.random() * .55;
  rainArray.push(new RainDrops(rainXLocation, rainYLocation, randomRainHeight, randomSpeed, randomOpacity));
}
function animateRain() {
  requestAnimationFrame(animateRain);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (var _i = 0; _i < rainArray.length; _i++) {
    rainArray[_i].update();
  }
}
animateRain();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpbi5qcyIsIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYyIsImdldENvbnRleHQiLCJyYW5kb21OdW0iLCJtYXgiLCJtaW4iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJSYWluRHJvcHMiLCJ4IiwieSIsImVuZHkiLCJ2ZWxvY2l0eSIsIm9wYWNpdHkiLCJkcmF3IiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJ1cGRhdGUiLCJyYWluRW5kIiwicmFpbkFycmF5IiwiaSIsInJhaW5YTG9jYXRpb24iLCJyYWluWUxvY2F0aW9uIiwicmFuZG9tUmFpbkhlaWdodCIsInJhbmRvbVNwZWVkIiwicmFuZG9tT3BhY2l0eSIsInB1c2giLCJhbmltYXRlUmFpbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImxlbmd0aCJdLCJzb3VyY2VzIjpbInJhaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JhaW4nKVswXTtcclxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5sZXQgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tTnVtKG1heCwgbWluKSB7XHJcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJhaW5Ecm9wcyh4LCB5LCBlbmR5LCB2ZWxvY2l0eSwgb3BhY2l0eSkge1xyXG5cclxuXHR0aGlzLnggPSB4O1xyXG5cdHRoaXMueSA9IHk7XHJcblx0dGhpcy5lbmR5ID0gZW5keTtcclxuXHR0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcblx0dGhpcy5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcblx0dGhpcy5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRjLmJlZ2luUGF0aCgpO1xyXG5cdFx0Yy5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xyXG5cdFx0Yy5saW5lVG8odGhpcy54LCB0aGlzLnkgLSB0aGlzLmVuZHkpO1xyXG5cdFx0Yy5saW5lV2lkdGggPSAxO1xyXG5cdFx0Yy5zdHJva2VTdHlsZT0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIFwiICsgdGhpcy5vcGFjaXR5ICsgXCIpXCI7XHJcblx0XHRjLnN0cm9rZSgpO1xyXG5cdH1cclxuXHJcblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcclxuXHRcdGxldCByYWluRW5kID0gd2luZG93LmlubmVySGVpZ2h0ICsgMTAwO1xyXG5cdFx0aWYgKHRoaXMueSA+PSByYWluRW5kKSB7XHJcblx0XHRcdHRoaXMueSA9IHRoaXMuZW5keSAtIDEwMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMueSA9IHRoaXMueSArIHRoaXMudmVsb2NpdHk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRyYXcoKTtcclxuXHR9XHJcblxyXG59XHJcblxyXG5sZXQgcmFpbkFycmF5ID0gW107XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDE0MDsgaSsrKSB7XHJcblx0bGV0IHJhaW5YTG9jYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aW5kb3cuaW5uZXJXaWR0aCkgKyAxO1xyXG5cdGxldCByYWluWUxvY2F0aW9uID0gTWF0aC5yYW5kb20oKSAqIC01MDA7XHJcblx0bGV0IHJhbmRvbVJhaW5IZWlnaHQgPSByYW5kb21OdW0oMTAsIDIpO1xyXG5cdGxldCByYW5kb21TcGVlZCA9IHJhbmRvbU51bSgyMCwgLjIpO1xyXG5cdGxldCByYW5kb21PcGFjaXR5ID0gTWF0aC5yYW5kb20oKSAqIC41NTtcclxuXHRyYWluQXJyYXkucHVzaChuZXcgUmFpbkRyb3BzKHJhaW5YTG9jYXRpb24sIHJhaW5ZTG9jYXRpb24sIHJhbmRvbVJhaW5IZWlnaHQsIHJhbmRvbVNwZWVkLCByYW5kb21PcGFjaXR5KSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVSYWluKCkge1xyXG5cclxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVJhaW4pO1xyXG5cdGMuY2xlYXJSZWN0KDAsMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgcmFpbkFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRyYWluQXJyYXlbaV0udXBkYXRlKCk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuYW5pbWF0ZVJhaW4oKTtcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkRGLE1BQU0sQ0FBQ0csS0FBSyxHQUFHQyxNQUFNLENBQUNDLFVBQVU7QUFDaENMLE1BQU0sQ0FBQ00sTUFBTSxHQUFHRixNQUFNLENBQUNHLFdBQVc7QUFFbEMsSUFBSUMsQ0FBQyxHQUFHUixNQUFNLENBQUNTLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFL0IsU0FBU0MsU0FBU0EsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDNUIsT0FBT0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUdKLEdBQUcsQ0FBQyxHQUFHQyxHQUFHO0FBQzdDO0FBRUEsU0FBU0ksU0FBU0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUU7RUFFakQsSUFBSSxDQUFDSixDQUFDLEdBQUdBLENBQUM7RUFDVixJQUFJLENBQUNDLENBQUMs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