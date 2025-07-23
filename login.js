document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  this.textContent = type === "password" ? "👁️" : "🙈";
});

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("csintern-user"));

  if (!storedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  if (storedUser.email === email && storedUser.password === password) {
    alert("Logged in successfully!");
    localStorage.setItem("csintern-loggedin", "true");
    window.location.href = "home.html";
  } else {
    alert("Invalid email or password.");
  }
});