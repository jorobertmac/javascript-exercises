const fibonacci = function(number) {
  number = parseInt(number)
  if (isNaN(number) || number < 0) return "OOPS"
  if (number === 0) return 0
  if (number === 1) return 1

  let result = 0
  let previous = 0
  let current = 1
  for (let i = 1; i < number; i++) {
    result = previous + current
    previous = current
    current = result
  }
  return result
};

// Do not edit below this line
module.exports = fibonacci;
