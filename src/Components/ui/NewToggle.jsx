import React, { useState } from 'react'
import YearlyComponent from './YearlyComponent'
import MonthlyComponent from './MonthlyComponent'

function NewToggle() {
    const [isLeft, setIsLeft] = useState(true)
  return (
    <div className='flex justify-center items-center flex-col'>
        
        <div
            onClick={() =>{
                setIsLeft(!isLeft)
            }}
            className={` relative w-64 h-18 rounded-full  bg-[#F5F6F9] border-1 border-gray-300 `}
        >
            <div
          className={`absolute top-1 left-1 bottom-1 w-1/2  bg-[#6F4EF6] rounded-full transition-transform duration-300 ${
            isLeft ? "translate-x-0" : "translate-x-29.5"
          }`}
            />
            <div className="relative z-10 flex h-full items-center justify-between text-sm font-medium">
                <div className={`w-1/2 text-md text-center transition-colors duration-500 ${isLeft ? "text-white" : "text-gray-500"}`}>
                    Monthly
                </div>
                <div className={`w-1/2 text-center text-md transition-colors duration-300 ${!isLeft ? "text-white" : "text-gray-500"}`}>
                    Yearly
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center p-6 transition-transform duration-300'>
            {isLeft ? <MonthlyComponent /> : <YearlyComponent />}
        </div>
    </div>
  )
}

export default NewToggle