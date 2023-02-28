
// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");

stopBtn.setAttribute("disabled", true); 
let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const onStartBtnClick = (e) => {
    // console.log("onStartBtnClick");
    startBtn.setAttribute("disabled", true);
    if (stopBtn.hasAttribute("disabled")) {
     stopBtn.removeAttribute("disabled");   
    };
    intervalId = setInterval(() => {
        // console.log("Працює інтервал");
    bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000)
};

const onStopBtnClick = (e) => {
    if (startBtn.hasAttribute("disabled")) {
    startBtn.removeAttribute("disabled");
    };
    // console.log("onStopBtnClick");
    stopBtn.setAttribute("disabled", true);
    clearInterval(intervalId); 
};

startBtn.addEventListener("click", onStartBtnClick);
stopBtn.addEventListener("click", onStopBtnClick);


