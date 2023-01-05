var numButtons = document.getElementsByClassName("num-container");
numButtons.forEach(button => {
    button.addEventListener("click", addNumToDisplay(button.value));
});

function addNumToDisplay(val) {
    document.getElementById("display").value += val;
}