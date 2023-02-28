
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const inputDateTimePicker = document.querySelector('input[type = "text"]');
const startBtn = document.querySelector("button[data-start]");
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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(inputDateTimePicker, options);

const onStartBtnClick = () => {
    console.log("onStartBtnClick");
};

startBtn.addEventListener("click", onStartBtnClick);