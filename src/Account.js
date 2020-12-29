import React,{useState,useEffect} from 'react'
import axios from 'axios'


const Account =(props)=>{
    const [token,setToken] = useState("")
    const [data,setdata] = useState({})

    useEffect(()=>{
        const token=localStorage.getItem("token")
        setToken(token)

        axios.get("http://dct-user-auth.herokuapp.com/users/account", { headers : { 'x-auth' : token}})
        .then((response)=>{
            const result = response.data;
            setdata(result);
            
        })
        .catch((err)=>{
            console.log(err.message);
        })
    },[token])



    return (<div>
        <h2>User Auth</h2>
        <table>
            <tr>
                <td><h3>username</h3></td>
                <td><h3>{data.username}</h3></td>
            </tr>
            <tr>
                <td><h3>email</h3></td>
                <td><h3>{data.email}</h3></td>
            </tr>
            <tr>
                <td><h3>join date</h3></td>
                <td><h3>{data.createdAt}</h3></td>
            </tr>
        </table>
        
    </div>)
}

export default Account