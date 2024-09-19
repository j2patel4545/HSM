import React from 'react'

function about() {
  return (
<div
      className="h-screen bg-cover bg-no-repeat flex  justify-center"
      style={{ backgroundImage: `url('./public/Frame 1.svg')` }}
    >
        <div id="team" className=' w-[96%] flex flex-col border-l-2 border-r-2 flex-wrap border-b-2 items-center justify-center rounded-3xl mt-[10vh] mt-[10vh] items-center border-zinc-500'>
                <h2 className='flex h-[10vh] w-[67%] border-b-2 mb-[10vh] items-center justify-center text-4xl'>Meet Our Team </h2>
                <div className='flex gap-10 '>
              
                <div id="member" className='h-[51vh] w-[20vw] flex border-2 flex-col items-center border-zinc-50 rounded-2xl'>
                    <div className='flex h-[23vh] w-[23vh] rounded-[50%]  mt-[2vh] bg-zinc-100 '>
                      <img src="../public/j2.jpg" className=' h-full w-full object-contain rounded-[50%]' />
                    </div>
                    <h2 className='flex h-[8vh] w-full items-center justify-center text-3xl'> Patel Jetal</h2>
                    <h3 className='flex h-[4vh] w-full items-center  justify-center text-1xl'>Frontend Developer</h3>
                    <div className='flex h-[12vh]  w-full items-center justify-center text-3xl'> 

                    <div class="flex gap-3 pt-2 pl-3">
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
        </path>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
        </path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
        </path>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
      </svg>
    </div>

                    </div>

                </div>

                <div id="member" className='h-[51vh] w-[20vw] flex border-2 flex-col items-center border-zinc-50 rounded-2xl'>
                    <div className='flex h-[23vh] w-[23vh] rounded-[50%]  mt-[2vh] bg-zinc-100 '>
                      <img src="../public/hiral.jpg" className=' h-full w-full object-cover rounded-[50%]' />
                    </div>
                    <h2 className='flex h-[8vh] w-full items-center justify-center text-3xl'> Patel Hiral</h2>
                    <h3 className='flex h-[4vh] w-full items-center  justify-center text-1xl'>Backend Developer</h3>
                    <div className='flex h-[12vh]  w-full items-center justify-center text-3xl'> 

                    <div class="flex gap-3 pt-2 pl-3">
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
        </path>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
        </path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
        </path>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
      </svg>
    </div>

                    </div>

                </div>

                <div id="member" className='h-[51vh] w-[20vw] flex border-2 flex-col items-center border-zinc-50 rounded-2xl'>
                    <div className='flex h-[23vh] w-[23vh] rounded-[50%]  mt-[2vh] bg-zinc-100 '>
                      <img src="../public/zeel.jpg" className=' h-full w-full object-contain rounded-[50%]' />
                    </div>
                    <h2 className='flex h-[8vh] w-full items-center justify-center text-3xl'> Tank Zeel</h2>
                    <h3 className='flex h-[4vh] w-full items-center  justify-center text-1xl'>UX/UI Designer</h3>
                    <div className='flex h-[12vh]  w-full items-center justify-center text-3xl'> 

                    <div class="flex gap-3 pt-2 pl-3">
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
        </path>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
        </path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
        </path>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
      </svg>
    </div>

                    </div>

                </div>


                <div id="member" className='h-[51vh] w-[20vw] flex border-2 flex-col items-center border-zinc-50 rounded-2xl'>
                    <div className='flex h-[23vh] w-[23vh] rounded-[50%]  mt-[2vh] bg-zinc-100 '>
                      <img src="../public/lonika.jpg" className=' h-full w-full object-contain rounded-[50%]' />
                    </div>
                    <h2 className='flex h-[8vh] w-full items-center justify-center text-3xl'> Patel Lonika</h2>
                    <h3 className='flex h-[4vh] w-full items-center  justify-center text-1xl'>business analysis</h3>
                    <div className='flex h-[12vh]  w-full items-center justify-center text-3xl'> 

                    <div class="flex gap-3 pt-2 pl-3">
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
        </path>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
        </path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
        </path>
      </svg>
      <svg stroke="currentColor" viewBox="0 0 24 24" class="w-7 hover:scale-125 duration-200 hover:cursor-pointer text-white stroke-2">
        <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
      </svg>
    </div>

                    </div>

                </div>


                </div>
                
                
                
        </div>


    </div>
  )
}

export default about