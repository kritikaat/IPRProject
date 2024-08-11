document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("ipForm");
  const inputs = form.querySelectorAll("input[required]");

  inputs.forEach(input => {
      input.addEventListener("invalid", function (event) {
          event.preventDefault();
          if (!input.value) {
              input.setCustomValidity("Please fill out this field.");
          }
      });

      input.addEventListener("input", function () {
          input.setCustomValidity("");
      });
  });

  form.addEventListener("submit", function (event) {
      let isValid = true;
      inputs.forEach(input => {
          if (!input.checkValidity()) {
              input.reportValidity();
              isValid = false;
          }
      });
      if (!isValid) {
          event.preventDefault();
      }
  });
});
