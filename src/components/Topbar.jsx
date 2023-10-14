import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'
const Topbar = () => {
  return (
    <div className='w-screen h-[60px] flex justify-between items-center'>
     <div className="flex items-center justify-around ml-[170px]">
        <div className='w-[120px] mr-7'><img src='/public/image1.png'/></div>
        <div className='mr-7 flex items-center font-bold'>Solutions<RiArrowDropDownLine/></div>
        <div className='mr-14 flex items-center font-bold'>Features<RiArrowDropDownLine/></div>
        <div className="flex items-center font-bold ml-2">About<RiArrowDropDownLine/></div>
     </div>
     <div className="mr-[120px] flex">
        <button className='border-2 mr-4 text-blue-400 border-blue-400 w-[80px] h-[35px] font-bold rounded-lg'>Login</button>
        <button className='border-2 mr-16 text-white border-blue-400 w-[80px] h-[35px] font-bold rounded-lg bg-blue-400'>Register</button>
    </div>
    </div>
  )
}

export default Topbar