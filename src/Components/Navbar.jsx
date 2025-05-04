import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='border-2 flex justify-evenly w-[65.3rem] p-3 rounded-full border-slate-200 '>
        <div className='flex justify-center items-center w-1/4 p-2 '>    
            <img src="src\assets\nice-page.svg" alt="logo of nice pay"   />
        </div>
        <div className='flex justify-evenly items-center w-full px-10 font-noto'>
            <Link to={"/"}>
                <p className='text-slate-400 hover:text-black font-medium'>Features</p>
            </Link>
            <Link to={"/"}>
                <p className='text-slate-400 hover:text-black font-medium'>Pricing</p>
            </Link>
            <Link to={"/"}>
                <p className='text-slate-400 hover:text-black font-medium'>About Us</p>
            </Link>
            <Link to={"/"}>
                <p className='text-slate-400 hover:text-black font-medium'>Blog</p>
            </Link>
            <Link to={"/"}>
                <p className='text-black font-medium'>Cart (0)</p>
            </Link>
        </div>
        <div>
        <Link to={"/"}>
          <button
            borderRadius="1.75rem"
            style={{ background: 'linear-gradient(0deg, #7050f0, #9680ef)' }}
            className=" rounded-full cursor-pointer w-28 py-4"
            >
            <p className="font-medium text-white">Sign In</p>
            
          </button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar