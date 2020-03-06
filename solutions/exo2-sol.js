//Solution
const oddOrEven = (num) => {
  return num % 2 === 1 ? 'Odd' : 'Even'
};

console.log(oddOrEven(16));
console.log(oddOrEven(89));

//1 is true, 0 is false so this solution will work as well:
const oddOrEven = (num) => num % 2 ? 'Odd' : 'Even';

console.log(oddOrEven(16));
console.log(oddOrEven(89));