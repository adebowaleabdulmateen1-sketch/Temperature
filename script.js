``
function convertTemp() {
const temp = parseFloat(document.getElementById('tempInput').value);
const unit = document.getElementById('unitSelect').value;
const result = document.getElementById('result');


if (isNaN(temp)) {
result.textContent = 'Please enter a valid number 😅';
return;
}


let celsius, fahrenheit, kelvin;


if (unit === 'C') {
celsius = temp;
fahrenheit = (temp * 9) / 5 + 32;
kelvin = temp + 273.15;
} else if (unit === 'F') {
celsius = ((temp - 32) * 5) / 9;
fahrenheit = temp;
kelvin = celsius + 273.15;
} else {
kelvin = temp;
celsius = temp - 273.15;
fahrenheit = (celsius * 9) / 5 + 32;
}


result.innerHTML = `
<p><strong>Celsius:</strong> ${celsius.toFixed(2)} °C</p>
<p><strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F</p>
<p><strong>Kelvin:</strong> ${kelvin.toFixed(2)} K</p>
`;
}