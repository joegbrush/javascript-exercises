const fibonacci = function (count) {
  let firstPrev = 1;
  let secondPrev = 0;

  for (let i = 2; i < count; i++) {
    let current = firstPrev + secondPrev;
    secondPrev = firstPrev;
    firstPrev = current;
  }
  return firstPrev;
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
