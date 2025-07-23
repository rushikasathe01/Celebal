// ✅ Create a new task
async function createTask() {
  const title = document.getElementById('task-title').value;
  const description = document.getElementById('task-description').value;
  const deadline = document.getElementById('task-deadline').value;
  const category = document.getElementById('task-category').value;
  const assignee = document.getElementById('task-assignee').value;

  const data = { title, description, deadline, category, assignee };

  const res = await apiPost('/tasks/create', data);

  if (res._id) {
    alert('Task created successfully');
    fetchTasks(); // refresh list
  } else {
    alert('Error creating task: ' + res.message);
  }
}

// ✅ Fetch tasks
async function fetchTasks() {
  const tasks = await apiGet('/tasks');
  const listDiv = document.getElementById('tasks-list');
  listDiv.innerHTML = '';

  tasks.forEach(task => {
    const div = document.createElement('div');
    div.innerHTML = `
      <strong>${task.title}</strong> | ${task.status} <br/>
      ${task.description} | ${task.deadline.split('T')[0]}<br/>
      <button onclick="updateStatus('${task._id}', 'Completed')">Mark Complete</button>
      <hr/>
    `;
    listDiv.appendChild(div);
  });
}

// ✅ Update task status
async function updateStatus(taskId, status) {
  const res = await apiPut(`/tasks/${taskId}/status`, { status });
  alert('Task status updated');
  fetchTasks();
}

// Load tasks when page opens
fetchTasks();
