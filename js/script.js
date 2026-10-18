// Get the current hour and display a greeting based on the user's local time
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning!";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon!";
} else {
  greeting.textContent = "Good evening!";
}

// Show or hide each project description when the button is clicked
const detailsButtons = document.querySelectorAll(".details-button");

detailsButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const description = button.previousElementSibling;

    if (description.style.display === "block") {
      description.style.display = "none";
      button.textContent = "Show Description";
    } else {
      description.style.display = "block";
      button.textContent = "Hide Description";
    }
  });
});