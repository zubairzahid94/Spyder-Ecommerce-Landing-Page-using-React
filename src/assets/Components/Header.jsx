import React from 'react'

export default function Header() {
  return (
    <header className='bg-cyan-600 w-full justify-center border-b-4 border-pink-500'>
    <div className='max-w-8xl w-full p-2' >
        <div className='flex items-center justify-between text-pink-00'>
        <img src='src\assets\Images\Logo.PNG' className='h-10 fill-current'></img>
  
        <button className='text-gray-600 hover:text-gray-300'>
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>            </button>
        </div>

        <div>
            <h1 className='px-4 text-indigo-100 text-2xl'>Spyder: Uncover the Web's Best Deals</h1>
            <p className='px-4 text-indigo-200 '> Your Ultimate E-commerce Companion for Finding the Best Deals and Products from Across the Web.</p>

            <div className='relative flex m-4'>

              <div>
               <a href='#' className='bg-pink-600 text-indigo-100 font-bold mt-2 px-4 py-2 rounded-full text-xs uppercase hover:bg-pink-900'>Shop Now</a>
               </div>
               <div className='absolute right-0 bg-white h-24 w-24 flex justify-center items-center rounded-full border-4 border-pink-500'>
                <img src='src\assets\Images\spyder logo.PNG' className=''></img>
               </div>
            </div>

        </div>
    </div>
    </header>
  )
}
