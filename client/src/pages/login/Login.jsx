import React from 'react'
import './Login.css'
export default function Login() {
    const [viewPassword,changeView]=useState("false");
    function changeView(){
        if(viewPassword===ture) viewPassword=false;
        else viewPassword=ture; 
        alert("view changed")
    }
    return (
    <div className="Login">
        <form className="studentLogin">
            <div className="userInvite" >welcome back!!</div>
            <input type="text" placeholder='Email address'/>
            <input type={viewPassword?'text':'password'} placeholder='password'/>
            <div className='viewPasswordButton' onClick={changeView} >viewPassword</div>
            <a>forget password?</a>
            <div className='loginButton'>Login</div>
            <div className="Google">continue with Google</div>
            <div className="signUp"> 
                <p></p>
                <a>Don't have an account? Sign Up</a>
            </div>
        </form>
        <div className="userLoginImage"></div>
    </div>
  )
}
