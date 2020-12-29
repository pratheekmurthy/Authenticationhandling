import React, { useState,useEffect } from 'react'


const Login =(props) =>{
    const [email,setemail] =useState("")
    const [password,setPassword] = useState("")

    const handleEmail =(e)=> setemail(e.target.value)
    const handlepassword =(e) => setPassword(e.target.value)

    return (<div>
        <h1>Login</h1>
        <form>
            <input type="email" placeholder="email" onChange={handleEmail}/><br/><br/>
            <input type="password" placeholder="password" onChange={handlepassword}/><br/><br/>
            <input type="submit" value="Login"/><button>Cancel</button>
        </form>
    </div>)
}

export default Login