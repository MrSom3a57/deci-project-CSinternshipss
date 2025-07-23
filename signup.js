document.getElementById("togglePassword").addEventListener("click", function () {
  const password = document.getElementById("password");
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  this.textContent = type === "password" ? "👁️" : "🙈";
});

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const age = parseInt(document.getElementById("age").value);

  if (!name || !email || !password || !confirmPassword || !age) {
    alert("Please fill all required fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Save user data in localStorage
  const user = {
    name,
    email,
    password,
    age,
  };
  localStorage.setItem("csintern-user", JSON.stringify(user));

  alert("Account created successfully!");
  window.location.href = "home.html";
});