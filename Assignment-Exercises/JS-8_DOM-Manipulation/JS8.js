// your code starts here
document.addEventListener("DOMContentLoaded", function () {
  // select countertext, add button, and subtract button
  const counterText = document.getElementById("counter-text");
  const addButton = document.getElementById("button-add");
  const subtractButton = document.getElementById("button-subtract");

  // set initial counter value
  let counterValue = 0;

  // add event listener to addButton
  addButton.addEventListener("click", function () {
    // increment counter value by 1
    counterValue++;
    // set new counter value
    counterText.innerText = counterValue;
  });

  // add event listener to subtractButton
  subtractButton.addEventListener("click", function () {
    if (counterVal > 0) {
      // decrement counter value by 1
      counterValue--;
      // set new counter value
      counterText.innerText = counterValue;
    }
  });
});
