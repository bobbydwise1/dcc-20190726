/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.
*/

/*
The solution was found at:
https://academo.org/demos/estimating-pi-monte-carlo/

The canvas is a 200x200 box.  If we assume the upper left corner represents coordinate -100,-100, and the lower right corner represents 100,100.  This means the max value of either x or y is 100.

x^2 + y^2 = r^2

edge case:  either x or y is equal to length 100:

100^2 = r^2 ... then ... r = 100

The equation becomes: x^2+y^2 = 10000

if you have a random coordinate (x,y) where -100 < x < 100 and -100 < y < 100, and you plug it into the equation and it's equal or smaller than 100, then that is inside the circle.

*/

const whatIsPie = (number) => {
  let answer = 0;
  var c = document.getElementById('mainCanvas');
  var ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.arc(100,100,100,0,2*Math.PI)
  ctx.stroke();
  for (i=0; i<number; i++) {
    let x = Math.round(Math.random()*200-100);
    let y = Math.round(Math.random()*200-100);
    ctx.fillRect(x+100,y+100,1,1);
    //console.log('(x,y) = ('+x+','+y+')')

    if (x*x+y*y <= 10000) {answer++}
  }
  return 4*answer/number;
}

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let input1 = parseInt($("#input1").val());
    let output1 = whatIsPie(input1);
    console.log(output1);
    $('#output-section-1').text(output1);
  });
});
