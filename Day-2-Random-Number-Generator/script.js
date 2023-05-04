let fileName = window.location.href.split('/').slice(0, -1).pop();
document.title = fileName;

const number = document.querySelector("p");
const generate = document.querySelector("div :nth-child(4)")

generate.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 10)
    number.innerHTML = rand;
});