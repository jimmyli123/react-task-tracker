import Header from './Components/Header'
import Tasks from './Components/Tasks'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Math Exam',
        day: 'Feb 6th at 12:30pm',
        reminder: true,
    }
])
  return (
    <div className="container">
      <Header title='To-Do List'/>
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
