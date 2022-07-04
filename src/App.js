import Task from "./Task";
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  let localTodos = JSON.parse(localStorage.getItem('localTodos')) || [];

  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState(localTodos);
  const [dateTime, setDateTime] = useState('');
  const [showTasks, setShowTasks] = useState(true);

  useEffect(() => {
    localStorage.setItem('localTodos', JSON.stringify(tasks));
  }, [tasks])
  

  const handleChange = (e)=>{
  setInput(e.target.value)
  }  

  const handleDateTime = (e)=>{
    setDateTime(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setTasks([...tasks, {
      todo:input,
      deadline:dateTime,
      isdone:false,
      id:uuidv4()
    }])
  }

  const handleIsdone = (taskId)=>{
     setTasks(tasks.map((task)=>{
      if (task.id === taskId){
        return {...task, isdone:!task.isdone};
      } else {
        return task;
      }}))}

  const handleDelete = (myId) => {
    setTasks(tasks.filter((task)=>task.id !== myId));
  }

  return (
    <main>
    <button onClick={()=>setShowTasks(!showTasks)}>{showTasks ? "Close Add Task Bar":"Show Add Task Bar"}</button>
    {showTasks && <article>
    <form action="" onSubmit={handleSubmit}>
    <input type="text" name="myinput" id="myinput" value={input} onChange={handleChange} placeholder="Add your task here.."/>
    <input type="text" name="dateTime" id="dateTime" value={dateTime} onChange={handleDateTime} placeholder="Add date time here.."/>

    <button>Add Task</button>
    </form>
    <ul>
    {tasks.map((task)=>
      <Task {...task} key={task.id} handleIsdone={handleIsdone} handleDelete={handleDelete} /> 
    )}
      
    </ul>
    </article>}
    </main>
  );
}

export default App;
