import React from 'react'
import { useContext,useState } from 'react';
import { LoginContext } from '../LoginContext/LoginContext';

function Login() {
    const [buttonState,setButtonState] = useState(true);
    const checkInput = ()=>{
        if(document.getElementById("username").value.length >=1 && document.getElementById("email").value.length >=1){
            setButtonState(false)
        }
        else{
            setButtonState(true)
        }
    }
    const {setUsername,setEmail,setShowProfile} = useContext(LoginContext);
  return (
    <div>
        <input id="username" placeholder="Enter Username" type="text" onChange={(e)=>{
              checkInput()
              setUsername(e.target.value)
          }
          }/>
          <input id="email" placeholder="Enter email id" type="email" onChange={(e)=>{
              checkInput()
              setEmail(e.target.value)
          }
          }/>
          <button disabled={buttonState} id="ADD" onClick={()=>{
            setShowProfile(true)
          }
          }>Profile Page</button>
    </div>
  )
}

export default Login