function filterRange(arr, a, b) {
  return arr.filter(num => num >= a && num <= b )
}

console.log(filterRange([5,3,8,1], 1, 4))