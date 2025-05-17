export function Task({ task, completeTask, deleteTask }) {
  return (
    <div style={{ backgroundColor: task.completed ? "green" : "white" }}>
      <h1>{task.taskName}</h1>
      <button onClick={() => completeTask(task.id)}>Completed</button>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
