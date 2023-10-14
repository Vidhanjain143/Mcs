import React from 'react'
import {AiFillStar} from 'react-icons/ai'

const Recommended = () => {
  return (
    <div className="mt-5 h-[500px] flex flex-col w-[80%] m-auto">
     <div className="font-bold text-[26px]">Recommended for you</div>
     <div className="grid grid-flow-row grid-cols-3 mt-4">
        <div className="w-[300px] h-[400px] rounded-xl flex flex-col shadow-lg">
            <img src="/public/Rectangle376.png"/>
        <div className="flex justify-between m-2">
            <div className='font-bold'> Michael Jackson </div>
            <div className="font-bold">₹4,370</div>
        </div>
        <div className="text-[16px] mt-2 ml-2">I am here to provide my expertise in accounting and finance and auditing, all to assist you effectively</div>
        <div className="text-blue-500 text-[16px] mt-3 flex items-center gap-1 ml-2"><AiFillStar/> 4.8 <span className='text-black'>(89)</span></div>
        <button className='bg-blue-500 text-white font-bold rounded-lg p-2 m-2'> View Services</button>
        </div>
        {/*1 end*/}
        <div className="w-[300px] h-[400px] rounded-xl flex flex-col shadow-lg">
            <img src="/public/Rectangle376.png"/>
        <div className="flex justify-between m-2">
            <div className='font-bold'>Stevie Wonder </div>
            <div className="font-bold">₹4,263</div>
        </div>
        <div className="text-[16px] mt-2 ml-2">I am here to provide my expertise in accounting and finance and auditing, all to assist you effectively</div>
        <div className="text-blue-500 text-[16px] mt-3 flex items-center gap-1 ml-2"><AiFillStar/> 5.0 <span className='text-black'>(62)</span></div>
        <button className='bg-blue-500 text-white font-bold rounded-lg p-2 m-2'> View Services</button>
        </div>
        {/*2 end*/}
        <div className="w-[300px] h-[400px] rounded-xl flex flex-col shadow-lg">
            <img src="/public/Rectangle376.png"/>
        <div className="flex justify-between m-2">
            <div className='font-bold'> Ray Charles </div>
            <div className="font-bold">₹2,586</div>
        </div>
        <div className="text-[16px] mt-2 ml-2">I am here to provide my expertise in accounting and finance and auditing, all to assist you effectively</div>
        <div className="text-blue-500 text-[16px] mt-3 flex items-center gap-1 ml-2"><AiFillStar/> 4.3 <span className='text-black'>(189)</span></div>
        <button className='bg-blue-500 text-white font-bold rounded-lg p-2 m-2'> View Services</button>
        </div>
     </div>
    </div>
  )
}

export default Recommended