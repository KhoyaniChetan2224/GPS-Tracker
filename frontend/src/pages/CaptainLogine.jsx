import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainLogine = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }

    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
      <img className='w-16 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYntsqDA7V-faZ_HWjtTHIFfXnopTUXwTdGk7K2FeCWcCFhvNqok_VrnLp6nwJWiuWGS4&usqp=CAU"></img>
        <form onSubmit={(e) =>
          submitHandler(e)
        }>
        
          <h3 className='text-lg font-medium mb-2'>What`s youer email</h3>
          <input
          required 
          value={email}
          onChange={(e) => { 
            setEmail(e.target.value);
          }}
          className='bg-(#eeeeee) mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type='email' 
          placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input 
          required          
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }} 
          className='bg-(#eeeeee) mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          type='Password' 
          placeholder='Password'
          />

          <button
          className='bg-black text-white mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          >Login</button>

          <p className='text-center'>
            Jooin a fleet ?<Link to='/CaptainSingup' className='text-blue-600'>Register as a Caption</Link>
          </p>

        </form>
     </div>

     <div>
      <Link
      to='/Login'
      className='bg-[#d5622d] text-white flex items-center justify-center mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      >Sing in as User</Link>
     </div>
    </div>
  )
}

export default CaptainLogine
