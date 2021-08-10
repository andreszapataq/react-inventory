const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.referencia}
            </h3>
            <div className='info'>
                <p>{task.codigo}</p>
                <p>{task.cantidad}</p>
            </div>
        </div>
    )
}

export default Task
