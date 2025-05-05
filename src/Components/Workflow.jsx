import React from 'react'
import LogoButton from './LogoButton'
import StatsCard from './StatsCards'
import StatsCard2 from './StartCard2'

function Workflow() {
  return (
    <div className='flex justify-center flex-col items-center w-full mb-10'>
        {/* Workflow */}
        {/* our workflow button */}
        <LogoButton text={"Our workflow"}/>
        <div className='p-4'>
          <p className='text-6xl text-center'>
          How our platform makes your <br/> workflow <span className='' style={{color : "#8267EC"}}>easier</span>
          </p>
        </div>
        <div className='flex flex-wrap justify-center space-y-6 mt-20'>
          {/* cards */}
          <div className='flex flex-wrap space-x-6'>
            <StatsCard
              icon = {"https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eadebd841e3363bb25c6a2_profile-add.svg"}
              text = {"Sign up and customize"}
              sentence = {"Create your account in minutes and tailor the platform to meet your company's unique financial needs."}
              imageURL = {"https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eaf341601410cfc4bace06_Frame%201000002154%20(1).avif"}
            />
            <StatsCard2
              icon = {"https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66f29ad5e454962d144c3811_bank.svg"}
              text = {"Link Your Accounts"}
              sentence = {"Easily link your bank accounts, credit cards, loans, and investment accounts."}
              imageURL = {"https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eb2967f6f83fc10702fb49_Frame%201.avif"}
            />
          </div>
          <div className='flex flex-wrap space-x-6'>
          <StatsCard2
              icon = {"https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66f29ad5422894011d63fa84_command.svg"}
              text = {"Start Managing Efficiently"}
              sentence = {"Seamlessly connect your existing financial tools and import your data for a smooth transition."}
              imageURL = {"https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eaa62d219648f1ebe5d6f5_Frame%2061%20(2)-p-800.webp"}
            />
            <StatsCard2
              icon = {"https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66f29ad666d331bb3b7b0f72_chart.svg"}
              text = {"Integrate Your Data"}
              sentence = {"Seamlessly connect your existing financial tools and import your data for a smooth transition."}
              imageURL = {"https://cdn.prod.website-files.com/66e66be520fb9aea363b6423/66eb330e305205069a3ac17f_Frame%201000002155.avif"}
            />
          </div>
        </div>
        {/* How our platform makes your workflow easier */}
        {/* 4 cards - cards malli component  */}
    </div>
  )
}

export default Workflow