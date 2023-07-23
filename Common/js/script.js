let valueDisplay = document.querySelectorAll(".num");
let interval = 1000;


console.log(valueDisplay);

valueDisplay.forEach((valueDisplay) => {
    let startval = 0;
    let endval = parseInt(valueDisplay.getAttribute("data-val"));
    let timing = Math.floor(interval / endval);
    let counter = setInterval(() => {
        startval = startval + 1;
        valueDisplay.textContent = startval;
        if (startval == endval) {
            clearInterval(counter);
        }
    }, timing);
});