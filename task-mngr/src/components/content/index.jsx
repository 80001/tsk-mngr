import { useEffect, useRef, useState } from 'react'
import Task from '../task'
import './styles.scss'
import CreateTask from '../modal/create'
import { GetOnlineTasks } from '../../utils/firebase'
import SortTask from '../modal/sort'

const Tasks = () => {
    //tasks
    const posts = GetOnlineTasks()
    const [sortedPosts, setSortedPosts] = useState([])
    //modals
    const [create, setCreate] = useState(false)
    const [sortedTitle, setSortedTitle] = useState(false)
    const [sortedStatus, setSortedStatus] = useState(false)
    const [sortedPriority, setSortedPriority] = useState(false)
    const [sortedCategory, setSortedCategory] = useState(false)
    const [lastSort, setLastSort] = useState(null)
    const [arrow, setArrow] = useState(2)
    const [arrowFor, setArrowFor] = useState('all')
    const arrows = ['↑', '↓', '↕']

    useEffect(() => {
        if (lastSort) {
            const { sortBy, sortTo } = lastSort
            sortTasks(sortBy, sortTo)
        } else {
            setSortedPosts([...posts])
        }
    }, [posts])
    const sortTasks = (sortBy, sortTo = 0) => {
        const postsCopy = [...posts];
        setLastSort({ sortBy, sortTo })
        setArrow(sortTo)
        setArrowFor(sortBy)
        if (sortBy === 'title') {
            console.log('title');
            postsCopy.sort((a, b) => {
                return sortTo === 1 ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
            });
        } else if (sortBy === 'status') {
            console.log('status');
            postsCopy.sort((a, b) => {
                return sortTo === 1 ? b.status - a.status : a.status - b.status;
            });
        } else if (sortBy === 'priority') {
            const priorityOrder = ['▲ High', '◄ Medium', '▼ Low'];
            console.log('priority');
            postsCopy.sort((a, b) => {
                const priorityA = priorityOrder.indexOf(a.priority);
                const priorityB = priorityOrder.indexOf(b.priority);
                return sortTo === 1 ? priorityA - priorityB : priorityB - priorityA;
            });
        } else if (sortBy === 'category') {
            console.log('category');
            postsCopy.sort((a, b) => {
                return sortTo === 1 ? a.category.localeCompare(b.category) : b.category.localeCompare(a.category)
            });
        } else {
            console.log('else')
            setSortedPosts([...posts.sort((a, b) => a.date - b.date)])
            setArrow(2)
        }
        setSortedPosts(postsCopy);
        console.log(sortedPosts);
    };

    return (
        <>
            <div className='content'>
                <div className="content__container">
                    <div className="content__top">
                        <h1 className="content__title">Tasks</h1>
                        <button className="content__button-add" onClick={() => setCreate(!create)}>+ Task</button>
                    </div>
                    <div className="tasks">
                        <div className="tasks__titles">
                            <div className='tasks__title'>
                                <button onClick={() => setSortedTitle(true)}>Title {arrowFor === 'title' ? arrows[arrow] : arrows[2]}</button>
                                {sortedTitle && <SortTask setSorted={setSortedTitle} sort={'title'} sortTasks={sortTasks} />}
                            </div>
                            <div className='tasks__title'>
                                <button onClick={() => setSortedStatus(true)}>Status  {arrowFor === 'status' ? arrows[arrow] : arrows[2]}</button>
                                {sortedStatus && <SortTask setSorted={setSortedStatus} sort={'status'} sortTasks={sortTasks} />}
                            </div>
                            <div className='tasks__title'>
                                <button onClick={() => setSortedPriority(true)}>Priority  {arrowFor === 'priority' ? arrows[arrow] : arrows[2]}</button>
                                {sortedPriority && <SortTask setSorted={setSortedPriority} sort={'priority'} sortTasks={sortTasks} />}
                            </div>
                            <div className='tasks__title'>
                                <button onClick={() => setSortedCategory(true)}>Category  {arrowFor === 'category' ? arrows[arrow] : arrows[2]}</button>
                                {sortedCategory && <SortTask setSorted={setSortedCategory} sort={'category'} sortTasks={sortTasks} />}
                            </div>
                            <div className='tasks__title'>
                            </div>
                        </div>
                        {sortedPosts.map(task => (
                            <Task key={task.id} task={task} />
                        ))}
                    </div>
                </div>
            </div>
            {create && <CreateTask setCreate={setCreate} />}
        </>
    )
}

export default Tasks