import React,{useState} from 'react'

const Register = () => {
    const[userData,setUserData]=useState({
            email:'',
            userName:"",
            dob:'',
            password:"",
            cc_password:""
        })
        const setUserEmail=(e)=>{
            let copy={...userData}
            copy.email=e.target.value
            setUserData(copy)
        }
        const setUserName=(e)=>{
            let copy={...userData}
            copy.userName=e.target.value
            setUserData(copy)
        }
        
        const setDOB=(e)=>{
            let copy={...userData}
            copy.dob=e.target.value
            setUserData(copy)
        }
        const setPassword=(e)=>{
            let copy={...userData}
            copy.password=e.target.value
            setUserData(copy)
        }
        const setC_password=(e)=>{
            let copy={...userData}
            copy.cc_password=e.target.value
            setUserData(copy)
        }
        const handleData=()=>{
          console.log(userData)
        }
  
  return (
    <>
      <div>
        <input style={{paddingTop:5,paddingBottom:5,paddingLeft:40,paddingRight:20,margin:'auto',marginTop:19,textAlign:'left'}} onChange={setUserEmail} type='email' placeholder='Email'></input>
        <input style={{paddingTop:5,paddingBottom:5,paddingLeft:40,paddingRight:20,margin:'auto',marginTop:19,textAlign:'left'}} onChange={setUserName} type='text' placeholder='Username'></input>
        <input style={{paddingTop:5,paddingBottom:5,paddingLeft:60,paddingRight:50,margin:'auto',marginTop:19,textAlign:'left'}} onChange={setDOB} type='date' ></input>
        <input style={{paddingTop:5,paddingBottom:5,paddingLeft:40,paddingRight:20,margin:'auto',marginTop:19,textAlign:'left'}} onChange={setPassword} type='password' placeholder='password'></input>
        <input style={{paddingTop:5,paddingBottom:5,paddingLeft:40,paddingRight:20,margin:'auto',marginTop:19,textAlign:'left'}}onChange={setC_password} type='password' placeholder='confirm password'></input>
        <button style={{padding:8,paddingLeft:10,margin:'auto',paddingLeft:20,paddingRight:20,marginTop:10}} onClick={handleData}>Sign up</button>
      </div>
    </>
  )
}

export default Register