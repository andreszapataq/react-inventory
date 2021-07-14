import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      codigo: 'AT678FD',
      producto: 'DBM Putty 2.50 CC',
      cantidad: 5,
      reminder: true
  },
  {
      id: 2,
      codigo: 'AT679FD',
      producto: 'DBM Putty 5.00 CC',
      cantidad: 2,
      reminder: true
  },
  {
      id: 3,
      codigo: 'AT680FD',
      producto: 'DBM Putty 10.0 CC',
      cantidad: 7,
      reminder: false
  }

    /* {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    } */
  ])

  // GITHUB COPILOT TEST

  /* function lastItemInArray(arr) {
    return arr[arr.length - 1]
  }

  let list = [1, 3, 8, 5, 7, 2];

  let result = lastItemInArray(list);

  console.log(result); */

  // END GITHUB COPILOT TEST

  // DELETE ITEM
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // TOOGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
    </div>
  );
}

export default App;
