import React, { useState,useEffect } from 'react'


const Login =(props) =>{
    const [email,setemail] =useState("")
    const [password,setPassword] = useState("")
    const [formErrors,setFormErrors] =useState({})
    const errors ={}

    const runvalidations =()=>{
        if(email.trim().length === 0){
            errors.email = 'email cannot be blank'
        }
        if(password.trim().length === 0){
            errors.password = "password Cannot be blank"
        }
        console.log(errors.email,errors.password)
    }

    const handleEmail =(e)=> setemail(e.target.value)
    const handlepassword =(e) => setPassword(e.target.value)

    const handleSubmit=(e)=>{
        
        console.log("i am here")
            e.preventDefault()
            runvalidations()
    
            if(Object.keys(errors).length === 0) {
                setFormErrors({})
                const formData = {
                email:email,
                password : password
            }
            console.log(formData);
            setemail("")
            setPassword("")
            } else {
                    console.log('form errors', errors)
                    setFormErrors(errors)
                    }

    }
    
                


    return (<div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" onChange={handleEmail}/><br/>{formErrors.email && <span> { formErrors.email } </span>}<br/>
            <input type="password" placeholder="password" onChange={handlepassword}/><br/>{formErrors.password && <span> { formErrors.password } </span>}<br/>
            <input type="submit" value="Login"/><button>Cancel</button>
        </form>
    </div>)
}

export default Login