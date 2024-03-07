document.addEventListener("DOMContentLoaded", function () {
  const tipResult = document.getElementById("tip-result");
  const totalResult = document.getElementById("total-result");
  const inputElements = document.querySelectorAll(".input");
  const Tip5 = document.getElementById("5%");
  const Tip10 = document.getElementById("10%");
  const Tip15 = document.getElementById("15%");
  const Tip25 = document.getElementById("25%");
  const Tip50 = document.getElementById("50%");
  const customTipInput = document.getElementById("custom-button");
  const resultButton = document.getElementById("result");
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

  function clickHandler() {
    const billInputValue =
      parseFloat(document.getElementById("bill-input").value) || 0;
    const personInputValue =
      parseFloat(document.getElementById("person-input").value) || 1;
    let tip = calcTip(tipValue, billInputValue);
    let total = calcTotal(billInputValue, personInputValue, tip);
    updateScreen(tip, total);
  }

  resultButton.addEventListener("click", () => clickHandler());

  inputElements.forEach((item) => {
    item.addEventListener("keydown", (e) => {
      e.key === "Enter" && clickHandler();
    });
  });
});
