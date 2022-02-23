const colours = ["green", "red", "blue", "yellow"];
const btn = document.getElementById('btn');
const colour = document.querySelector('.colour');

btn.addEventListener('click', function () {
    //Get random number between 0 and 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});

function getRandomNumber() {

    return Math.floor(Math.random() * colours.length)
};