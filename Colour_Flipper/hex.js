//Hex values are as such:
//#f1f5f8
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",];
const btn = document.getElementById('btn');
const colour = document.querySelector(".colour");

//Idea is to create a loop in hex object
btn.addEventListener("click", function () {

    let hexValue = '#';

    for (let i = 0; i < 6; i++) {

        hexValue += hex[generateRandomNumber()]
    }
    colour.textContent = hexValue;
    document.body.style.backgroundColor = hexValue;
});

function generateRandomNumber() {

    return Math.floor(Math.random() * hex.length);
}