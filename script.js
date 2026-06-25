let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value;
    let message = document.getElementById("message");

    // Check if input is empty
    if (guess === "") {
        message.innerText = "⚠️ Please enter a number!";
        return;
    }

    guess = Number(guess);

    attempts++;
    document.getElementById("attempts").innerText =
        "Attempts: " + attempts;

    if (guess < randomNumber) {
        message.innerText = "📉 Too Low!";
    }
    else if (guess > randomNumber) {
        message.innerText = "📈 Too High!";
    }
    else {
        message.innerText =
            "🎉 Correct! You guessed it in " + attempts + " attempts.";

        setTimeout(function () {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attempts = 0;

            document.getElementById("attempts").innerText = "Attempts: 0";
            guessInput.value = "";
            message.innerText = "🔄 New number generated! Start guessing...";
        }, 3000);
    }
}
}