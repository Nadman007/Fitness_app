// Base URL for API
const API_BASE_URL = 'http://localhost:5001';

// Hide splash screen and show main content after 3 seconds
window.addEventListener("load", () => {
    setTimeout(() => {
        const splashScreen = document.getElementById("splashScreen");
        const mainContent = document.getElementById("mainContent");

        if (splashScreen) {
            splashScreen.style.display = "none";
        }
        if (mainContent) {
            mainContent.style.display = "block";
        }
    }, 3000);
});

// Navigate between screens
document.getElementById('goToLogin').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
});

let token = ''; // Store token globally

// Register
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const result = await response.json();

        if (response.status === 201) {
            document.getElementById('registerResult').textContent = result.message;
        } else {
            document.getElementById('registerResult').textContent = result.error || 'Registration failed.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('registerResult').textContent = 'Error registering. Please try again.';
    }
});

// Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const result = await response.json();

        if (response.ok) {
            token = result.token;
            localStorage.setItem('authToken', token);
            document.getElementById('loginResult').textContent = 'Login successful!';
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('dashboardSection').style.display = 'block';
        } else {
            document.getElementById('loginResult').textContent = result.error || 'Login failed.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loginResult').textContent = 'Error logging in. Please try again.';
    }
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    token = '';
    localStorage.removeItem('authToken');
    document.getElementById('dashboardSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
});

// Log Workout
document.getElementById('workoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const workoutType = document.getElementById('workoutType').value;
    const workoutDuration = document.getElementById('workoutDuration').value;

    try {
        const response = await fetch(`${API_BASE_URL}/workouts/log`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ type: workoutType, duration: workoutDuration })
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('workoutResult').textContent = result.message || 'Workout logged successfully!';
        } else {
            document.getElementById('workoutResult').textContent = result.error || 'Failed to log workout.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('workoutResult').textContent = 'Error logging workout. Please try again.';
    }
});
