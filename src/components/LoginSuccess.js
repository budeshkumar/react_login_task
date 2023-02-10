import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginTimeExp from './LoginTimeExp';

const LoginSuccess = () => {
    let navigate = useNavigate();
    const [count, setCount] = useState(5);
      
    const timerId = useRef()
    useEffect(()=>{
        timerId.current =  setInterval(()=>{
           setCount(prev => prev-1)


        
            
        },60000)
        return ()=> clearInterval(timerId.current)
    },[])

    useEffect(()=>{
        
        if(count<=0) {
            clearInterval(timerId.current)
           
        }
    },[count])
    
   


    

if (count <= 0)
    return(
        <LoginTimeExp />
        )
    return (
        <div>
            

            <h1>Welcome To The Lab</h1>
            <h1 style = {{color:'red'}}>{count} Minutes Left <span><button onClick={() => navigate("/")} className="btn">Exit Now</button></span></h1>
            <img src='https://miro.medium.com/max/938/0*qEmXNzrZ9frR6qck.jpg' 
                alt=''
            />
        </div>
    )
}

export default LoginSuccess;
