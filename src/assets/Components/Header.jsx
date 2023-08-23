import React from 'react'
import HamburgerButton from './HamburgerButton'

export default function Header() {
  return (
    <header className='bg-cyan-600 w-full justify-center border-b-4 border-pink-500'>
    <div className='max-w-8xl w-full p-2' >
        <div className='flex items-center justify-between text-pink-00'>
        <img src='/Logo.png' className='h-10 fill-current'></img>

        <HamburgerButton/>
        </div>

        <div id='home-section'>
            <h1 className='px-4 text-indigo-100 text-2xl'>Spyder: Uncover the Web's Best Deals</h1>
            <p className='px-4 text-indigo-200 '> Your Ultimate E-commerce Companion for Finding the Best Deals and Products from Across the Web.</p>

            <div className='relative flex m-4'>

              <div>
               <a href='#' className='bg-pink-600 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase hover:bg-pink-900'>Shop Now</a>
               </div>
               <div className='absolute right-0 bg-white h-24 w-24 flex justify-center items-center rounded-full border-4 border-pink-500'>
                <img src='/spyder logo.png' className=''></img>
               </div>
            </div>

        </div>
    </div>
    </header>
  )
}
