function getPin() {
    const randomPin = Math.round(Math.random() * 10000);
    const pinString = randomPin + '';
    if (pinString.length == 4) {
        return randomPin;
    } else {
        // console.log("got 3 digits and calling again", randomPin);
        return getPin();
    }
}

function generatePin() {
    const randomPin = getPin();
    document.getElementById("displayPin").value = randomPin;
}

document.getElementById("keypad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("typedNumbers");
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        if (number == '<') {
            calcInput.value = calcInput.value.slice(0, -1);
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})


function verifyPin() {
    const randomPin = document.getElementById("displayPin").value;
    const typedNumbers = document.getElementById("typedNumbers").value;
    const errorMessage = document.getElementById("notify-fail");
    const successMessage = document.getElementById("notify-success");

    if (randomPin == typedNumbers) {
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }
    else {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        document.getElementById("typedNumbers").value = '';
        const attempt = document.getElementById("attempt").innerText;
        let attemptNumber = parseInt(attempt);
        attemptNumber = --attemptNumber;
        document.getElementById("attempt").innerText = attemptNumber;
        if (attemptNumber == '0') {
            document.getElementById("submitBtn").disabled = true;
            document.getElementById("submitBtn").style.backgroundColor = '#999';
            document.getElementById("submitBtn").style.color = '#fff';
        }
    }
}


