import React from 'react'

const Error = () => {

  return (
    <div className='flex w-screen h-[400px] flex-col justify-center items-center '>
        <div className="font-bold text-[40px]">No CA's found with a given name</div>
        <button className='bg-blue-500 text-white text-[20px] p-3 rounded-xl mt-4 border-2'>Back to Search</button>
    </div>
  )
}

export default Error