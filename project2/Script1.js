var mysteryNumber = Math.floor(Math.random() * 100);
var playersGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var gameState = "";
var gameWon = false;
var message = "Пожалуйста, введите число от 0 до 99."
window.addEventListener("keydown", keydownHandler, false);
var input = document.querySelector("#input");
var output = document.querySelector("#output");
var button = document.querySelector("button");
button.addEventListener("click", clickHandler, false);
var arrow = document.querySelector("#arrow");
function keydownHandler(event)
{
 if(event.keyCode === 13)
 {
 validateInput();
 }
}
function clickHandler()
{
 validateInput();
}
function validateInput()
{
 playersGuess = parseInt(input.value);
 input.value = ""
 if(isNaN(playersGuess))
 {
 output.innerHTML = message;
 }
 else if(playersGuess < 0 || playersGuess > 99)
 {
 output.innerHTML = message;
 }
 else
 {
 playGame();
 }
}
function playGame()
{
 guessesRemaining -= 1;
 guessesMade += 1;
 gameState = " Сделано попыток: " + guessesMade +
 ". Осталось: " + guessesRemaining + ".";
 if(playersGuess > mysteryNumber)
 {
 output.innerHTML = "Слишком большое." + gameState;
 if (guessesRemaining < 1)
 {
 endGame();
 }
 }
 else if(playersGuess < mysteryNumber)
 {
 output.innerHTML = "Слишком маленькое." + gameState;
 if (guessesRemaining < 1)
 {
 endGame();
 }
 }
 else
 {
 gameWon = true;
 endGame();
 }
 render();
}
function endGame()
{
 if (gameWon)
 {
 output.innerHTML
 = "Да, это " + mysteryNumber + "!" + "<br>"
 + "Количество ваших попыток: " + guessesMade + ".";
 }
 else
 {
 output.innerHTML
 = "Больше не осталось попыток!" + "<br>"
 + "Было загадано число " + mysteryNumber + ".";
 }
 button.removeEventListener("click", clickHandler, false);
button.disabled = true;
 window.removeEventListener("keydown", keydownHandler, false);
 input.placeholder = "Конец игры!";
 input.disabled = true;
}
function render()
{
 arrow.style.left = playersGuess * 7 + "px";
}