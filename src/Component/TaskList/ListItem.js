import React from 'react'
import './TaskList.css'

const ListItem = ({ task }) => {

    return (
        <div className='list'>
            <div className='listItem'>
                <p>{task.desc}</p>
                <p>{task.date}</p>
            </div>
            <i class="fa fa-pencil-square fa-lg" aria-hidden="true"></i>
        </div>
    )
}


export default ListItem
