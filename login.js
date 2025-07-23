document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  this.textContent = type === "password" ? "👁️" : "🙈";
});

// Example fake login logic
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email && password.length >= 6 && email.includes("@")) {
    alert("Logged in successfully!");
    window.location.href = "home.html"; // redirect to homepage
  } else {
    alert("Invalid email or password.");
  }
});
