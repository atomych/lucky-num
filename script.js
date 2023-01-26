const displayRandom = () => document.querySelector(".random").style.display = "flex";
const displayForm = () => document.querySelector(".form").style.display = "flex";
const displayBtns = () => document.querySelector(".btns").style.opacity = "1";
const hideRandom = () => document.querySelector(".random").style.display = "none";
const hideForm = () => document.querySelector(".form").style.display = "none";
const hideBtns = () => document.querySelector(".btns").style.opacity = "0";

const minNumInput = document.querySelector(".input--min");
const maxNumInput = document.querySelector(".input--max");
const numberOutput = document.querySelector(".number");

const clearMinInput = () => minNumInput.value = "";
const clearMaxInput = () => maxNumInput.value = "";
const clearNumberOutput = () => numberOutput.textContent = " ";

const randomBtn = document.querySelector(".btn--random");
const retryBtn = document.querySelector(".icon--retry");
const homeBtn = document.querySelector(".icon--home");

const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min)) + min;
const validNum = (num) => "0123456789".includes(num);
const writeNumOutput = (num) => numberOutput.textContent = num;
const clearNumOutput = () => numberOutput.textContent = "";

const validInput = (input) => {
  const value = input.value;
  const lastSymbol = value[value.length - 1];
  if (!validNum(lastSymbol)) {
    input.value = value.substring(0, value.length - 1);
  }
};

const startRandom = () => {
  const min = minNumInput.value;
  const max = maxNumInput.value;

  if (min == "" || max == "" || +min >= +max) return;

  const numbers = [];

  for (let count = 0; count < 20; count++) {
    const num = getRandomNumber(+min, +max);
    numbers.push(num);
  }

  hideForm();
  displayRandom();
  hideBtns();

  for (let count = 0; count < 20; count++) {
    setTimeout(() => {
      writeNumOutput(numbers[count]);
      if (count == 19) {
        setTimeout(displayBtns, 2100);
      }
    }, 200*count);
  }
}

const returnToForm = () => {
  hideRandom();
  displayForm();
  clearNumOutput();
}

minNumInput.addEventListener("input", () => validInput(minNumInput));
maxNumInput.addEventListener("input", () => validInput(maxNumInput));
randomBtn.addEventListener("click", startRandom);
homeBtn.addEventListener("click", returnToForm);
retryBtn.addEventListener("click", startRandom);
