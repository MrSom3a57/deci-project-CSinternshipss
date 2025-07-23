window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("csintern-user"));

  if (!user) {
    alert("You're not logged in. Please log in first.");
    window.location.href = "login.html";
    return;
  }

  document.getElementById("profile-name").textContent = user.name;
  document.getElementById("profile-email").textContent = user.email;
  document.getElementById("profile-age").textContent = user.age;
  
  // These can be updated later to support real user progress
  document.getElementById("profile-track").textContent = user.track || "Web Development";
  document.getElementById("profile-progress").textContent = "0%";
  document.getElementById("profile-achievements").textContent = "None yet";
});

document.getElementById("logout-btn").addEventListener("click", () => {
  window.location.href = "splash.html";
});
