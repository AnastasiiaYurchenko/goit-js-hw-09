
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputDateTimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector("button[data-start]");
const daysEl = document.querySelector("span[data-days]");
const hoursEl = document.querySelector("span[data-hours]");
const minutesEl = document.querySelector("span[data-minutes]");
const secondsEl = document.querySelector("span[data-seconds]");
const timerEl = document.querySelector(".timer");
const fieldsEl = document.querySelectorAll(".field");
const valuesEl = document.querySelectorAll(".value");
const labelsEl = document.querySelectorAll(".label");

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

startBtn.disabled = true;
inputDateTimePicker.disabled = false;
let timeToCount; 

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]); selectedDates - це масив обраних дат, тому ми беремо перший елемент
    if (selectedDates[0] > new Date()) {
      startBtn.disabled = false;
    } else {
      Notiflix.Notify.warning('Please choose a date in the future');
      // window.alert("Please choose a date in the future");
    }
  },
};

flatpickr(inputDateTimePicker, options);

function convertMs(ms) { // ms - Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day); // Remaining days
  const hours = Math.floor((ms % day) / hour); // Remaining hours
  const minutes = Math.floor(((ms % day) % hour) / minute); // Remaining minutes
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);  // Remaining seconds

  return { days, hours, minutes, seconds };
};
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
};

const onStartBtnClick = () => {
  inputDateTimePicker.disabled = true;
  startBtn.disabled = true;
  console.log("onStartBtnClick");
  let intervalId = setInterval(() => {
    const currentTime = Date.now();
    let selectedDate = new Date(inputDateTimePicker.value).getTime();
    timeToCount = selectedDate - currentTime;
    let objectOfTime = convertMs(timeToCount);
    // console.log("Change time");
    if (timeToCount > 0) {
    daysEl.textContent = objectOfTime.days;
    hoursEl.textContent = addLeadingZero(objectOfTime.hours);
    minutesEl.textContent = addLeadingZero(objectOfTime.minutes);
    secondsEl.textContent = addLeadingZero(objectOfTime.seconds);
    } else {
      clearInterval(intervalId);
      inputDateTimePicker.disabled = false;
    }
  }, 1000);
  };

startBtn.addEventListener("click", onStartBtnClick);

