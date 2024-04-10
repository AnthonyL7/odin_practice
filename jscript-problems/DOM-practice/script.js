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


