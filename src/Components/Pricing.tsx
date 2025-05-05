import React from 'react'
import LogoButton from './LogoButton'
import NewToggle from './ui/NewToggle'

function Pricing() {
  return (
    <div className='mt-20 '>
        <div className='flex flex-col justify-center items-center space-y-4'>
            <div>
                <LogoButton text={"Pricing"} />
            </div>
            <div>
                <h1 className='text-6xl'>Simple and transparant <span style={{color:"#8276e2"}}>pricing</span></h1>
            </div>
            <div className='text-center pt-6'>
                <p style={{color:"#909090"}} 
                    className='font-medium'
                >Choose a plan that fits your business needs and budget. No hidden fees, no surprises—just <br/>straightforward pricing for powerful financial management.</p>
            </div>
            <div className='mt-15'>
                {/* monthly yearly swap component */}
                <NewToggle />
            </div>
        </div>
    </div>
  )
}

export default Pricing