const Task = ({ task, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <div className='item'>
                <h3>{task.referencia}</h3>
                <p>{task.codigo}</p>
            </div>
            <div className='cantidad'>
                <p>{task.cantidad}</p>
            </div>
        </div>
    )
}

export default Task
