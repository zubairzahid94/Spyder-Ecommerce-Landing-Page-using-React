import React from 'react'

export default function Main() {
  return (
    <main className='w-full flex flex-col mt-8 items-center'>
        <div className='max-w-8xl w-full p-2'>

          <h2 className='text-left ml-2 text-indigo-700 text-xl border-b-2 border-indigo-400'>How it Works</h2>  
          <p class="text-left ml-2 text-sm mt-4 text-gray-600">Spyder revolutionizes online shopping. It scours various websites, extracting the cream of the crop – the most appealing products and unbeatable deals. With Spyder, you effortlessly access a refined selection, saving you time and guaranteeing the best finds from the vast web. At Spyder, we harness cutting-edge technology to sift through countless websites, handpicking superior products and irresistible bargains. Simplifying your shopping journey, we present a tailored assortment that matches your taste and budget, bringing the best of the internet directly to your fingertips</p>

          <h2 className='text-left ml-2 text-indigo-700 text-xl border-b-2 border-indigo-400 mt-4'>Services</h2>  




          <div className='mt-4'>
            <div className='flex flex-col sm:flex-row'>
                <div className='bg-white max-w-md sm:w-1/3 md:w-1/3 flex flex-col justify-center items-center rounded-lg border-b-2 border-pink-500 h-64 m-4 p-2'>
                    <div className=''>

                    <svg class="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.9 19.7l-6.9 2-6.9-2L3.7 3h16.7c-.5 5.6-1 11.1-1.5 16.7zM19.4 4H4.8l1.3 14.9 5.9 1.7 5.9-1.7L19.4 4zM8.1 13.8h2V15l2 .7 2-.7.1-2.2H9.9l-.1-2h4.5l.1-2H7.7l-.1-2h9l-.2 3.9-.4 5.8-3.9 1.3-3.9-1.3-.1-2.7z" fill-rule="evenodd" clip-rule="evenodd"/></svg>

                    </div>

                    <div class="mt-4 font-bold">Product Scouting</div>
                    <div class="text-center mt-2 text-gray-600 text-sm"> Uncovering the best deals and hidden gems from a diverse range of online stores.</div>



                </div>

                <div className='bg-white max-w-md sm:w-1/3 md:w-1/3 flex flex-col justify-center items-center rounded-lg border-b-2 border-pink-500 h-64 m-4 p-2'>
                    <div className=''>

                    <svg class="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.9 19.7l-6.9 2-6.9-2L3.7 3h16.7c-.5 5.6-1 11.1-1.5 16.7zM19.4 4H4.8l1.3 14.9 5.9 1.7 5.9-1.7L19.4 4zM8.1 13.8h2V15l2 .7 2-.7.1-2.2H9.9l-.1-2h4.5l.1-2H7.7l-.1-2h9l-.2 3.9-.4 5.8-3.9 1.3-3.9-1.3-.1-2.7z" fill-rule="evenodd" clip-rule="evenodd"/></svg>

                    </div>

                    <div class="mt-4 font-bold">Smart Recommendations</div>
                    <div class="text-center mt-2 text-gray-600 text-sm"> Personalized suggestions based on your preferences and shopping history.</div>



                </div>
                <div className='bg-white max-w-md sm:w-1/3 md:w-1/3 flex flex-col justify-center items-center rounded-lg border-b-2 border-pink-500 h-64 m-4 p-2'>
                    <div className=''>

                    <svg class="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.9 19.7l-6.9 2-6.9-2L3.7 3h16.7c-.5 5.6-1 11.1-1.5 16.7zM19.4 4H4.8l1.3 14.9 5.9 1.7 5.9-1.7L19.4 4zM8.1 13.8h2V15l2 .7 2-.7.1-2.2H9.9l-.1-2h4.5l.1-2H7.7l-.1-2h9l-.2 3.9-.4 5.8-3.9 1.3-3.9-1.3-.1-2.7z" fill-rule="evenodd" clip-rule="evenodd"/></svg>

                    </div>

                    <div class="mt-4 font-bold">User Reviews Integration</div>
                    <div class="text-center mt-2 text-gray-600 text-sm">  Incorporating genuine user reviews to aid in your purchase choices.</div>



                </div>






            </div>


          </div>


        </div>

        <div className='bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black'>
            <h2 className='text-xl text-gray-200 mt-4'>Sign up to download the free PDF</h2>

            <form className='max-w-xl w-full text-gray-200 mt-4 px-8 md:px-0" action="#" method="post'>
                <div className=' flex flex-col md:flex-row md:-mx-2'>
                <label for="first_name" class="sr-only">First Name</label>
                <input className=' bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2' type='text' placeholder='First Name' id='first-name'></input>

                <label for="last_name" class="sr-only">Last Name</label>
                <input className=' bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2' type='text' placeholder='Last Name' id='last-name'></input>


                </div>

                <div className=' flex flex-col md:flex-row md:-mx-2'>
                <label for="first_name" class="sr-only">Email</label>
                <input className=' bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2' type='email' placeholder='zubair@gmail.com' id='first-name'></input>

                <label for="last_name" class="sr-only">Title</label>
                <input className=' bg-gray-700 mt-4 border border-gray-600 rounded-lg py-2 px-4 w-full md:mx-2' type='text' placeholder='Title' id='title'></input>


                </div>
                <div class="flex flex-col md:flex-row md:-mx-2">
                        <button class="bg-blue-600 text-sm mt-4 rounded-lg py-2 px-4 w-full md:mx-2">Create account</button>
                    </div>


                
            </form>


        </div>

    </main>
  )
}
