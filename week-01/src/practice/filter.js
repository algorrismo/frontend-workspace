// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(result) {
//   return result >= 18;
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]