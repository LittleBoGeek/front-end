import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";
import { Link } from  'react-router-dom'
import LogIn from './LogIn';
import Home from './Home';

 function SignUp (){
    const {register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
      console.log(data)
    }
    return (
        <div className="container">
        <header> 
                <h1> The Salty Hacker </h1>
    </header>
    <nav>
        <ul>
            <Link to="/home"> <li> Home  </li> </Link>
            <Link to="/login"> <li> Log in</li> </Link>
            <Link to="/signup"> <li> Sign up</li> </Link>

        </ul>
    </nav>
        
      <div style={{display:"flex", justifyContent:"center"}}>
        <h1 style={{position:"absolute",paddingBottom:"70px", fontSize:"2.5rem"}}> Sign Up</h1>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          
    <input style={{ width:"120%", height:"30px",marginTop:"45%"}} type="text" placeholder="Email" name="email" ref={register({required:"Email is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})} />
    {errors.email && <p> {errors.email.message}</p>}
  
    <input style={{ width:"120%", height:"30px",marginTop:"10%" }}  type="password" placeholder="Password" name="password"   ref={register({required:"Email is a required field", minLength:{value:5, message:"Must be at least 5 characters"}})}/>
   {/* <Link to="/login"><h6> Already have an account? Click here to log in.</h6> </Link>  */}
  
    {errors.password && <p> {errors.password.message}</p>}
  <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>  <input type="submit" /></div>
       </form>
    </div>
      </div>
    )
  }

  export default SignUp