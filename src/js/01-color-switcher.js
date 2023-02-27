
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const onStartBtnClick = (e) => {
    // console.log("onStartBtnClick");
    startBtn.setAttribute("disabled", true);
    intervalId = setInterval(() => {
        // console.log("Працює інтервал");
    bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000)
};

const onStopBtnClick = (e) => {
    startBtn.removeAttribute("disabled");
    // console.log("onStopBtnClick");
    clearInterval(intervalId); 
};

startBtn.addEventListener("click", onStartBtnClick);
stopBtn.addEventListener("click", onStopBtnClick);


