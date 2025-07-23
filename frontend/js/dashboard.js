async function fetchTasks() {
  const token = localStorage.getItem("token");
  const res = await fetch("http://localhost:5000/api/tasks", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const tasks = await res.json();
  console.log(tasks);

  const tbody = document.querySelector("#tasksTable tbody");
  tbody.innerHTML = "";

  tasks.forEach(task => {
    const row = `<tr>
      <td>${task.title}</td>
      <td>${new Date(task.deadline).toLocaleDateString()}</td>
      <td>${task.status}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}
