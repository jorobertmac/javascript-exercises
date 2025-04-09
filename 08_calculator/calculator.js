const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(numsArray) {
	return numsArray.reduce((total, current) => total + current, 0)
};

const multiply = function(numsArray) {
  return numsArray.reduce((total, current) => total * current)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(factor) {
  let total = 1
	for (let i = 1; i <= factor; i++) {
    total *= i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
