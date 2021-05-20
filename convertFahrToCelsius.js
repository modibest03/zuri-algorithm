const convertFahrToCelsius = (n) => {
  c = ((n - 32) * 5) / 9;

  if (Array.isArray(n)) {
    return "array is not a valid number";
  }

  if (typeof n === "object") {
    return "object is not a valid number ";
  }

  if (typeof n === "string") {
    num = +n;
    if (isNaN(num)) {
      return "object is not a valid number ";
    }
  }

  return c.toFixed(4);
};

console.log(convertFahrToCelsius(0));
