//#1 add7

function add7() {
  let num = 7;
  return num + 7;
}

console.log(add7());

//#2 Multiply

function multiply() {
  let num1 = 7;
  let num2 = 5;
  return num1 * num2;
}

console.log(multiply());

//#3 Capitalize
function Capitalize() {
  let text="anthOny";
  const modstring = text.substr(0,1).toUpperCase() + text.substr(1).toLowerCase();
  return modstring;
}

console.log(Capitalize());

//#4 lastLetter
function lastLetter() {
  let text = "hello";
  let lastLetter = text[text.length - 1];
  return lastLetter;cd 
}

console.log(lastLetter())