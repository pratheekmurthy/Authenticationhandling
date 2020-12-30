import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import swal from 'sweetalert'
import './style/login.css'


const Login =(props) =>{
    const {handelogin} = props
    const [login,setLogin] = useState(false)
    const [email,setemail] =useState("")
    const [password,setPassword] = useState("")
    const [formErrors,setFormErrors] =useState({})
    const errors ={}

    
    const formSubmit=(data)=>{
       
        axios.post("http://dct-user-auth.herokuapp.com/users/login",data)
        .then((response)=>{
            const result = response.data;
            localStorage.setItem("token",result.token)
            handelogin(result.token);
            setLogin(true)
            swal("success!", "You are logged in!", "success")
            
        })
        .catch((err)=>{
            console.log(err.message);
        })

    }

    
    const handleCancel =(e)=>{
        window.location.reload()
    }
    
    const runvalidations =()=>{
        
        if(email.trim().length === 0){
            errors.email = 'email cannot be blank'
        }
        if(password.trim().length === 0){
            errors.password = "password Cannot be blank"
        }
    }

    const handleEmail =(e)=> setemail(e.target.value)
    const handlepassword =(e) => setPassword(e.target.value)

    const handleSubmit=(e)=>{
            e.preventDefault()
            runvalidations()
    
            if(Object.keys(errors).length === 0) {
                setFormErrors({})
                const formData = {
                email:email,
                password : password
            }
            formSubmit(formData)
            // console.log(formData)
            setemail("")
            setPassword("")
            } else {
                    // console.log('form errors', errors)
                    setFormErrors(errors)
                    }

    }
    
                


    return (<div className="form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" onChange={handleEmail}/><br/>{formErrors.email && <span> { formErrors.email } </span>}<br/>
            <input type="password" placeholder="password" onChange={handlepassword}/><br/>{formErrors.password && <span> { formErrors.password } </span>}<br/>
            <input type="submit" value="Login" className="submit"/><button className="cancel" onClick={handleCancel}>Cancel</button>
        </form>
        {login && <Redirect to="/"/>}
    </div>)
}

export default Login