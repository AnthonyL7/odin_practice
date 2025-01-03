function sortInDecreasingOrder(arr) {
  sorted = arr.sort((a,b) => b - a);
  return sorted
}

console.log(sortInDecreasingOrder([5,2,1,-10,8]))