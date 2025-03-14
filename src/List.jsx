import React, { useEffect, useState } from 'react'
import "./list.css"

export default function List() {
  const [task ,setTask] = useState([])
    function add(){
      const newTask = document.getElementById("textInput").value.trim();
    if (newTask) {
      setTask([...task, newTask]); // Add new task to the list
      document.getElementById("textInput").value = ""; // Clear input field
    }
    }
    function onDelete(index){
      setTask(task.filter((_, i) => i !== index))
    }
    function up(){

    }
    function down(){

    }

  return (
    <div>
        <h1>To-Do-List</h1>
        <div>
            <input type='text' id='textInput' className='textInput' placeholder='Enter new task'/>
            <button onClick={add} className='addButton'>Add</button>
        </div>
        <div>
        {task.map((task, index) => (
          <div key={index} className="taskItem">
            <p className="paragraph">{task}</p>
            <button onClick={() => onDelete(index)} className="deleteButton">Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
