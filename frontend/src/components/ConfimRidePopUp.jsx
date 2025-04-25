import React, { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfimRidePopUp = (props) => {

    const [ otp, setOtp ] = useState('')
    const navigate = useNavigate()

    const submitHander = async (e) => {
        e.preventDefault()

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }


    }
    return (
        <div>
            <h5 onClick={() => {
                props.setRidePopupPanel(false)
            }} className="p-1 text-center w-[93%] absolute top-0"><i className="ri-arrow-down-wide-fill text-2xl text-gray-200 pt-14"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this Ride to Start</h3>
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover ' src="https://i.pinimg.com/736x/08/90/42/089042b9bf73fb055f1839ea3de7d91f.jpg"></img>
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h2>
                </div>
                <h5 className='text-lg font-semi'>2.2 Km</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination
                                }</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>
                
               <div className='mt-2 w-full'>
                    <form onSubmit={(e)=>{
                        submitHander(e)
                    }}>
                        <input value={opt} onChange={(e)=>{e.target.value}} type='text' className="bg-[#eee] px-4 py-4 rounded-lg text-lg w-full font-mono mt-3" placeholder='Enter OTP' />
                    <Link to='/captain-riding' className='w-full flex justify-center text-lg  mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</Link>

                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(false)
                        props.setRidePopupPanel(false)
                    }} className='w-full mt-1 bg-red-600 text-white text-lg font-semibold p-3 rounded-lg'>Cancel</button>
                    </form>
               </div>
            </div>
        </div>
    )
}

export default ConfimRidePopUp