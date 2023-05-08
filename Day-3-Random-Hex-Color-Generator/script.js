let fileName = window.location.href.split('/').slice(0, -1).pop();
document.title = fileName;

const hex = document.querySelector("p");
const generate = document.querySelector("div :nth-child(4)")

generate.addEventListener("click", () => {
    let color = Math.random().toString(16).substring(2, 8);
    hex.innerHTML = color;
    document.body.style.backgroundColor = "#" + color
})