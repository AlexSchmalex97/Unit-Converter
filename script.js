function convert() {
  const inputValue = document.getElementById("inputValue").value;
  const conversionType = document.querySelector('input[name="conversion"]:checked').value;
  const resultElement = document.getElementById("resultElement");

  const number = parseFloat(inputValue);

  if (isNaN(number)) {
    resultElement.textContent = "❌ Please enter a valid number.";
    return;
  }

  let result;
  let message;

  if (conversionType === "milesToKm") {
    result = number * 1.60934;
    message = `${number} miles = ${result.toFixed(2)} kilometers`;
  } else {
    result = number / 1.60934;
    message = `${number} kilometers = ${result.toFixed(2)} miles`;
  }

  resultElement.textContent = message;
}
