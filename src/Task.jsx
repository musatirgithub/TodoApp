import './Task.css';

const Task = ({todo, isdone, id, deadline, handleIsdone, handleDelete}) => {
  return (
    <section>
      <div className="task-date" style={{textDecoration: isdone ? "line-through": "none"}} onClick={()=>handleIsdone(id)}>
          <p className='task'>{isdone? "✔" : "❌"} {todo}</p>
          <p className='deadline'>{deadline}</p>
      </div>
        <div onClick={()=>handleDelete(id)}>🗑️</div> 
    </section>
  )
}

export default Task;