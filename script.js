const secretword = ["reza", "ali", "break", "that", "you", "market", "paris", "pizza","box","hangman","freedom",
"yellow","carpet","lion","apple","amazon","daniel","john","munich","spain","sony","eminem","legend",
"firefly","strong","casino","italy","sunday","washington","tehran","house","fight"];


let clicked = [];
let result = "";
let randomitem = "";
let mistakes = 0;


function selectrandom() {
    randomitem = secretword[Math.floor(Math.random() * secretword.length)];
    document.getElementById("letters").addEventListener("click", clickhandler);
    window.addEventListener("keydown", keyhandler);
    console.log(randomitem)
}
function setUnderScore() {
    let splitword = randomitem.split("");
    let mappedword = splitword.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"));
    result = mappedword.join("");
    document.getElementById("clue").innerHTML = `<p> ${result} </p>`;

}
function checkifwon() {
    if (randomitem === result) {
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png";
    }
}
function checkiflost() {
    if (mistakes === 6) {
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").innerHTML = `<p>the correct word is ${randomitem}</p>`;
    }
}

function updatehangmanpicture() {
    const image = document.getElementById("image").querySelector("img");
    image.src = `assets/hangman${mistakes}.png`;
}

function letterHandler(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if (randomitem.indexOf(letter) >= 0) {
        setUnderScore();
        checkifwon();
    } else if (randomitem.indexOf(letter) === -1) {
        mistakes++
        checkiflost();
        updatehangmanpicture();
    }
}
function clickhandler(event) {
    letterHandler(event.target.id);
};
function keyhandler(event) {
    letterHandler(event.key);
}

selectrandom();
setUnderScore();
const reza = {
    ali: "ali",
    san: 22

};
localStorage.setItem("name22", JSON.stringify(reza));
const data = localStorage.getItem("name22");
const parsedata = JSON.parse(data);
console.log(parsedata)
localStorage.removeItem("")
localStorage.clear()