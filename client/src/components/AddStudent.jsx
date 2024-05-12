import React, { useState } from 'react'
import axios from 'axios'
import '../css/AddStudent.css'
import {useNavigate} from 'react-router-dom'



const AddStudent = () => {
    const [roll, setRoll] = useState('')
    const [username, setUsername] = useState('')
    const [grade, setGrade] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/student/register', { roll, username, password, grade })
            .then(res => {
                
                navigate('/login') // Always navigate to the books page after registration
                console.log(res)
            })
            .catch(err => console.error(err)) // Log any errors
    }
    


    return (
        <div className='add-page'>
            <div className="student-form-container">
            <form className="student-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-group">
                <label htmlFor="roll">Student ID number:</label>
                <input type="text" id="roll" name="roll"
                 onChange={(e) => setRoll(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="grade">Grade:</label>
                <input type="text" id="grade" name="grade"
                 onChange={(e) => setGrade(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="username">User Name:</label>
                <input type="text" id="username" name="username"
                 onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" 
                 onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit">Register</button>
            </form>
      </div>
      </div>
    )
}

export default AddStudent