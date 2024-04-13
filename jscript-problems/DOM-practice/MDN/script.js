// anchor
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org"

// Section
let sect = document.querySelector("section");
let para = document.createElement("p");
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "55px";
para.style.textAlign = "center";
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);

let text = document.createTextNode(" - the premier source for web development knowledge.");

let linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

sect.removeChild(linkPara);