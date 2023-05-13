import React from 'react'

const Cards = () => {
    return (
        <div className='relative h-max w-full flex justify-end'>
            <div className='flex flex-col gap-6 rotate-[-90deg] w-max ml-32 translate-x-10'>

                <div className='animate-[first_1s_forwards] cursor-pointer w-52 h-28 rounded-xl bg-[#51459E] p-2 flex flex-col gap-1 translate-y-24'>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 self-center'>
                            <span class="material-symbols-outlined self-center text-white text-sm">
                                star
                            </span>
                            <p className='text-white text-sm'>Premium</p>
                        </div>
                        <p className='text-white text-[12px]'>Debit</p>
                    </div>
                    <div className='text-white text-bold self-center'>
                        4132 0724 **37 48**
                    </div>

                </div>

                <div className='animate-[second_1s_forwards] cursor-pointer w-52 h-28 rounded-xl bg-[#84E8F4] p-2 flex flex-col gap-1 z-3'>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 self-center'>
                            <span class="material-symbols-outlined self-center text-sm text-[#1B1C31]">
                                star
                            </span>
                            <p className='text-[#1B1C31] text-sm'>Premium</p>
                        </div>
                        <p className='text-[#1B1C31] text-[12px]'>Debit</p>
                    </div>
                    <div className='text-[#1B1C31] text-bold self-center'>
                        4132 0724 **37 48**
                    </div>
                </div>
                <div className='animate-[third_1s_forwards] cursor-pointer w-52 h-28 rounded-xl bg-[#FC2B93] p-2 flex flex-col gap-1 translate-y-[-100px] z-5'>
                    <div className='flex justify-between'>
                        <div className='flex gap-1 self-center'>
                            <span class="material-symbols-outlined self-center text-white text-sm">
                                star
                            </span>
                            <p className='text-white text-sm'>Premium</p>
                        </div>
                        <p className='text-white text-[12px]'>Debit</p>
                    </div>
                    <div className='text-white text-bold self-center'>
                        4132 0724 **37 48**
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards