const convertToCelsius = function(temperatureInFahrenheit) {
  let temperatureInCelsius = (temperatureInFahrenheit - 32) * (5 / 9);
  // return +temperatureInCelsius.toFixed(1);
  return Math.round(temperatureInCelsius * 10) / 10; // Rounding to 1 decimal digit
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let temperatureInFahrenheit = (temperatureInCelsius * (9 / 5)) + 32;
  // return +temperatureInFahrenheit.toFixed(1);
  return Math.round(temperatureInFahrenheit * 10) / 10; // Rounding to 1 decimal digit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
