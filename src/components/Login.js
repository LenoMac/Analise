import React from 'react'
import { Link } from 'react-router-dom'
export const Login = () => {
    return (
        <div className='flex flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[200px] h-[300px] bg-red-300'>
            <Link to='/Login'>
                <input type={'email'} placeholder='Enter email' />
                <input type={'password'} placeholder='Password' />
            </Link>
        </div>
    )
}
