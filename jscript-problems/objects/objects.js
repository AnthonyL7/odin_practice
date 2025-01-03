function camelize(str) {
  let words = str.split('-')
  let results = words[0];

  for (let i = 1; i < words.length; i++) {
    results += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return results
}

result = camelize('background-color')
console.log(result)

word = 'anthony'
console.log(word.slice(1))
for (let i = 0; i < word.length; i++) {
  console.log(word[i])
}