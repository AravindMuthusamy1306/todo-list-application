import './App.css'
import {useState} from 'react'
function App() {
  const[todoList, setTodoList] = useState([])
  const[newTask, setNewTask] = useState("")
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    setTodoList([...todoList, task])
    setNewTask("")
  }
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }
  const completeTask = (id) =>{
    setTodoList(todoList.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
  }
  return(
      <div className="App">
        <div className="addTask">
          <input value={newTask} onChange={handleChange}/>
          <button onClick={addTask}> Add Task </button>
        </div>
        <div className="taskList">
          {
            todoList.map((task) =>{
              return(
            <div key={task.id} style={{backgroundColor : task.completed ? "green" : "none" }}>
              <h1>{task.taskName}</h1>   
              <button onClick= {() => completeTask(task.id)}> Completed </button>
              <button onClick={() => deleteTask(task.id)}> X </button>
            </div>
          )
            } )
          }
        </div>
      </div>
  );
}

export default App
