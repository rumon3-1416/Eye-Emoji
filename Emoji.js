const canvas = document.querySelector('.canvas');
const c = canvas.getContext('2d');

drawFace();
// +++callMouseMoves
canvas.addEventListener('mouseover', function () {
  drawMove();
});
canvas.addEventListener('mouseleave', function () {
  c.reset();
  drawFace();
});

// ++mouseOut
function drawFace() {
  // +++all
  // ++faceFill
  c.beginPath();
  c.arc(200, 200, 70, 0, 2 * Math.PI);
  c.fillStyle = 'yellow';
  c.fill();
  // +outerFace
  c.beginPath();
  c.arc(200, 200, 70, 0, 2 * Math.PI);
  c.strokeStyle = 'black';
  c.stroke();

  // ++eyefill
  c.beginPath();
  c.arc(175, 190, 15, 0, 2 * Math.PI);
  c.arc(225, 190, 15, 0, 2 * Math.PI);
  c.fillStyle = 'white';
  c.fill();
  // +outerLeft
  c.beginPath();
  c.arc(175, 184, 17, -Math.PI + 0.6, -0.6);
  c.strokeStyle = 'black';
  c.lineWidth = '2';
  c.stroke();

  c.beginPath();
  c.arc(175, 190, 15, 0, 2 * Math.PI);
  c.strokeStyle = 'black';
  c.lineWidth = '1';
  c.stroke();
  // +outerRight
  c.beginPath();
  c.arc(225, 184, 17, -Math.PI + 0.6, -0.6);
  c.strokeStyle = 'black';
  c.lineWidth = '2';
  c.stroke();

  c.beginPath();
  c.arc(225, 190, 15, 0, 2 * Math.PI);
  c.strokeStyle = 'black';
  c.lineWidth = '1';
  c.stroke();
  // +eyeInner
  c.beginPath();
  c.fillStyle = 'black';
  c.arc(225, 190, 7, 0, 2 * Math.PI);
  c.arc(175, 190, 7, 0, 2 * Math.PI);
  c.fill();

  // ++mouth
  c.beginPath();
  c.arc(200, 205, 40, 0.5, Math.PI - 0.5);
  c.strokeStyle = 'black';
  c.lineWidth = '2';
  c.stroke();
}

// ++++move
function drawMove() {
  canvas.addEventListener('mousemove', function (e) {
    var X = e.offsetX;
    var Y = e.offsetY;

    c.reset();

    // +++all
    // ++faceFill
    c.beginPath();
    c.arc(200, 200, 70, 0, 2 * Math.PI);
    c.fillStyle = 'yellow';
    c.fill();
    // +outerFace
    c.beginPath();
    c.arc(200, 200, 70, 0, 2 * Math.PI);
    c.strokeStyle = 'black';
    c.stroke();
    // ++eyefill
    c.beginPath();
    c.arc(175, 190, 15, 0, 2 * Math.PI);
    c.arc(225, 190, 15, 0, 2 * Math.PI);
    c.fillStyle = 'whitesmoke';
    c.fill();
    // +outerLeft
    c.beginPath();
    c.moveTo(190, 175);
    c.lineTo(170, 158);
    c.strokeStyle = 'black';
    c.lineWidth = '2';
    c.stroke();

    c.beginPath();
    c.arc(175, 190, 15, 0, 2 * Math.PI);
    c.strokeStyle = 'black';
    c.lineWidth = '1';
    c.stroke();
    // +outerRight
    c.beginPath();
    c.moveTo(210, 175);
    c.lineTo(230, 158);
    c.strokeStyle = 'black';
    c.lineWidth = '2';
    c.stroke();

    c.beginPath();
    c.arc(225, 190, 15, 0, 2 * Math.PI);
    c.strokeStyle = 'black';
    c.lineWidth = '1';
    c.stroke();

    // ++mouth
    c.beginPath();
    c.arc(200, 270, 40, -Math.PI + 0.9, -0.9);
    c.strokeStyle = 'black';
    c.lineWidth = '2';
    c.stroke();

    // // ++mousePoint
    // // c.translate(-200, -200);
    // c.beginPath();
    // c.arc(X, Y, 7.5, 0, 2*Math.PI);
    // c.fillStyle = "red";
    // c.fill();

    // New+

    drawFCircle1();
    drawFCircle2();

    // ++eyeInner-left
    function drawFCircle1() {
      c.translate(175, 190);
      let y = Y - 190;
      let x = X - 175;
      let aR = Math.atan2(y, x);
      // +rotate
      c.beginPath();
      c.rotate(aR);
      c.translate(6, 0);
      c.arc(0, 0, 9, 0, 2 * Math.PI);
      c.fillStyle = 'black';
      c.translate(-6, 0);
      c.rotate(-aR);
      c.fill();
    }
    // ++eyeInnerRight
    function drawFCircle2() {
      c.translate(50, 0);
      let y = Y - 190;
      let x = X - 225;
      let aR = Math.atan2(y, x);
      // +rotate
      c.beginPath();
      c.rotate(aR);
      c.translate(6, 0);
      c.arc(0, 0, 9, 0, 2 * Math.PI);
      c.fillStyle = 'black';
      c.translate(-6, 0);
      c.rotate(-aR);
      c.fill();
    }
  });
}
