function convert() {
  // Get the input number (as a float)
  const inputValue = parseFloat(document.getElementById("inputValue").value);

  // Check if input is a valid number
  if (isNaN(inputValue)) {
    document.getElementById("resultElement").innerHTML = "Please enter a valid number.";
    return;
  }

  // Determine conversion direction
  const conversionType = document.querySelector('input[name="conversion"]:checked').value;

  let result;
  let resultString;

  if (conversionType === "milesToKm") {
    result = inputValue * 1.60934;
    resultString = inputValue + " miles is " + result + " kilometers.";
  } else {
    // kmToMiles
    result = inputValue / 1.60934;
    resultString = inputValue + " kilometers is " + result + " miles.";
  }

  // Show the result
  document.getElementById("resultElement").innerHTML = resultString;
}
