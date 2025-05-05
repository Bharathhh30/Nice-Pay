import React from 'react'

function StatsCard2({icon,text,sentence,imageURL}) {
  return (
    <div className='flex w-[35vw] h-[75vh]   overflow-hidden rounded-5xl'>
        <div className='flex flex-col rounded-2xl pt-8 px-8' 
            style={{backgroundColor : "#F5F6F9"}}
        >
            {/* icon */}
                <div className='pl-2'>
                    <div className='bg-[#8267EC] flex justify-center items-center w-10 rounded-full p-2'>
                        <img src={icon || "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eadebd841e3363bb25c6a2_profile-add.svg"} alt="" />
                    </div>
                </div>
            {/* text */}
                <div className=' pr-1 p-2 mt-3'>
                    <p className='font-noto text-4xl font-normal'>{text || "hi"}</p>
                </div>
            {/* sentence */}
                <div className='px-2 mt-6'>
                    <p className='py-2  text-md'
                        style={{color : "#909090"}} 
                    >{sentence||"Create your account in minutes and tailor the platform to meet your company's unique financial needs."}</p>
                </div>
            {/* image */}
                <div className='flex justify-center  items-center mt-4 rounded-2xl overflow-hidden  '>
                    <img src={imageURL || "https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eaf341601410cfc4bace06_Frame%201000002154%20(1).avif"} 
                    alt="" 
                    height={280}
                    width={370}
                    className='rounded-3xl mt-50'
                    />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <div className=" flex justify-center items-center absolute  mb-6 bottom-0 left-0  h-20 bg-gradient-to-t from-[#F5F6F9] to-transparent" />
                </div>
        </div>
    </div>
  )
}

export default StatsCard2