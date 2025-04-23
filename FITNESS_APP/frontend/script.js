// Updated script.js with corrected user field mapping for registration/login

document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splashScreen");
  const main = document.getElementById("mainContent");
  const registerSection = document.getElementById("registerSection");
  const loginSection = document.getElementById("loginSection");
  const dashboardSection = document.getElementById("dashboardSection");
  const profileSection = document.getElementById("getToKnowSection");

  // Splash Screen
  setTimeout(() => {
    splash.classList.add("hidden");
    main.classList.remove("hidden");
    registerSection.classList.remove("hidden");
  }, 1500);

  // Navigation
  document.getElementById("goToLogin").addEventListener("click", () => {
    registerSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
  });

  document.getElementById("goToRegister").addEventListener("click", () => {
    loginSection.classList.add("hidden");
    registerSection.classList.remove("hidden");
  });

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("token");
    dashboardSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
  });

  // Register
  document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const height = document.getElementById("registerHeight").value;
    const weight = document.getElementById("registerWeight").value;
    const age = document.getElementById("registerAge").value;
    const gender = document.getElementById("registerGender").value;

    try {
      const res = await fetch("http://localhost:5001/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, height, weight, age, gender })
      });
      const data = await res.json();
      document.getElementById("registerResult").textContent = data.message || data.error;

      if (res.ok) {
        registerSection.classList.add("hidden");
        loginSection.classList.remove("hidden");
      }
    } catch (err) {
      document.getElementById("registerResult").textContent = "Registration failed.";
    }
  });

  // Login
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    try {
      const res = await fetch("http://localhost:5001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        loginSection.classList.add("hidden");
        dashboardSection.classList.remove("hidden");
      } else {
        document.getElementById("loginResult").textContent = data.error || "Login failed.";
      }
    } catch (err) {
      document.getElementById("loginResult").textContent = "Login error.";
    }
  });

  // Workout Logging
  document.getElementById("workoutForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const type = document.getElementById("workoutType").value;
    const duration = document.getElementById("workoutDuration").value;
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Unauthorized: Please login again.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/workouts/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ type, duration })
      });
      const data = await res.json();
      if (res.ok) {
        document.getElementById("workoutResult").innerHTML = `<div><strong>🏋️‍♂️ ${type}</strong><br>Duration: ${duration} min<br>Date: ${new Date().toLocaleString()}</div>`;
        dashboardSection.classList.add("hidden");
        profileSection.classList.remove("hidden");
      } else {
        alert(data.error || "Workout log failed.");
      }
    } catch (err) {
      alert("Workout log failed.");
    }
  });

  // Profile submission
  document.getElementById("profileForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Profile submitted successfully!");
    profileSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
  });

  // Toggle Password Icons
  const toggleRegister = document.getElementById("toggleRegister");
  const toggleLogin = document.getElementById("toggleLogin");

  if (toggleRegister) {
    toggleRegister.addEventListener("click", () => {
      const passwordInput = document.getElementById("registerPassword");
      passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });
  }

  if (toggleLogin) {
    toggleLogin.addEventListener("click", () => {
      const passwordInput = document.getElementById("loginPassword");
      passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });
  }
});
