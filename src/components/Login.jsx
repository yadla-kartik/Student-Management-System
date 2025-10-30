import React from 'react'

function Login() {
  return (
    <>
        <div className='w-full h-screen bg-zinc-200 flex justify-center items-center'>
            <div className='p-7 w-4/12 h-50 rounded-lg bg-white border-b border-gray-300'>
                <h3 className='font-bold text-xl text-zinc-700'>LOGIN</h3>
                
                <div className="mt-5">
                    <form action="" className='flex flex-col justify-evenly gap-2'>
                        <div>
                            <label htmlFor="" className='text-zinc-600'>User Id</label>
                            <div className='flex mt-1.5 items-center border border-gray-400 rounded-md'>
                                <div className='w-5 h-8 border-r border-zinc-400 bg-zinc-200 rounded-l-md'></div>
                                <input className='p-1 px-2 text-sm border-none placeholder-zinc-600 ' type="text" placeholder='User Id' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className='text-zinc-600'>Password</label>
                            <div className='flex mt-1.5 items-center border border-gray-400 rounded-md'>
                                <div className='w-5 h-8 border-r border-zinc-400 bg-zinc-200 rounded-l-md'></div>
                                <input className=' border-none text-sm p-1 px-2 placeholder-zinc-600' type="text" placeholder='Enter your Password' />
                            </div>
                        </div>
                        <button className='w-full p-1 text-sm bg-indigo-700 text-white rounded-md mt-2'>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login