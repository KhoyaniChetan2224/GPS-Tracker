import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userDate, setUserDate] = useState({})

  const {user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    
    const userData = {
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
    if(response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
      <img className='mb-10 w-[4.6rem]' src="https://png.pngtree.com/png-clipart/20231203/original/pngtree-gps-black-glossy-internet-icon-gps-icon-photo-png-image_13757927.png"></img>
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
            New Hear ?<Link to='/singup' className='text-blue-600'>Create new Account</Link>
          </p>

        </form>
     </div>

     <div>
      <Link
      to='/caption-logine'
      className='bg-green-500 text-white flex items-center justify-center mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      >Sing in as Captaion</Link>
     </div>
    </div>
  )
}

export default UserLogin
