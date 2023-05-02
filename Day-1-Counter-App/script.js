let fileName = window.location.href.split('/').slice(0, -1).pop();
document.title = fileName;

const count = document.querySelector("p");
const buttons = document.querySelector("div :nth-child(4)")

buttons.addEventListener("click", (e) => {
    let event = e.target.innerHTML;
    if (event === "Add") {
        count.innerHTML++;
    } else if (event === "Subtract") {
        count.innerHTML--;
    } else if (event === "Reset") {
        count.innerHTML = 0;
    }
});
