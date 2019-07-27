/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.
*/

/*
Recall that pi is formally defined as the ratio of the circumfrence of a circle to it's diameter:

circumfrence / diameter = 3.141592653...

Pi is an irrational number

*/

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    let input1 = $("#input1").val();
    let output1 = (1);
    console.log(output1);
    $('#output-section-1').text(output1);
  });
});
