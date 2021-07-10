import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    {
      id: 1,
      codigo: 'AT678FD',
      producto: 'DBM Putty 2.50 CC',
      cantidad: 5
  },
  {
      id: 2,
      codigo: 'AT679FD',
      producto: 'DBM Putty 5.00 CC',
      cantidad: 2
  },
  {
      id: 3,
      codigo: 'AT680FD',
      producto: 'DBM Putty 10.0 CC',
      cantidad: 7
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
