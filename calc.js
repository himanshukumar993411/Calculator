let displayBox = document.querySelector(".iiner-display");
let list = document.querySelectorAll(".show-display");
console.log("hehe")
let value = [];
function showDisplay() {



    displayBox.textContent = value.join("");
    console.log("kaam kar raha hai")
}

function calculate() {
    let eq = value.join("");
    let result = eval(eq);
    value = [result];
    showDisplay();
}

function allclear() {
    value = [];
    showDisplay()
}

function clear() {
    value = value.slice(0, -1);
    showDisplay();

}

document.querySelector(".all-clear").addEventListener("click", allclear);
document.querySelector(".class-list").addEventListener("click", clear);
document.querySelector(".calculate").addEventListener("click", calculate);

list.forEach(item => {
    item.addEventListener("click", () => {
        value.push(item.textContent);
        showDisplay();
    });

});
