import React from 'react'
import axios from 'axios'
import Form from './Form'


const Register =(props)=>{

    const formSubmit=(data) =>{
        axios.post("http://dct-user-auth.herokuapp.com/users/register",data)
        .then((response)=>{
            const result = response.data;
            console.log(result); 
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