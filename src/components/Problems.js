import React from 'react'
import { Title } from './Title'
import Traffic from './Traffic'
import { Transactions } from './Transactions'
export const Problems = () => {
  return (
      <div className='bg-[#1B1C31]  grow px-10 py-5 text-[#A2A3B3] flex flex-col gap-[5rem] overflow-y-scroll scrollbar'>
        <Title />
        <Traffic />
        <Transactions />
      </div>
  )
}
