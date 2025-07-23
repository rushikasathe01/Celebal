<<<<<<< HEAD
async function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await fetch('http://yourapiurl/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Store token if needed: localStorage.setItem('token', data.token);
            window.location.href = "dashboard.html";
        } else {
            alert(data.message || "Login failed");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
=======
const apiBase = "http://localhost:5000/api";

async function apiPost(endpoint, data) {
  const token = localStorage.getItem('token');
  const res = await fetch(apiBase + endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return res.json();
}

async function apiGet(endpoint) {
  const token = localStorage.getItem('token');
  const res = await fetch(apiBase + endpoint, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
}

async function apiPut(endpoint, data) {
  const token = localStorage.getItem('token');
  const res = await fetch(apiBase + endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return res.json();
>>>>>>> bbdb96d (commit)
}
