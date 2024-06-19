import React, {useState, useEffect} from 'react'
import Create from './Create';


function Home (){
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3001/get")
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])
    const handleEdit = (id) => {
        axios.put("http://localhost:3001/update/" + id)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }



  return (
    <div className='home'>
        <h2> Todo list </h2>
        <Create />
        {
            todos.length === 0 
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo => (
                <div className='task'>
                    <div className='checkbox' onClick={()=> handleEdit(todo._id)} >
                        <p> {todo.task} </p>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
            ))
        }
    </div>
  )  
}


export default Home