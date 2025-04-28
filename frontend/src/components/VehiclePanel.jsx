import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false)
        }}
        className="p-1 text-center w-[93%] absolute top-0"><i className="ri-arrow-down-wide-fill text-2xl text-gray-200 pt-14"></i></h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehical</h3>

      <div onClick={() => {
        props.setConfirmRidePanel(true);
        props.selectVehicle("car");
      }} className="border-2 active:border-black mb-2 rounded-xl flex bg-gray-100 w-full items-center justify-between p-3">
        <img className="h-12" src="https://www.freepnglogos.com/uploads/fortuner-png/fortuner-steves-auto-clinic-0.png"></img>
        <div className="w-1/2">
          <h4 className="font-medium text-base">GPS-Go{" "}
            <span>
              <i className="ri-user-3-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹250.50</h2>
      </div>

      <div onClick={() => {
        props.setConfirmRidePanel(true);
        props.selectVehicle("moto");
      }} className="border-2 active:border-black mb-2 rounded-xl flex w-full bg-gray-100 items-center justify-between p-3">
        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"></img>
        <div className="w-1/2">
          <h4 className="font-medium text-base">Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.moto}</h2>
      </div>

      <div onClick={() => {
        props.setConfirmRidePanel(true);
        props.selectVehicle("auto");
      }} className="border-2 active:border-black mb-2 rounded-xl flex w-full bg-gray-100 items-center justify-between p-3">
        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"></img>
        <div className="w-1/2">
          <h4 className="font-medium text-base">GPS-Auto{" "}
            <span>
              <i className="ri-user-3-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2>
      </div>
    </div>
  )
}

export default VehiclePanel