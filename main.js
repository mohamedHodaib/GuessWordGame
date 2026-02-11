//Setting Game name 
let gameName = "Guess the Word Game";
document.querySelector("h1").textContent = gameName;
document.querySelector("footer").textContent = `${gameName} - Developed by Mohamed Hodaib`;

//Setting Game Options
let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry = 1;
let numberOfHints = 2;

//Manage Words 
let wordToGuess = "";
const words = ["Create", "Update", "Delete", "Master", "Branch", "Mainly", "Elzero", "School"];
wordToGuess = words[Math.floor(Math.random() * words.length)].toUpperCase();
let messageArea = document.querySelector(".message");

//Manage Hints
document.querySelector(".hint span").innerHTML = 2;
const getHintButton = document.querySelector(".hint");
getHintButton.addEventListener("click", getHint);

function generateInputs() {
    let inputsContainer = document.querySelector(".inputs");

    //Create Main Try Div
    for (let i = 1; i <= numberOfTries; i++) {
        let tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try ${i}</span>`;

        if(i != 1) tryDiv.classList.add("disabled-inputs");

        //Create Letters Inputs
        for (let j = 1; j <= numberOfLetters; j++) {
            let input = document.createElement("input");
            input.type = "text";
            input.setAttribute("maxlength", "1");
            input.id = `guess-${i}-letter-${j}`;
            tryDiv.appendChild(input);
        }

        inputsContainer.appendChild(tryDiv);
    }

    //Focus on the first input
    inputsContainer.children[0].children[1].focus();

    //Disable all inputs except the first one to prevent
    //the tap to focus on them before the player reaches the correct try.
    let inputsInDisabledState = document.querySelectorAll(".disabled-inputs input");
    inputsInDisabledState.forEach((input) => (input.disabled = true));


    //Manage Navigation between inputs

    //get all inputs in the game
    let allInputs = document.querySelectorAll(".inputs input");

    //convert to uppercase and go next input if the user enter the letter
    allInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            input.value = input.value.toUpperCase();
            const nextInput = allInputs[index + 1];
            if (nextInput) nextInput.focus();
        });

        //handle go right and left with arrow keys
        input.addEventListener("keydown", (event) => {
            if (event.key === "ArrowRight") {
                const nextInput = allInputs[index + 1];
                if (nextInput) nextInput.focus();
            } else if (event.key === "ArrowLeft") {
                const prevInput = allInputs[index - 1];
                if (prevInput) prevInput.focus();
            }
        })

        
    });
}

//handle Guesses
let checkButton = document.querySelector(".check");

checkButton.addEventListener("click", handleGuesses);

function handleGuesses() {
    let successGuess = true;
    for (let i = 1; i <= numberOfLetters; i++){
        let input = document.querySelector(`#guess-${currentTry}-letter-${i}`);
        let letter = input.value;

        let actualLetter = wordToGuess[i - 1];

        if (letter == actualLetter) {
            //letter is in correct place
            input.classList.add("yes-in-place");
        }
        else if (wordToGuess.includes(letter) && letter != "") {
            //letter exist but in the in-correct place
            input.classList.add("not-in-place");
            successGuess = false;
        }
        else {
            input.classList.add("not-in-word");
            successGuess = false;
        }
    }

    //Check If user wins 
    if (successGuess) {
        //to add color of correct 
        messageArea.classList.add("correct");

        messageArea.innerHTML = `You win the word is <span>${wordToGuess}</span>`;

        if (numberOfHints == 2) {
            messageArea.innerHTML = `<p>Congrats you didn't use hints!</p>`;
        }

        //Handle scroll to display message
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' 
        });
        
        //Disable all tries
        let allTries = document.querySelectorAll(".inputs > div");
        allTries.forEach((tryDiv) => tryDiv.classList.add("disabled-inputs"));

        //Disable checkButton
        checkButton.disabled = true;
        getHintButton.disabled = true;
    } else {
        //disable the current Try 
        document.querySelector(`.try-${currentTry}`)
        .classList.add("disabled-inputs");
            //disable inputs in the current try
            document.querySelectorAll(`.try-${currentTry} input`)
            .forEach((input) => (input.disabled = true));
        
        //go to next try
        currentTry++;
        if (currentTry <= numberOfTries) {
            //enable the next try 
            const nextTry = document.querySelector(`.try-${currentTry}`);
            nextTry.classList.remove("disabled-inputs");
                //enable inputs in the next try
                document.querySelectorAll(`.try-${currentTry} input`)
                    .forEach((input) => (input.disabled = false));
                //focus on the first input of the next try
                nextTry.children[1].focus();
        }
        else {
            //Handle scroll to display message
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth' 
            });
            //Disable checkButton
            checkButton.disabled = true;
            getHintButton.disabled = true;
            messageArea.innerHTML = `You Lose the word is <span>${wordToGuess}</span>`;
            //to add color of wrong
            messageArea.classList.add("wrong");
        }
    }

}

function getHint() {
    if (numberOfHints > 0) {
        numberOfHints--;
        getHintButton.children[0].innerHTML = numberOfHints
    }

    if (numberOfHints == 0) getHintButton.disabled = true;

    const enabledInputs = document.querySelectorAll("input:not([disabled])");
    const emptyEnabledInputs = Array.from(enabledInputs).filter((input) => input.value == "");

    if (emptyEnabledInputs.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyEnabledInputs.length);
        const randomInput = emptyEnabledInputs[randomIndex];
        //get index of the random empty input in the enabled inputs
        const indexToFill = Array.from(enabledInputs).indexOf(randomInput);

        if (indexToFill != -1) {
            //put the letter in the random input
            randomInput.value = wordToGuess[indexToFill];
        }

    }
}

function handleBackspace(event) {
    if (event.key === "Backspace") {
        const currentInput = document.activeElement;
        const prevInput = currentInput.previousElementSibling; 

        if (currentInput.value !== "") {
            // Delete the letter if the input is not empty.
            currentInput.value = "";
        } else if (prevInput) {
            //prevent from deleting the content of previous input
            event.preventDefault();
            //when the current input is not empty we will focus in the next input.
            prevInput.focus(); 
        }
    }
}

document.addEventListener("keydown", handleBackspace);

window.onload = function() {
    generateInputs();
}