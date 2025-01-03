function sumOfTriplesEvens(array) {
  return array
  .filter(num => num % 2 === 0)
  .map(num => num * 3)
  .reduce((sum, num) => sum + num, 0)
}

console.log(sumOfTriplesEvens([1,2,3,4,5,6,7,8,9,10]))