const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	let sub = a - b;
  return sub;
};

const sum = function(arr) {
  let sum = 0;
	for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};

const multiply = function(arr) {
  let mult = 1;
//	for (let i = 0; i < arr.length; i++) {
  for (let i in arr) {
    mult *= arr[i];
  };
  return mult;
};

const power = function(a, b) {
	let pow = 1;
  for (let i = b; i > 0; i--) {
    pow *= a
  };
  return pow;
};

const factorial = function(a) {
	let res;
  if (a === 0) {
    res = 1;
  } else {
    res = 1;
    for (let i = a; i > 0; i--){
      res *= i
    };
  };
  return res;
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
