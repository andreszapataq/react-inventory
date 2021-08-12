import { useState, useEffect  } from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // FETCH TASKS
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/stock')
    const data = await res.json()

    return data
  }

  // FETCH TASK
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/stock/${id}`)
    const data = await res.json()

    return data
  }

  // ADD TASK
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/stock', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

    /* const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]) */
  }

  // DELETE ITEM
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/stock/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // TOOGLE REMINDER
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/stock/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <Router>
    <div className="App">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      <div className='container'>
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
          </>
        )} />
        <Route path='/about' component={About} />
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
