
import React, {useState,useEffect} from "react";


const Todo = () =>{ 
    const apiUrl = 'https://playground.4geeks.com/todo'
    const [user, setUser] =  useState('karen12')
    const [input,setInput] = useState("")
    const [tasks,setTasks] = useState([])

    async function  getTasks(){
       const response = await fetch(`${apiUrl}/users/${user}`)
       console.log(response)
       const data = await response.json()
       if (response.ok){
        console.log(data)
        setTasks(data.todos) 
        return true
       }  
       console.log(data)   
       setTasks(false)
       return false 
    }
    async function  createUser(){
        const response = await fetch(`${apiUrl}/users/${user}`, {method: 'POST'})
        console.log(response)
        const data = await response.json()
        if (response.ok){
         console.log(data)  
         return true
        }  
        console.log(data)   
        return false 
     }
     async function  createTask(task){
        const response = await fetch(`${apiUrl}/todos/${user}`, {
            method: 'POST',
            body: JSON.stringify({
                "label": task,
                "is_done": false
              }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        const data = await response.json()
        if (response.ok){
         console.log(data)
         setInput('')
         getTasks()  
         return true
        }  
        console.log(data)   
        return false 
     }
     async function  deleteTask(id){
        const response = await fetch(`${apiUrl}/todos/${id}`, {method: 'DELETE'})
        console.log(response)
        const data = await response
        if (response.ok){
        console.log(data)
         getTasks()  
         return true
        }  
        console.log(data)   
        return false 
     }
    
/*
    function createTask(){
        const requestOptions = {
            method: 'POST',
            headers:{ ' Content-Type' : 'application/json' },
            body: JSON.stringify([{
                "label": input,
                "is_done": false
              }])
        }
    }
    
    fetch('https://playground.4geeks.com/todo/todos/karen12' , requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data)) 


    function deteleTask(){
        const requestOptions = {
            method: 'delete',
            headers:{ ' Content-Type' : 'application/json' },
            body: JSON.stringify([{
                "label": input,
                "is_done": false
              }])
        }
    }
    
    fetch('https://playground.4geeks.com/todo/todos/karen12' , requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data)) */

    
    

    useEffect(()=>{
        createUser()
        getTasks()
        
    },[])
    
    

    return(
        <div className="border w-25 mx-auto my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="text-center">
        <h1 className="text-center text-secondary">TODOS</h1>
        <input className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Whats to be done" onKeyDown={(e)=> {
            if(e.key == 'Enter'){
              createTask(input)  
            }
        }}/>
        {tasks && Array.isArray(tasks) && tasks.map((task) => <div className="d-flex justify-content-between list mx-4 borde shadow-lg p-3 mb-1 bg-body-tertiary roundedr" key={task.id}><p className="mx-2"> {task.label}</p> <span className="deleteIcon mx-3 fz-1" onClick={()=>deleteTask(task.id)} role="button">x</span></div>)}
        {tasks == false && <div className="d-flex justify-content-between list mx-4 borde shadow-lg p-3 mb-1 bg-body-tertiary roundedr"><p className="mx-2">No hay tareas</p></div>}
        <p className="">{tasks.length}item left</p>
        
        </div>        
    </div>


    )
    
}




export default Todo 


 
/*

function createUser(){
    const requestOptions = {
        method: 'POST',
        headers:{ ' Content-Type' : 'application/json' },
        body: JSON.stringify([])
    }
}

fetch('https://playground.4geeks.com/todo/users/karen12' , requestOptions)
.then((response) => response.json())
.then((data) => console.log(data)) */

