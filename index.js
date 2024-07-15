var countValue = 0;
let timer;

function onButtonTap() {
    console.log("from onButtonTap");
    if (!timer) {
        timer = setInterval(function() {
            countValue += 1;
            document.getElementById("counter-header").textContent = "Welcome to My Counter: " + countValue;
        }, 2000);
    }
}
