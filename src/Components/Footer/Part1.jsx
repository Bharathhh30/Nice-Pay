import React from 'react'

function Part1() {
  return (
    <div className='flex flex-col items-start space-y-8 px-20 pt-10 justify-center w-[26vw] '>
      
      <div>
        <img 
          src="src\assets\nice-page.svg" 
          alt="" 
          height={200}
          width={200}
        />
      </div>

      <div className='text-sm'>
        <p style={{color:"#909090"}}>Streamline your business's financial management with our intuitive, scalable SaaS platform. Designed for U.S. enterprises, our solutions simplify complex processes.</p>
      </div>
    </div>
  )
}

export default Part1