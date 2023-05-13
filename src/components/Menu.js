import React from 'react'
import { Link } from 'react-router-dom'
import { Problems } from './Problems'
import { Clones } from './Clones'
import { Incomplete } from './Incomplete'
import Compare from './Compare'
import { Settings } from './Settings'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export const Menu = () => {

  const menuItems = document.querySelectorAll('#item');
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', ()=>{
      menuItems.forEach((it) =>{
        it.classList.remove('text-[#FC2A93]');
      });

      menuItem.classList.add('text-[#FC2A93]');
    });
  });

  return (
    <BrowserRouter>
      <div className='w-[5%] bg-[#23243D] py-4 px-3 flex flex-col justify-between sticky top-0 left-0'>
        <div className='w-[40px] bg-[#FC2A93] rounded-[5px] p-1 self-center'>
          <img className='rotate-[-25deg]' src='https://cdn-icons-png.flaticon.com/512/146/146676.png' alt='' />
        </div>
        {/*ICONS  */}
        <div className='flex flex-col self-center gap-6 text-[#A2A3B3]'>
          <div>
            <Link to='/'>
              <span id='item' class="cursor-pointer material-symbols-outlined hover:text-[#FC2A93] text-[#FC2A93] transition-colors delay-75" >
                equalizer
              </span>
            </Link>
          </div>

          <div>
            <Link to='/Clone'>
              <span id='item' class="cursor-pointer material-symbols-outlined hover:text-[#FC2A93] transition-colors delay-75">
                content_copy
              </span>
            </Link>
          </div>

          <div>
            <Link to='/Incomplete'>
              <span id='item' class="cursor-pointer material-symbols-outlined hover:text-[#FC2A93] transition-colors delay-75">
                incomplete_circle
              </span>
            </Link>
          </div>

          <div>
          <Link to='/Compare'>
            <span id='item' class="cursor-pointer material-symbols-outlined hover:text-[#FC2A93] transition-colors delay-75">
              compare_arrows
            </span>
            </Link>
          </div>

          <div>
          <Link to='/Settings'>
            <span id='item' class="cursor-pointer material-symbols-outlined hover:text-[#FC2A93] transition-colors delay-75">
              settings
            </span>
            </Link>
          </div>
        </div>

        <div className='flex flex-col self-center gap-3'>
          <div className='relative'>
            <div className='rounded-full w-[30px] h-[30px] truncate cursor-pointer'>
              <img src='https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fEZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='' className='w-[30px] h-[30px] object-cover' />
            </div>
            <span className='absolute right-0 bottom-0 bg-green-600 w-[10px] h-[10px] rounded-full border-[1px]'></span>
          </div>

          <div>
            <div className='cursor-pointer rounded-full w-[30px] h-[30px] truncate'>
              <img src='https://images.unsplash.com/photo-1602033350291-a9ab8d800269?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fEZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className='w-[35px] h-[35px] object-cover' alt='' />
            </div>
          </div>

          <div>
            <div className='cursor-pointer rounded-full w-[30px] h-[30x] truncate'>
              <img src='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8RmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' className='w-[30px] h-[30px] object-cover' alt='' />
            </div>
          </div>

        </div>
      </div>

      <Routes>
        <Route path='/' element={<Problems />}></Route>
        <Route path='/Clone' element={<Clones />}></Route>
        <Route path='/Incomplete' element={<Incomplete/>}></Route>
        <Route path='/Compare' element={<Compare/>}></Route>
        <Route path='/Settings' element={<Settings/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
