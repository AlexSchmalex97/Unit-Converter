function convert() {
  const input = document.getElementById("numberInput").value;
  const kmToMiles = document.getElementById("kmToMiles").checked;
  const resultDiv = document.getElementById("result");

  const number = parseFloat(input);

  if (isNaN(number)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }

  let result;
  let conversionText;

  if (kmToMiles) {
    result = number * 0.621371;
    conversionText = `${number} kilometers is ${result.toFixed(2)} miles.`;
  } else {
    result = number / 0.621371;
    conversionText = `${number} miles is ${result.toFixed(2)} kilometers.`;
  }

  resultDiv.textContent = conversionText;
}
