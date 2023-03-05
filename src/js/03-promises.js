import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const inputFirstDelay = document.querySelector('input[name="delay"]');
const inputDelayStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');

const onFormElSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { delay, step, amount }
  } = event.currentTarget;
  // console.log(Number(amount.value));

  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountVal = Number(amount.value);

  for (let i = 1; i <= amountVal; i += 1) {
    let delayPromise = firstDelay + i * delayStep;
    // console.log(delayPromise);

    createPromise(i, delayPromise)
      .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
      .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  }
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve ({position, delay})
      } else {
        reject ({position, delay})
  }
    }, delay)
  }) 
}

formEl.addEventListener("submit", onFormElSubmit);
