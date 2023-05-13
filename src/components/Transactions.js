import React from 'react'
import { ConstactionsTwo } from './ConstactionsTwo'
export const Transactions = () => {
    return (
        <div className='flex flex-col gap-3 mt-[-3rem]'>
            <h3 className='text-2xl flex justify-start text-white'>Recent Transactions</h3>
            <div className='flex justify-between py-1 gap-8'>
                <div className='bg-[#23243D] flex gap-2 py-2 px-3 rounded-lg cursor-pointer flex-grow'>
                    <span class="material-symbols-outlined ">
                        search
                    </span>
                    <input type={Text} placeholder='Search' className='outline-none border-none w-full bg-transparent' />
                </div>

                <div className='bg-[#23243D] flex gap-2 py-2 px-3 rounded-lg cursor-pointer m-auto'>
                    <span class="material-symbols-outlined text-green-600 text-sm self-center translate-y-px">
                        south_west
                    </span>
                    <p>Income <b className='text-white'>$654,495</b></p>
                </div>

                <div className='bg-[#23243D] flex gap-2 py-2 px-3 rounded-lg cursor-pointer'>
                    <span class="material-symbols-outlined text-white text-sm self-center">
                        north_east
                    </span>
                    <p>Expences <b className='text-white'>$569,806</b></p>

                </div>
            </div>
            <ConstactionsTwo />
        </div>
    )
}
