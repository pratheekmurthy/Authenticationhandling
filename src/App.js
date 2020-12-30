import React,{useState,useEffect, Component} from 'react'
import {Link, BrowserRouter,Route,Redirect,useHistory} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Account from './Account'
import Logout from './Logout'




const App=(props)=>{
    const [token,setToken] = useState("")
    const [isLogIn,setLogin]= useState(false)


    
    useEffect(()=>{
        const token=localStorage.getItem("token")
        setToken(token)
    },[])

    const handelogout =()=>{
        setToken("")
        setLogin(false)
    }

    const handelogin =(token)=>{
        setToken(token)
        setLogin(false)
    }

   

    const PrivateRoute =({component :Component,path,...rest})=>{
        return <Route path="/account" render={(props)=>{
            if(token){
                return <Account {...props}/>
                
            }
            return <Redirect to="/login"/>

        }} />
    }
    
            
    
    
    return (<div> 
        <BrowserRouter>
        <div className="nav">
        <Link to="/">Home</Link>|{token ?(<Link to="/account">Account</Link>) : (<Link to="/register">register</Link>) } | {token ?(<Link to="/logout">Logout</Link>) : (<Link to="/login">Login</Link>) }</div>
        {/* <Route path="/" exact render={()=>{ return <Home handelogout={handelogout} isLogIn={isLogIn}/>}}/> */}
        
        {/* <Route path="//" render={(props)=>(<Home {...props} token={token}/>)}/> */}
        <Route path="/" component={Home} exact={true}/>
        <Route path="/register" component={Register} exact={true}/>
        <Route path="/login" render={(props)=>(<Login {...props} handelogin={handelogin}/>)}/>
        {/* <Route path="/login" component={Login} exact={true}/> */}
        {/* <Route path ="/account" component={Account} exact={true}/> */}
        <Route path="/logout" render={(props)=>(<Logout {...props} handelogout={handelogout}/>)}/>
        {/* <Route path="/logout" component={Logout} exact={true}/> */}
        <PrivateRoute path="/account" component={Account}/>
       
        </BrowserRouter>
    </div>)
}


export default App