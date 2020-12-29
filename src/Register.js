import React,{useState} from 'react'
import axios from 'axios'
import {Link, BrowserRouter,Route,Redirect} from 'react-router-dom'
import Form from './Form'


const Register =(props)=>{
    const [registered,setregistered] = useState(false)

    const formSubmit=(data) =>{
        axios.post("http://dct-user-auth.herokuapp.com/users/register",data)
        .then((response)=>{
            const result = response.data;
            setregistered(true)
            
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

   
    



    return (<div>
        <Form formSubmit={formSubmit}/>
    </div>)
}

export default Register