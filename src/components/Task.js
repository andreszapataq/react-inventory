const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>{task.producto}</h3>
            <div className='info'>
                <p>{task.codigo}</p>
                <p>{task.cantidad}</p>
            </div>
        </div>
    )
}

export default Task
