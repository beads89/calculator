function add(number1, number2) {
  return number1 + number2;
}

function subtract(number3, number4) {
  return number3 - number4;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);  
  });
});

$(document).ready(function() {
  $("form#sub").submit(function(event) {
    event.preventDefault();
    const number3 = parseInt($("#sub1").val());
    const number4 = parseInt($("#sub2").val());
    const result = subtract(number3, number4);
    $("#outputsub").text(result);  
  });
});
