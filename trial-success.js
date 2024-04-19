let formData = JSON.parse(sessionStorage.getItem("formData"));

let formDataDisplay = document.getElementById("form-data-display");
formDataDisplay.textContent = `${formData.firstName} ${formData.lastName} for your free trial!`;

const backHomeBtn = document.getElementById("back-home-btn");
backHomeBtn.addEventListener("click", () => {
  sessionStorage.removeItem("formData");
  window.location.href = "index.html";
});
