import React from 'react'
export const Profile = () => {
  return (
    <div className='flex gap-8 px-5 justify-end h-max'>
      <div className='flex gap-3'>
        <div className='cursor-pointer self-center p-2 bg-[#373857] h-10 w-10 rounded-lg'>
          <span class="material-symbols-outlined text-[#A2A3B3]">
            chat
          </span>
        </div>
        <div className='cursor-pointer relative self-center p-2 bg-[#373857] h-10 w-10 rounded-lg'>
          <span class="material-symbols-outlined text-[#A2A3B3]">
            notifications
          </span>
          <span class="absolute right-[10px] top-2 flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FC2B93] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-[#FC2B93]"></span>
          </span>
          {/* <span className='absolute top-2 right-2 bg-[#FC2B93] w-2 h-2 rounded-full'></span> */}
        </div>
      </div>
          <div className='h-11 w-11 self-center overflow-hidden rounded-lg cursor-pointer'>
            <img className='' src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='' />
          </div>
    </div>
  )
}
