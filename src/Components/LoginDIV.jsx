import React, { useState } from 'react'

const LoginDIV = () => {
    const[userData,setUserData]=useState({
        userName:"",
        password:""
    })
    const setUserName=(e)=>{
        let copy={...userData}
        copy.userName=e.target.value
        setUserData(copy)
        

    }
    const setUserPassword=(e)=>{
        let copy={...userData}
        copy.userPassword=e.target.value
        setUserData(copy)
    }
    const handleLogin=()=>{
      console.log(userData)
    }
  return (
    <>
    <div style={{
      display:'flex',justifyContent:'center',flexDirection:'column',textAlign:'center',padding:30
    }} >
        <input style={{paddingTop:5,paddingBottom:5,paddingLeft:40,paddingRight:20,margin:'auto',marginTop:19,marginBottom:10,textAlign:'left'}} type="text" onChange={setUserName} placeholder='Enter Username'></input>
        <input style={{paddingTop:5,paddingBottom:5,textAlign:'left',paddingLeft:40,paddingRight:20,margin:'auto',marginTop:19,marginBottom:20,textAlign:'left'}} type='password' onChange={setUserPassword} placeholder='Enter password'></input>
        <button style={{padding:8,paddingLeft:10,margin:'auto',paddingLeft:20,paddingRight:20}} onClick={handleLogin}>Login</button>
    </div>
    </>
  )
}

export default LoginDIV