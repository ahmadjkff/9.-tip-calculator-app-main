document.addEventListener("DOMContentLoaded", function () {
  const tipResult = document.getElementById("tip-result");
  const totalResult = document.getElementById("total-result");
  const Tip5 = document.getElementById("5%");
  const Tip10 = document.getElementById("10%");
  const Tip15 = document.getElementById("15%");
  const Tip25 = document.getElementById("25%");
  const Tip50 = document.getElementById("50%");
  const customTipInput = document.getElementById("custom-button");
  const resultButton = document.getElementById("result");
  const billErr = document.querySelector(".bill-error-msg");
  const peopleErr = document.querySelector(".people-error-msg");
  let tipValue;

  function updateScreen(tipValue, totalValue) {
    const persons = parseFloat(document.getElementById("person-input").value);
    tipResult.textContent = parseFloat(tipValue / persons);
    totalResult.textContent = parseFloat(totalValue);
  }

  function calcTip(tipValue, amount) {
    tipValue /= 100;

    return amount * tipValue;
  }

  function calcTotal(amount, persons, tip) {
    return (amount + tip) / persons;
  }

  {
    function assignTipValue(value) {
      tipValue = value;
    }

    Tip5.addEventListener("click", () => {
      assignTipValue(5);
    });

    Tip10.addEventListener("click", () => {
      assignTipValue(10);
    });

    Tip15.addEventListener("click", () => {
      assignTipValue(15);
    });

    Tip25.addEventListener("click", () => {
      assignTipValue(25);
    });

    Tip50.addEventListener("click", () => {
      assignTipValue(50);
    });

    customTipInput.addEventListener("change", () => {
      tipValue = parseFloat(customTipInput.value) || 0; // Convert the value to a number
      console.log(tipValue); // Log the custom tip value
    });
  }

  function CheckValidity(bill, people) {
    let isValid = [false, false];

    if (isNaN(bill) || bill < 1) {
      billErr.textContent = "Must be a positive number";
    } else {
      isValid[0] = true;
      billErr.textContent = "";
    }

    if (isNaN(people) || people < 1) {
      peopleErr.textContent = "Must be a positive number";
    } else {
      isValid[1] = true;
      peopleErr.textContent = "";
    }

    return isValid.every((item) => item === true);
  }

  function clickHandler() {
    const billInputValue = parseFloat(
      document.getElementById("bill-input").value
    );
    const personInputValue = parseFloat(
      document.getElementById("person-input").value
    );

    if (!CheckValidity(billInputValue, personInputValue)) {
      updateScreen(0, 0);
      return;
    }

    let tip = calcTip(tipValue, billInputValue);
    let total = calcTotal(billInputValue, personInputValue, tip);
    updateScreen(tip, total);
  }

  resultButton.addEventListener("click", () => clickHandler());
});
