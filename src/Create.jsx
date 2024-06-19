import React, {useState} from 'react'

import axios from 'axios'

import "./App.css"


function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post("http://localhost:3001/add", {task: task} )
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
  return (
    <div>
        <input className='create_form input' type="text" name="" id="" placeholder='Enter Text' onChange={(e) => setTask(e.target.value)} />
        <button className='create_form button' type="button" onClick={handleAdd} >Add</button>
    </div>
  )
}

export default Create