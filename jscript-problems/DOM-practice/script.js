const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// <p>
let para = document.createElement("p");
para.innerText = "Hey I'm red";
para.style.color = "red";
container.appendChild(para);

// <h3>
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
h3.style.color= "blue";
container.appendChild(h3);


// div
let div = document.createElement("div");
div.classList.add("div");
div.innerText = "Ima div";
div.style.border = "10px solid blue";
div.style.backgroundColor = "pink";

container.appendChild(div)


// h1 inside div
let h1 = document.createElement("h1");
div.classList.add("h1");
h1.innerText = "I'm in a div";
h1.style.color = "White";

div.appendChild(h1);

let p2 = document.createElement("p");
div.classList.add("p2");
p2.innerText = "ME TOO!";

div.appendChild(p2);