document.getElementById("sign_up_form").addEventListener("submit", (event) => {
  event.preventDefault();

  let firstName = document.getElementById("first_name").value;
  let lastName = document.getElementById("last_name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let errorsArray = [];

  if (firstName.trim() === "") {
    errorsArray.push("First name cannot be blank!");
    document.getElementById("first_name_error").textContent =
      "First name cannot be blank!";
  } else {
    document.getElementById("first_name_error").textContent = "";
  }

  if (lastName.trim() === "") {
    errorsArray.push("Last name cannot be blank!");
    document.getElementById("last_name_error").textContent =
      "Last name cannot be blank!";
  } else {
    document.getElementById("last_name_error").textContent = "";
  }

  if (email.trim() === "" || !isValidEmail(email)) {
    errorsArray.push("Looks like this is not an email!");
    document.getElementById("email_error").textContent =
      "Looks like this is not an email!";
  } else {
    document.getElementById("email_error").textContent = "";
  }

  if (password.trim() === "") {
    errorsArray.push("Password name cannot be blank!");
    document.getElementById("password_error").textContent =
      "Password cannot be blank!";
  } else {
    document.getElementById("password_error").textContent = "";
  }

  if (errorsArray.length > 0) {
    return;
  }

  console.log("First name:", firstName);
  console.log("Last name:", lastName);
  console.log("Email:", email);
  console.log("Password:", password);
});

function isValidEmail(email) {
  let emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
