import React from 'react'
import {AiFillStar,AiTwotoneCalendar} from 'react-icons/ai'

const LeftContainer = ({data}) => {
  return (
    <div className="flex flex-col w-[35%] mt-2 ml-2">
    <div className="font-bold text-[20px] ">{data.name}</div>
    <div className="text-[16px] mt-3">{data.intro}</div>
    <div className="text-blue-500 text-[16px] mt-3 flex items-center gap-1"><AiFillStar/> {data.rating} <span className='text-black'>({data.reviewCount})</span></div>
    <div className="h-fit flex flex-col p-2 rounded-xl gap-4 shadow-lg pb-3 ">
        <div className="flex justify-between mr-2 mt-2">
            <div className=''>{data.taskComplexity}</div>
            <div className="font-bold">{data.price}</div>
        </div>
    <div className="flex items-center gap-2"><span className='text-blue-500'> <AiTwotoneCalendar/></span>{data.deliveryTime}</div>  
    <div className="flex gap-4 justify-around">
        <button className='bg-blue-500 text-white rounded-lg w-[160px] p-1 pl-2 pr-2 font-bold'>Request Proposal</button>
        <button className='text-blue-500 border-blue-500 border-2 rounded-lg  w-[160px] p-1 font-bold'>Chat with me</button>
    </div>
    </div>
    <div className="mt-6 h-fit p-2 shadow-md rounded-xl">
        <div className="font-bold text-[26px]"> What people say?</div>
        <div className="mt-2 mb-10">{data.testimonial.text}</div>
    </div>
</div>
  )
}

export default LeftContainer