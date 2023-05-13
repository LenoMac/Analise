import React from 'react'
import { Profile } from './Profile'
import Cards from './Cards'
export const Trands = () => {
  return (
    <div className='bg-[#23243D] flex flex-col w-[35%] py-5 px-2 sticky top-0 left-0'>
      <Profile/>
      <Cards />
    </div>
  )
}
