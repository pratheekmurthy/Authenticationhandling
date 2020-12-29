import React from 'react'
import {useState,useEffect} from 'react'
import validator from 'validator'


const Form=(props)=>{
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [formErrors,setFormErrors] =useState({})
    const errors ={}
    
    const handleEmail =(e)=> setEmail(e.target.value)
    const handleName =(e) => setUsername(e.target.value)
    const handlePassword =(e) => setPassword(e.target.value)
    // const handleCancel =(e)=> window.reload()

    const runValidations = () => {
        //name
        if(username.trim().length === 0) {
            errors.name = 'name cannot be blank'
        }
        //email
        if(email.trim().length === 0) {
            errors.email = 'email cannot be blank'
        } else if(!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }
        if(password.trim().length === 0){
            errors.password = "password Cannot be blank"
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        runValidations()

        if(Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
            username:username ,
            email:email,
            password : password
        }
        // formSubmit(formData) 
        console.log(formData);
        setUsername("")
        setEmail("")
        setPassword("")
        } else {
                console.log('form errors', errors)
                setFormErrors(errors)
                }
    }
    
    return (<div>
        <h2>Register With Us</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter username" onChange={handleName}/><br/>{formErrors.name && <span> { formErrors.name } </span>}<br/>
        <input type="email" placeholder="Enter email"onChange={handleEmail}/><br/>{formErrors.email && <span> { formErrors.email } </span>}<br/>
        <input type="password" placeholder="Enter password" onChange={handlePassword}/><br/>{formErrors.password && <span> { formErrors.password } </span>}<br/>
        <input type="submit" value="Register"/><button >Cancel</button>
        </form>
        </div>)
}

export default Form