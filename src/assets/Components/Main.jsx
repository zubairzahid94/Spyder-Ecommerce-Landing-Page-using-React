import React from 'react'

export default function Main() {
  return (
    <main className='w-full flex flex-col mt-8 items-center'>
        <div id='work-section' className='max-w-8xl w-full p-2'>

          <h2 className='text-left ml-2 text-indigo-700 text-xl border-b-2 border-indigo-400'>How it Works</h2>  
          <p class="text-left ml-2 text-sm mt-4 text-gray-600">Spyder revolutionizes online shopping. It scours various websites, extracting the cream of the crop – the most appealing products and unbeatable deals. With Spyder, you effortlessly access a refined selection, saving you time and guaranteeing the best finds from the vast web. At Spyder, we harness cutting-edge technology to sift through countless websites, handpicking superior products and irresistible bargains. Simplifying your shopping journey, we present a tailored assortment that matches your taste and budget, bringing the best of the internet directly to your fingertips</p>
          
          <h2 className='text-left ml-2 text-indigo-700 text-xl border-b-2 border-indigo-400 mt-4'>Services</h2>  




          <div id='service-section' className='mt-4'>
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

        <div id='contact-section' className='bg-gray-800 py-12 mt-12 w-full flex flex-col items-center border-t-2 border-black'>
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
                        <button class="bg-blue-600 text-sm mt-4 rounded-lg py-2 px-4 w-full md:mx-2 hover:bg-blue-900">Create account</button>
                    </div>


                
            </form>

            <div className='mt-4' >
             <p className='text-gray-200'> Developed and Designed by Zubair Zahid</p>
               <a className='flex justify-center items-center ml-24 hover:animate-bounce rounded-full w-20' href='https://github.com/zubairzahid94'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg></a>
            </div>


        </div>

    </main>
  )
}
