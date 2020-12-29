import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Logout =(props)=>{
    const [token,setToken] = useState("")
    useEffect(()=>{
        const token=localStorage.getItem("token")
        setToken(token)

        axios.delete("http://dct-user-auth.herokuapp.com/users/logout", { headers : { 'x-auth' : token}})
        .then((response)=>{
            const result = response.data;
            console.log(result)
            localStorage.clear()
            
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[token])
   
    return (<div></div>)
}

export default Logout