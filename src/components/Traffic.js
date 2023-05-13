import React from 'react'
import { ThreeChartOne } from './ThreeChartOne'
const Traffic = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-between'>
                <h3 className='text-2xl self-center text-white'>Top Traffic Sources</h3>
                <div className='self-center flex gap-7 text-sm'>
                        <div className='flex gap-2'>
                            <input type="radio" checked  className='accent-[#FC2B93]' />
                            <p>Free</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio" checked  className='accent-[#51459E]'/>
                            <p>Ads</p>
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio" checked  className='accent-[#84E8F4]'/>
                            <p>Referrals</p>
                        </div>
                </div>
            </div>
            <ThreeChartOne />
        </div>
    )
}

export default Traffic
