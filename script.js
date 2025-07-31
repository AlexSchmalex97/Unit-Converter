let inputValue = 10;
let milesToKm = false;
let result = 0;

if (milesToKm === true) {
    result = inputValue * 1.60934;
} else {
    result = inputValue / 1.60934;
}

let resultString = "";

if (milesToKm) {
    resultString = inputValue + " miles is " + result + " km";
} else {
    resultString = inputValue + " km is " + result + " miles";
}

const resultElement = document.getElementById("resultElement");
resultElement.innerHTML = resultString;