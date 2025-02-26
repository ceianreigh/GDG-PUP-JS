function checkAge() {
  // Get the user's age input
  let age = document.getElementById("ageInput").value;

  // Convert the input to a number
  age = Number(age);

  // Initialize category variable
  let category;

  // Check the age and assign the category
  if (age >= 0 && age <= 12) {
    category = "Child";
  } else if (age >= 13 && age <= 19) {
    category = "Teenager";
  } else if (age >= 20) {
    category = "Adult";
  }

  // Check if the input is not a number
  else {
    category = "Invalid age. Please enter a valid number.";
  }

  // Display the category
  document.getElementById("result").textContent = category;
}
