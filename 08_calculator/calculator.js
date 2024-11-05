const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	return numArray.reduce((total, num)=>{
    return total + num;
  }, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((product, num) => {
    return product * num;
  }, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if(num === 0 || num === 1) return 1;

  return num * factorial(num-1);
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
