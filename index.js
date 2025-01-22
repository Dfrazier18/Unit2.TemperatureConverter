function converttoCelsius(fahrenheit) {
  return fahrenheit - 32 * (5 / 9);
}

function describeTemperature(fahrenheit) {
  const celsius = converttoCelsius(fahrenheit);

  let description;

  if (celsius < 0) {
    description = "very cold.....why do you live here?";
  } else if (celsius < 20) {
    description = "cold, I think it's time to move!";
  } else if (celsius < 30) {
    description = "warm, which means nice and comfy vibes!";
  } else if (celsius < 40) {
    description = "hot, might want to turn the AC on.";
  } else if (celsius >= 40) {
    description = "very hot...how is it having the devil as a neighbor?";
  }
  return `${fahrenheit} degrees farenheit is equivalent to ${celsius} degrees celsius, therefore it's ${description}`;
}

const fahrenheit = prompt("What is the temperature in farenheit?");

const description = describeTemperature(fahrenheit);
alert(description);
