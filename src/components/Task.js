import { FaSyringe } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>
                {task.producto} <FaSyringe style={{ color: 'steelblue', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </h3>
            <div className='info'>
                <p>{task.codigo}</p>
                <p>{task.cantidad}</p>
            </div>
        </div>
    )
}

export default Task
