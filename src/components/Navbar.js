import React from 'react'

const Navbar =(props)=>{
    return (<div>
         <BrowserRouter>
        <div className="nav">
        <Link to="/">Home</Link>|{token ?(<Link to="/account">Account</Link>) : (<Link to="/register">register</Link>) } {token && <Link to="/mynotes"> |My notes</Link>}|{token ?(<Link to="/logout">Logout</Link>) : (<Link to="/login">Login</Link>) }</div>
       
        <Route path="/" component={Home} exact={true}/>
        <Route path="/register" component={Register} exact={true}/>
        <Route path="/login" render={(props)=>(<Login {...props} handelogin={handelogin}/>)}/>
        <Route path="/mynotes" component={Notes}/>
        <Route path="/logout" render={(props)=>(<Logout {...props} handelogout={handelogout}/>)}/>
       
        <PrivateRoute path="/account" component={Account}/>
       
        </BrowserRouter>
    </div>)
}

export default Navbar