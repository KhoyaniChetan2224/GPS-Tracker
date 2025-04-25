import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://i.pinimg.com/736x/eb/64/c1/eb64c1059ca314abd671badb7c0f8f10.jpg)] h-screen flex justify-between flex-col w-full bg-red-400'>
        {/* https://images.unsplash.com/photo-1539038501956-e6ec02c504ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
            <img className='w-[4.6rem] mt-5 ml-8' src="https://png.pngtree.com/png-clipart/20231203/original/pngtree-gps-black-glossy-internet-icon-gps-icon-photo-png-image_13757927.png"></img>
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-[1.5rem] font-bold'>Get Started with GPS-Tracker</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>  
        </div>
    </div>
  )
}

export default Start