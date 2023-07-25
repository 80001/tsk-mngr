import React, { useEffect, useRef, useState } from 'react'
import { deleteTask, updateTask } from '../../utils/firebase';

const EditTask = ({ task, setEdit, setChange }) => {
    const modalRef = useRef()
    const [componentRendered, setComponentRendered] = useState(false);

    const showEdit = () => {
        setChange(true);
        setEdit(false);
    };
    const showDeleteTask = () => {
        const isConfirmed = window.confirm('Are you shure?');
        if (isConfirmed) {
            deleteTask(task.id);
        }
    };
    const changeStatus = (bool) => {
        updateTask(task.id, { status: bool })
    }
    const changePriority = (level) => {
        if (level === 'High') {
            updateTask(task.id, { priority: '▲ High' })
        } else if (level === 'Medium') {
            updateTask(task.id, { priority: '◄ Medium' })
        } else {
            updateTask(task.id, { priority: '▼ Low' })
        }
    }
    const changeCategory = (cat) => {
        if (cat === 'Work') {
            updateTask(task.id, { category: '⁜ Work' })
        } else if (cat === 'Home') {
            updateTask(task.id, { category: '※ Home' })
        } else {
            updateTask(task.id, { category: '⁂ Education' })
        }
    }
    const handleClick = () => {
        setEdit(false);
    };
    useEffect(() => {
        if (componentRendered) {
            window.addEventListener('click', handleClick);
        } else {
            setComponentRendered(true);
        }

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [componentRendered]);

    return (
        <>
            <div className='modal' id='modal' ref={modalRef}>
                <div className="modal-menu">
                    <div className='modal-menu__hover'>
                        <h3>Status +</h3>
                        <div className="hiden">
                            <span onClick={() => changeStatus(true)}>Complete</span>
                            <span onClick={() => changeStatus(false)}>Start</span>
                        </div>
                    </div>
                    <div className='modal-menu__hover'>
                        <h3>Priority +</h3>
                        <div className="hiden">
                            <span onClick={() => changePriority('High')}>▲High</span>
                            <span onClick={() => changePriority('Medium')}>◄Medium</span>
                            <span onClick={() => changePriority('Low')}>▼Low</span>
                        </div>
                    </div>
                    <div className='modal-menu__hover'>
                        <h3>Category +</h3>
                        <div className="hiden">
                            <span onClick={() => changeCategory('Work')}>Work</span>
                            <span onClick={() => changeCategory('Home')}>Home</span>
                            <span onClick={() => changeCategory('Education')}>Education</span>
                        </div>
                    </div>
                    <h3 onClick={showEdit}>Change</h3>
                    <h3 onClick={showDeleteTask}>Delete</h3>
                </div>
            </div>
        </>
    )
}

export default EditTask