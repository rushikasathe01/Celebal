async function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();

    if (res.ok) {
        alert('Registration successful!');
        window.location.href = 'login.html';
    } else {
        alert(data.message);
    }
<<<<<<< HEAD
    function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Example: basic validation
    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    // Example: call your login API here if needed
    // If login is successful, redirect to dashboard

    // For now, direct redirect (you can replace this with API login logic)
    window.location.href = "dashboard.html";
}

=======
>>>>>>> bbdb96d (commit)
}
