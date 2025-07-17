// Switch between Login/Register tabs
function switchTab(formType) {
  // Update tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  event.currentTarget.classList.add("active");

  // Update forms
  document.querySelectorAll(".form").forEach((form) => {
    form.classList.remove("active");
  });
  document.getElementById(formType + "-form").classList.add("active");
}

// Form submission (basic example)
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Login functionality would go here!");
  // Add your actual login logic/API call
});

document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const password = document.getElementById("register-password").value;
    const confirm = document.getElementById("register-confirm").value;

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration functionality would go here!");
    // Add your actual registration logic/API call
  });
