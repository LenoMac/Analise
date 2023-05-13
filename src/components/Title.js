import React from 'react'

export const Title = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h3 className='text-2xl text-white'>Analytics</h3>
                <p className='text-sm mt-1'>Hello Hafizbey, welcome back!</p>
            </div>

            <div className='bg-[#23243D] rounded flex justify-between gap-2 self-center p-2'>
                <span class="cursor-pointer text-[1.3rem] self-center material-symbols-outlined">
                    search
                </span>
                <input type={'text'} className='self-center text-white outline-none bg-transparent text-[0.8rem] placeholder:text-[#A2A3B3]' placeholder='Search Dashboard' />
                <span class="self-center material-symbols-outlined cursor-pointer">
                    linear_scale
                </span>
            </div>
        </div>
    )
}
