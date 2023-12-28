const test = "test";

const form = document.querySelector("form");

const firstName = document.getElementById("first_name");
const firstNameError = document.querySelector("p.error-text");

firstName.addEventListener("input", (event) => {
  if (firstName.validity.valid) {
    firstNameError.textContent = "";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!firstName.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (firstName.validity.valueMissing) {
    firstNameError.textContent = "First Name cannot be blank";
  }
}
