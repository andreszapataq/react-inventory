import { FaSyringe } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.producto} <FaSyringe style={{ color: 'steelblue', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </h3>
            <div className='info'>
                <p>{task.text}</p>
                <p>{task.day}</p>
            </div>
        </div>
    )
}

export default Task
