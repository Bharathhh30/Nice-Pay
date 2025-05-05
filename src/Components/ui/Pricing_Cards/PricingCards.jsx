import { div, span } from 'motion/react-client'
import React from 'react'

function PricingCards({text,price,sentence,Features}) {
  return (
    <div className='flex border-1 border-slate-300 rounded-3xl transition-transform duration-300'>
        <div className='flex flex-col w-[25vw]  px-8 my-2'>
            {/* plan */}
            <div className='flex py-4 transition-transform duration-300'>
                <h1 className='text-2xl font-medium'>{text || "Basic Plan"}</h1>
            </div>
            {/* price */}
            <div className='flex py-4'>
                <h1 className='text-3xl'>{price || "$1000.00 / year"}</h1>
            </div>
            {/* sentence */}
            <div className='flex py-4 '>
              <p style={{color:"#909090"}}>{sentence || "Perfect for small businesses or startups, our Starter Plan gives you the essential tools to manage your finances with ease"}</p>
            </div>
            {/* button */}
            <div className='w-full px-5 my-6'>
                <button className='bg-white hover:border-purple-400 text-black border-slate-200 border-1 p-4 w-full rounded-full transform transition-transform duration-150 hover:scale-96'>Get Started</button>
            </div>
            {/* tick with 5 text */}
            <div className='space-y-3 mb-8'>
              {Features.map((item,index)=>(
                <div key={index} className='flex items-center gap-2'>
                  <span>
                    <img src="https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66ecaa037c28588af9bd00f9_tick-circle.svg" alt="" />
                  </span>
                  <span className='text-md font-medium'>
                    {item}
                  </span>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default PricingCards