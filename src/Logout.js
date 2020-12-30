import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Logout =(props)=>{
    const {handelogout} = props
    const [token,setToken] = useState("")
    useEffect(()=>{
        const token=localStorage.getItem("token")
        setToken(token)

        axios.delete("http://dct-user-auth.herokuapp.com/users/logout", { headers : { 'x-auth' : token}})
        .then((response)=>{
            const result = response.data;
            console.log(result)
            setToken("")
            handelogout()
            localStorage.clear()
            
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[])
   
    
    return (<div>
        { !token ? <Redirect to="/" /> : <Redirect to="/logout"/>}

    </div>)
}

export default Logout