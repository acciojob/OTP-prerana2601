//your JS code here. If required.
// Function to move focus to the next input after typing a number
function moveFocus(currentInput, nextIndex) {
    if (currentInput.value !== "") {
        const nextInput = document.getElementById("otp" + nextIndex);
        if (nextInput) {
            nextInput.focus();
        }
    }
}

// Function to handle backspace key press and move focus to the previous input
function handleBackspace(event, currentIndex) {
    if (event.key === "Backspace" && document.getElementById("otp" + currentIndex).value === "") {
        const prevInput = document.getElementById("otp" + (currentIndex - 1));
        if (prevInput) {
            prevInput.focus();
        }
    }
}
