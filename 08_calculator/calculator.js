const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(set) {
	let total = 0;
  for (let x of set) {
    total += x;
  }
  return parseInt(total);
};

const multiply = function(set) {
  return set.reduce(function(a,b) {
    return a * b;
  }, 1);
};

const power = function(a,b) {
	let base = 1;
  for (let i = 0; i < b; i++) {
    base *= a;
  }
  return base;
};

const factorial = function(num) {
	const numArray = [];
  for (let i = 0; i < num; i++) {
    numArray[i] = i + 1;
  }
  return numArray.reduce(function(a,b) {
    return a * b;
  }, 1);
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
