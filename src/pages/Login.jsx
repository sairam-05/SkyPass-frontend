import React,{useState} from 'react'
import Register from '../Components/Register'
import LoginDIV from '../Components/LoginDIV'

const Login = () => {
    const [isLogin,setIsLogin]=useState(true)
    // if (isLogin) return <LginDIV/>
    // else 
    // return <Register/>
    return < ><div style={{border:"1px solid blue",marginLeft:450,marginRight:450,paddingBottom:20,borderRadius:8}}>
        {isLogin && < LoginDIV/>}
        
        {!isLogin &&  <Register/>}
        
        <div>
            <p>{ isLogin ? "Don't have an account" : "Have an account"}</p>
            <button style={{padding:8,paddingLeft:10,margin:'auto',paddingLeft:20,paddingRight:20}} onClick={()=>{setIsLogin(!isLogin)}} >{ isLogin ? "register" : "Login"}</button>
        </div>
        </div>
    </>
}

export default Login