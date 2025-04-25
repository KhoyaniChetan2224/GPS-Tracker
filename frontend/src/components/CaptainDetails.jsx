import React from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useContext } from 'react'

const CaptainDetails = () => {

  const { captain } = useContext(CaptainDataContext)

  return (
    <div>

      <div className='flex items-center justify-between p-3 rounded-lg -mt-2'>
        <div className='flex items-center gap-3'>
          <img className='h-10 w-10 rounded-full object-cover ' src="https://i.pinimg.com/736x/e6/46/a7/e646a7ebbc9542bb698e14b0d80b29b7.jpg"></img>
          <h2 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h2>
        </div>
        <div >
          <h4 className=" text-xl font-semibold">295.20</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      <div className="flex p-3 mt-5 bg-gray-100 rounded-xl justify-center gap-5 items-start">
        <div className="text-center">
          <i className="ri-timer-2-line text-3xl mb-2 font-extralight "></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-speed-up-fill text-3xl mb-2 font-extralight "></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="ri-booklet-line text-3xl mb-2 font-extralight "></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>

    </div>
  )
}

export default CaptainDetails