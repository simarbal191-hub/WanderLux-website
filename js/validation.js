
document.addEventListener("DOMContentLoaded", function () {

  // Prevent past date selection for appointment forms
  const today = new Date().toISOString().split("T")[0];
  document.querySelectorAll('input[type="date"]').forEach(dateInput => {
    dateInput.setAttribute("min", today);
  });

  // Select all forms on the page
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Stop page reload

      let inputs = form.querySelectorAll("input, textarea");
      let valid = true;

      // Check required fields
      inputs.forEach(input => {
        if (input.hasAttribute("required") && input.value.trim() === "") {
          valid = false;
          input.style.border = "2px solid red";
        } else {
          input.style.border = "1px solid #ccc";
        }
      });

      // Final result
      if (valid) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Please fill all required fields correctly.");
      }
    });
  });

});
