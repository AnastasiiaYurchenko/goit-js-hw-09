
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDateTimePicker = document.querySelector('input[type = "text"]');
const startBtn = document.querySelector("button[data-start]");
const timerEl = document.querySelector(".timer");
const fieldsEl = document.querySelectorAll(".field");
const valuesEl = document.querySelectorAll(".value");
const labelsEl = document.querySelectorAll(".label");

startBtn.disabled = true;
timerEl.style.display = "flex";
timerEl.style.gap = "20px";
fieldsEl.forEach(field => {
    field.style.display = "flex";
    field.style.flexDirection = "column";
    field.style.alignItems = "center";
});
valuesEl.forEach(value => {
    value.style.fontSize = "30px";
    value.style.fontWeight = "600";
});
labelsEl.forEach(label => {
    label.style.textTransform = "uppercase";
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const countDownDate = selectedDates[0].getTime();
    console.log(countDownDate);
    const nowDate = Date.now();
    console.log(nowDate);
    const deltaDates = countDownDate - nowDate;
    console.log(deltaDates);
    if (countDownDate > nowDate) {
      startBtn.disabled = false;
    } else {
      Notiflix.Notify.warning('Please choose a date in the future')
      // window.alert("Please choose a date in the future");
    }
    
  },
};

// let intervalId = setInterval(convertMs(deltaDates), 1000);
// console.log(intervalId);

function convertMs(deltaDates) {
      console.log(convertMs(deltaDates))
      // valuesEl.forEach(value => {
      //   value.textContent = 
      // } )
    }

flatpickr(inputDateTimePicker, options);

const onStartBtnClick = () => {
  console.log("onStartBtnClick");
  
};

// const countDownDate = options.defaultDate.getTime();
// console.log(countDownDate);
// const nowDate = Date.now();
// console.log(nowDate);
// const deltaDates = countDownDate - nowDate;
// console.log(deltaDates);

startBtn.addEventListener("click", onStartBtnClick);

