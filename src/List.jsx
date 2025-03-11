import React from 'react'
import "./list.css"

export default function List() {
    function add(){

    }
    function onDelete(){

    }
    function up(){

    }
    function down(){

    }

  return (
    <div>
        <div>
            <input type='text' className='textInput'/>
            <button className='addButton'>Add</button>
        </div>
        <div>
            <p className='paragraph'></p>
            <button className='deleteButton'>Delete</button>
            <button className='upButton'>⬆️</button>
            <button className='downButton'>⬇️</button>
        </div>
    </div>
  )
}
