import { useState } from 'react'
import './styles.scss'
import EditTask from '../modal/edit'
import ChangeTask from '../modal/change'
import { updateTask } from '../../utils/firebase'

const Task = ({ task }) => {
    const { title, status, priority, category } = task
    const [edit, setEdit] = useState(false)
    const [change, setChange] = useState(false)

    const showEdit = () => {
        setEdit(true)
    }
    const handleStatus = () => {
        updateTask(task.id, { status: !status })
    }

    return (
        <div className='task'>
            <div className='task__col'>
                <h3 className="task__titles">{title}</h3>
            </div>
            <div className='task__col'>
                <input type="checkbox" className="task__titles" defaultChecked={status} onChange={handleStatus} /> <span>Todo</span>
            </div>
            <div className='task__col'>
                <h3 className="task__titles"> {priority}</h3>
            </div>
            <div className='task__col'>
                <h3 className="task__titles">{category}</h3>
            </div>
            <div className='task__col'>
                <button className="task__titles" onClick={showEdit}>•••</button>
                {edit && <EditTask setEdit={setEdit} setChange={setChange} edit={edit} task={task} />}
            </div>
            {change && <ChangeTask task={task} setChange={setChange} />}
        </div>
    )
}

export default Task