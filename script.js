const sumbit = document.getElementById("submit");
let randomNum = Math.floor(Math.random() * 100) + 1;
let userInput;
let attempts = 0;

submit.onclick = function() { 
    userInput = document.getElementById("numGuess").value;

    if (userInput <= 0) {
        document.getElementById("result").textContent = "Number can't be less than 1!";
        document.getElementById("result").style.color = "red";

    } else if (userInput > 100) {
        document.getElementById("result").textContent = "Number can't be greater than 100!";
        document.getElementById("result").style.color = "red";
    }
    else if (userInput < randomNum) {
        document.getElementById("result").textContent = "Too low, try again!";
        document.getElementById("result").style.color = "crimson";
        attempts++;
    }
    else if (userInput > randomNum) {
        document.getElementById("result").textContent = "Too high, try again!";
        document.getElementById("result").style.color = "crimson";
        attempts++;

    } else if (userInput == randomNum) {
        document.getElementById("result").textContent = "You guessed the number!";
        document.getElementById("result").style.color = "limegreen";
        attempts++;
        document.getElementById("result").textContent += " It took you " + attempts + " attempts to guess the number.";
    }  
    else {
        document.getElementById("result").textContent = "Wrong, try again!";
    }
}

document.getElementById("numGuess").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submit.click();
    }
});
