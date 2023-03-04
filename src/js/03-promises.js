const formEl = document.querySelector('.form');
const inputFirstDelay = document.querySelector('input[name="delay"]');
const inputDelayStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const buttonEl = document.querySelector('button');
console.log(buttonEl); 

const onFormElSubmit = (event) => {
  event.preventDefault();
};

const onButtonElSubmit = () => {

};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

formEl.addEventListener("submit", onFormElSubmit);
buttonEl.addEventListener("submit", onButtonElSubmit);
