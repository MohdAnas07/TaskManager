import React, { useHistory, useEffect, useState } from 'react'
import './TaskList.css'
import useFetch from '../../useFetch'

const ListItem = ({ task }) => {

    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [assignUser, setAssignUser] = useState('Anas');

    const { data, error, isPending } = useFetch('http://localhost:8000/tasks/' + task.id)

    const handleDelete = () => {
        fetch('http://localhost:8000/tasks/' + data.id, {
            method: 'DELETE'
        }).then(() => {
            console.log("task deleted");

        })
    }

    const handleEdit = () => {
        console.log(task.id);
        setDesc("bhai apna")
        // task.id.setDesc("munish")
    }


    return (
        <div className='list'>
            <div className='listItem'>
                <p>{task.desc}</p>
                <hr />
                <p>{task.assignUser}</p>
                <p>{task.date}</p>
                <p>{task.time}</p>
            </div>
            <div className='edit-delete' >
                <i class="fa fa-pencil-square fa-lg" aria-hidden="true" onClick={handleEdit}></i>
                <button className='delete-btn' onClick={handleDelete}>delete</button>
            </div>
        </div>
    )
}


export default ListItem
