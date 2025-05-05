import React, { useState } from 'react'

function Toggle() {
    const [isOn,setIsOn] = useState(false)
  return (
    <div>
        Toggle
        <div>
            <button onClick={()=>{
                setIsOn(!isOn)
            }}
            className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isOn ? "bg-green-500" : "bg-gray-300"
            }`}
            >
                <span 
                    className={`h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                        isOn ? "translate-x-6" : "translate-x-0"
                    }`}
                />
            </button>
        </div>
    </div>
  )
}

export default Toggle