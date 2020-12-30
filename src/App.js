import React,{useState,useEffect, Component} from 'react'
import {Link, BrowserRouter,Route,Redirect} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Account from './Account'
import Logout from './Logout'




const App=(props)=>{
    const [token,setToken] = useState("")
    useEffect(()=>{
        const token=localStorage.getItem("token")
        setToken(token)
    },[token])

    const PrivateRoute =({component :Component,path,...rest})=>{
        return <Route path={path} render={(props)=>{
            if(token){
                return <Component {...props}/>
            }
            return <Redirect to="/login"/>

        }} />
    }
    
            
    
    
    return (<div> 
        <BrowserRouter>
        <Link to="/">Home</Link>|{token ?(<Link to="/account">Account</Link>) : (<Link to="/register">register</Link>) } | {token ?(<Link to="/logout">Logout</Link>) : (<Link to="/login">Login</Link>) }
        <Route path="/" component={Home} exact={true}/>
        <Route path="/register" component={Register} exact={true}/>
        <Route path="/login" component={Login} exact={true}/>
        {/* <Route path ="/account" component={Account} exact={true}/> */}
        <Route path="/logout" component={Logout} exact={true}/>
        <PrivateRoute path="/account" component={Account}/>
       
        </BrowserRouter>
    </div>)
}


export default App