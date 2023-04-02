// Function to insert the clicked number or operator into the display
function insert(num) {
  document.getElementById('display').value += num;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function backspace() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result of the expression in the display
function calculate() {
  var display = document.getElementById('display');
  var expression = display.value;

  if (expression) {
    try {
      var result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
}

// Function to calculate the sine of the value in the display
function sine() {
  var display = document.getElementById('display');
  var value = display.value;
  var radians = value * (Math.PI / 180);
  display.value = Math.sin(radians).toFixed(4);
}

// Function to calculate the cosine of the value in the display
function cosine() {
  var display = document.getElementById('display');
  var value = display.value;
  var radians = value * (Math.PI / 180);
  display.value = Math.cos(radians).toFixed(4);
}

// Function to calculate the tangent of the value in the display
function tangent() {
  var display = document.getElementById('display');
  var value = display.value;
  var radians = value * (Math.PI / 180);
  display.value = Math.tan(radians).toFixed(4);
}

// Function to calculate the natural logarithm of the value in the display
function naturalLog() {
  var display = document.getElementById('display');
  var value = display.value;
  display.value = Math.log(value).toFixed(4);
}

// Function to calculate the square root of the value in the display
function squareRoot() {
  var display = document.getElementById('display');
  var value = display.value;
  display.value = Math.sqrt(value).toFixed(4);
}

// Function to handle keyboard input
function handleKeyPress(event) {
  var keyCode = event.keyCode;
  var charCode = event.charCode;
  var key = String.fromCharCode(keyCode || charCode);

  // Check if the key is a number or operator
  if (/\d|\+|\-|\*|\/|\./.test(key)) {
    insert(key);
  }
  // Check if the key is the equals sign or the Enter key
  else if (keyCode === 61 || keyCode === 13) {
    calculate();
  }
  // Check if the key is the Backspace key
  else if (keyCode === 8) {
    backspace();
  }
  // Check if the key is the Escape key
  else if (keyCode === 27) {
    clearDisplay();
  }
}

// Add event listeners for keyboard input
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keypress', handleKeyPress);
