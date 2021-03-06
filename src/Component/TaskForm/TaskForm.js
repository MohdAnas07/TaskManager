import React, { useState, useEffect } from 'react'
import { Animated } from "react-animated-css";
import './TaskForm.css'
import TaskList from '../TaskList/TaskList'
import useFetch from '../../useFetch';

const TaskForm = () => {
    const [countTask, setCountTask] = useState(0)
    const [desc, setDesc] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [assignUser, setAssignUser] = useState('Anas')
    // const [isPending, setIsPending] = useState(false)
    const [isShow, setIsShow] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const taskData = { desc, date, time, assignUser }
        // setIsPending(true)
        console.log(taskData.length)

        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(taskData)
        }).then(() => {
            console.log('new task added');
            // setIsPending(false)
        })
    }

    const { data, IsPending, error } = useFetch('http://localhost:8000/tasks', TaskForm);

    const handleTask = () => {
        setDesc('')
        setDate('')
        setTime('')
        setAssignUser('Anas')
    }

    const taskToggle = () => {
        if (!isShow) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='task'>
                    <div className='task-bar'>
                        <p>TASKS - <span>{data?.length}</span></p>
                        {!isShow ? <i className=" fa fa-plus" aria-hidden="true" onClick={taskToggle}></i> : <i class="fa fa-window-minimize" aria-hidden="true" onClick={taskToggle}></i>}
                    </div>

                    <div style={{ display: isShow ? "block" : "none" }} className='task-form'>
                        <form onSubmit={handleSubmit} className='form' action="">
                            <div className="">
                                <label for="TaskDesc">Task Description</label>
                                <div>
                                    <input type="text"
                                        required
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                        className="" id="TaskDesc" placeholder="Enter a Task..." />
                                </div>
                            </div>
                            <div className='date-time'>
                                <div className="date">
                                    <p for="Date">Date</p>
                                    <div className='icon-contain'>
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                        <input type="date"
                                            required
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            id="Date" name="Date" />
                                    </div>
                                </div>
                                <div className="time">
                                    <p for="Time">Time</p>
                                    <div className="icon-contain time-icon">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                                        <select
                                            required
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)} className="select-op " id="Time">
                                            <option selected> Time</option>
                                            <option value='8:00AM'>8:00AM</option>
                                            <option value='9:00AM'>9:00AM</option>
                                            <option value='10:00AM'>10:00AM</option>
                                            <option value='11:00AM'>11:00AM</option>
                                            <option value='12:00PM'>12:00PM</option>
                                            <option value='1:00PM'>1:00PM</option>
                                            <option value='2:00PM'>2:00PM</option>
                                            <option value='3:00PM'>3:00PM</option>
                                            <option value='4:00PM'>4:00PM</option>
                                            <option value='5:00PM'>5:00PM</option>
                                            <option value='6:00PM'>6:00PM</option>
                                            <option value='7:00PM'>7:00PM</option>
                                            <option value='8:00PM'>8:00PM</option>
                                            <option value='9:00PM'>9:00PM</option>
                                            <option value='10:00PM'>10:00PM</option>
                                            <option value='11:00PM'>11:00PM</option>
                                            <option value='12:00AM'>12:00AM</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label for="TaskDesc">Assign User</label>
                                <select
                                    required
                                    value={assignUser}
                                    onChange={(e) => setAssignUser(e.target.value)} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option selected value='Anas'>Anas</option>
                                    <option value="Anas">Anas</option>
                                    <option value="Anshu">Anshu</option>
                                    <option value="mohd">mohd</option>
                                </select>
                            </div>
                            <div className='cancel-save-btn' >
                                <button className='btn delete-btn' onClick={handleTask}>cancel</button>
                                <button className='btn save-btn' onClick={() => setCountTask(countTask + 1)}>save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <TaskList />
        </div>
    )
}

export default TaskForm
