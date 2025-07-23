async function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  console.log(data);

  if (res.ok) {
    alert("Login successful");
    localStorage.setItem("token", data.token); // store token
    window.location.href = "dashboard.html";   // navigate to dashboard
  } else {
    alert(data.message || "Login failed");
  }
}
