// select the button using its id
const button = document.getElementById("colorButton");

// add an event listener to the button
button.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomColor();
});

// when the button is clicked, change the background color of the body to a random color
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
