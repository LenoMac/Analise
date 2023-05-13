import React from 'react'
import { ChartThree } from './Chart'
export const Clones = () => {
  return (
    <div className='bg-[#1B1C31]  grow px-10 py-5 text-[#A2A3B3] flex flex-col gap-[2rem] overflow-y-scroll scrollbar'>
    <h3 className='text-lg flex self-center'>
      Any Charts that stands by companies
    </h3>
      <ChartThree />
      <ChartThree />
    </div>
  )
}
