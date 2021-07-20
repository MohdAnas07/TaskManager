import React from 'react'
import './TaskList.css'
import ListItem from './ListItem';
import useFetch from '../../useFetch'

const TaskList = () => {

    const { data: tasks, isPending, error } = useFetch('http://localhost:8000/tasks')

    return (
        <div className='item'>
            {tasks && tasks.map(task => {
                return <ListItem task={task} />
            })
            }
        </div>
    )
}

export default TaskList
