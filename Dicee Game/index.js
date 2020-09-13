let randomNumberOne = Math.floor(Math.random() * 6 + 1);
let randomNumberTwo = Math.floor(Math.random() * 6 + 1);

const newImageOne = "images/" + "dice" + randomNumberOne + ".png";
const newImageTwo = "images/" + "dice" + randomNumberTwo + ".png";

const img1 = document.querySelectorAll("img")[0];
const img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", newImageOne);
img2.setAttribute("src", newImageTwo);

const displayResult = document.querySelector("h1");

if (randomNumberOne > randomNumberTwo) {
    displayResult.innerHTML = "🚩 Player One Wins !";
} else if (randomNumberOne === randomNumberTwo) {
    displayResult.innerHTML = "Draw !";
} else {
    displayResult.innerHTML = "Player Two Wins ! 🚩";
}
