// import React from "react";

// const LocationSearchPanel = (props) => {
//   console.log(props);

//   // sample array of location
//   const location = [
//     "24B, Near Kapoor's cafe, Nana Ankdiya, Amreli",
//     "22C, Near Malholtra's cafe, Nana Ankdiya, Amreli",
//     "20B, Near Singhai's cafe, Nana Ankdiya, Amreli",
//     "18A, Near Sharma's cafe, Nana Ankdiya, Amreli",
//   ];

//   return (
//     <div>
//       {/* this is just a sempla data */}
//       {location.map(function (elem, idx) {
//         return <div key={idx} onClick={() => {
//           props.setVehiclePanel(true)
//           props.setPanelOpen(false)
//         }} className="flex items-center my-2 border-2 p-3 border-gray-50 active:border-black rounded-xl justify-start gap-4">
//             <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full"><i className="ri-map-pin-fill"></i></h2>
//             <h4 className="font-medium">{elem}</h4>
//           </div>
//         })
//       } 
//     </div>
//   )
// }

// export default LocationSearchPanel;


import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion)
        } else if (activeField === 'destination') {
            setDestination(suggestion)
        }
        // setVehiclePanel(true)
        // setPanelOpen(false)
    }

    return (
        <div>
            {/* Display fetched suggestions */}
            {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default LocationSearchPanel