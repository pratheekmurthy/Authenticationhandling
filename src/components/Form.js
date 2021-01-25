import React from 'react'
import {useState,useEffect} from 'react'
import validator from 'validator'
import '../style/register.css'


const Form=(props)=>{
    const {formSubmit} = props
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [formErrors,setFormErrors] =useState({})
    const errors ={}
    
    const handleEmail =(e)=> setEmail(e.target.value)
    const handleName =(e) => setUsername(e.target.value)
    const handlePassword =(e) => setPassword(e.target.value)
    // const handleCancel =(e)=> window.reload()

    const handleCancel =(e)=>{
        window.location.reload()
    }

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
        formSubmit(formData) 
        // console.log(formData);
        setUsername("")
        setEmail("")
        setPassword("")
        } else {
                console.log('form errors', errors)
                setFormErrors(errors)
                }
    }
    
    return (<div className="form">
        <h2 class="fs-2"> Register With Us</h2>
        <form onSubmit={handleSubmit}>
        <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">@</span>
  <input type="text" class="form-control" placeholder="Enter your User Name" aria-label="Username" aria-describedby="addon-wrapping" onChange={handleName} /></div>{formErrors.name && <span className="font"> { formErrors.name } </span>}<br/>
  <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleEmail}/>
  <span class="input-group-text" id="basic-addon2">@example.com</span></div><br/>{formErrors.email && <span className="font"> { formErrors.email } </span>}
  <div class="input-group mb-3">
  <input type="password" class="form-control" placeholder="Enter Password" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handlePassword}/>
</div>  {formErrors.password && <span className="font"> { formErrors.password } </span>}
        <input type="submit" value="Register" class="btn btn-success"/><button class="btn btn-danger" onClick={handleCancel}>Cancel</button>
        </form>
        </div>)
}

export default Form