// formula to convert fahrenheit to celcius
// C = (F - 32) x 5/9;
const convertFahrToCelcius = (f) => {
  let result = ((Number(f) - 32) * 5) / 9;
  if (Number(f) === NaN) {
    return `${f} is not a valid number but a/an ${typeof f}`;
  } else if (typeof f === 'string') {
    return `${f} is not a valid number but a/an string`;
  } else if (Array.isArray(f)) {
    return `${JSON.stringify(f)} is not a valid number but a/an array`;
  } else if (typeof f === 'object') {
    return `${JSON.stringify(f)} is not a valid number but a/an ${typeof f}`;
  }
  return result.toFixed(4);
};
console.log(convertFahrToCelcius({ test: 3 }));

// function to check yu-gi-oh
const checkYuGiOh = (n) => {
  let numbers = [];
  if (isNaN(n)) {
    return `Invalid parameter ${n}`;
  }
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  numbers.forEach((el, idx) => {
    if (el % 2 === 0 && el % 3 === 0 && el % 5 === 0) {
      numbers.splice(idx, 1, 'yu-gi-oh');
    } else if (el % 3 === 0 && el % 5 === 0) {
      numbers.splice(idx, 1, 'gi-oh');
    } else if (el % 2 === 0 && el % 3 === 0) {
      numbers.splice(idx, 1, 'yu-gi');
    } else if (el % 2 === 0 && el % 5 === 0) {
      numbers.splice(idx, 1, 'yu-oh');
    } else if (el % 5 === 0) {
      numbers.splice(idx, 1, 'oh');
    } else if (el % 3 === 0) {
      numbers.splice(idx, 1, 'gi');
    } else if (el % 2 === 0) {
      numbers.splice(idx, 1, 'yu');
    } else {
      return;
    }
  });
  return numbers;
};
console.log(checkYuGiOh('30'));
