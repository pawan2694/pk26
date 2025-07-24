import React, { useState } from 'react'

const Login = (e) => {
  const[user, setuser]=useState("")
  const sumbitHandler=()=>{
        console.log('form submitted')
  }
  console.log(user)
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-red-600 p-4 space-y-2 rounded-md p-20'>
        <form onSubmit={sumbitHandler} className='flex flex-col items-center justify-center'>
          <input
            required
            className="border-2 mt-10 border-emerald-600 py-2 px-5 rounded-md"
            type='email'
            placeholder='Please enter your email'
             
            
          />
          <input
            required
            className=" mt-5 border-2 border-emerald-600 py-2 px-5 rounded-md"
            type='password'
            placeholder='Please enter your password'
            
          />
          <button onClick={sumbitHandler} className=" mt-7 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
