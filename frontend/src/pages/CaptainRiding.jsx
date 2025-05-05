import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { use, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidepanel, setFinishRidepanel] = useState(false)
    const finishRidepanelRef = useRef(null)

    useGSAP(
        function () {
          if (finishRidepanel) {
            gsap.to(finishRidepanelRef.current, {
              transform: 'translateY(0)'
            });
          } else {
            gsap.to(finishRidepanelRef.current, {
              transform: 'translateY(100%)'
            });
          }
        },
        [finishRidepanel]
      );




    return (
        <div className="h-screen relative overflow-hidden">
            <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
                <img
                    className="w-16 absolute left-5 top-5"
                    src="https://png.pngtree.com/png-clipart/20231203/original/pngtree-gps-black-glossy-internet-icon-gps-icon-photo-png-image_13757927.png"
                ></img>
                <Link to="/Home">
                    <div className="fixed h-10 w-10 bg-white flex right-2 top-6 items-center justify-center rounded-full">
                        <i className="text-lg font-medium ri-logout-box-r-line"></i>
                    </div>
                </Link>
            </div>
            <div className="h-4/5">
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                />
            </div>

            <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 pt-10'
                onClick={() => {
                    setFinishRidepanel(true)
                }}>
                <h5 className='p-1 text-center w-[90%] absolute top-0' onClick={() => {

                }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
                <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
                <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
            </div>

            <div
        ref={finishRidepanelRef}
        className="fixed w-full z-10 bottom-0 p-3 translate-y-full bg-white py-10 px-3 pt-14">
          <FinishRide setFinishRidepanel={setFinishRidepanel} />
      </div>

        </div>
    )
}

export default CaptainRiding
