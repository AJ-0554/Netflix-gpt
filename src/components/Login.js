import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignInForm,setisSignInForm]=useState(true);
  const handleSignInForm=()=>{
    setisSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute w-full h-screen'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Netflix-bg-logo"/>
      </div>
      <form className='absolute my-36 p-12 w-3/12 bg-black mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {
        !isSignInForm&&<input type="text" placeholder='Name' className='bg-gray-600 p-2 my-4 w-full hover:shadow-white shadow-md hover:scale-105 duration-300'/>
      }
        <input type="text" placeholder='Email Address' className='bg-gray-600 p-2 my-4 w-full hover:shadow-white shadow-md hover:scale-105 duration-300'/>
        <input type="password" placeholder='Password' className='bg-gray-600 p-2 my-4 w-full hover:shadow-white shadow-md hover:scale-105 duration-300'/>
        <button className='p-4 my-6 bg-red-600 w-full rounded-lg hover:shadow-red-800 shadow-md hover:scale-105 duration-300'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='my-4 font-bold'>{isSignInForm?"New To Netflix? ":"Already User? " }<span onClick={handleSignInForm} className='cursor-pointer hover:border-b border-gray-400 font-bold'>{isSignInForm?"Sign Up":"Sign In Now"}</span></p>
      </form>
    </div>
  )
}

export default Login;