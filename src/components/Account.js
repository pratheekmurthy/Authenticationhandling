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
        <div class="card">
  <div class="card-header">
    Account Details
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
        <table>
            <tr>
                <td><p class="fw-bold">Username :</p></td>
                <td><p class="fst-normal">{data.username}</p></td>
            </tr>
            <tr>
                <td><p>email : </p></td>
                <td><p>{data.email}</p></td>
            </tr>
            <tr>
                <td><p>join date :</p></td>
                <td><p>{data.createdAt}</p></td>
            </tr>
        </table>
    </blockquote>
  </div>
</div>
        
        
    </div>)
}

export default Account