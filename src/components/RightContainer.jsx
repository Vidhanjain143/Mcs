import React from 'react'

const RightContainer = ({data}) => {
  return (
    <div className="flex flex-col w-[65%] pr-6">
        <img src='/public/Rectangle376.png' style={{height:250}}/>
        <div className="font-bold text-[26px] mt-3"> About {data.name}</div>
        <div className="flex justify-between">
            <div className="flex flex-col mt-5 gap-2">
                <div className="font-semibold text-gray-500">From</div>
                <div className="">{data.about.from}</div>
            </div>
            <div className="flex flex-col mt-5 gap-2">
                <div className="font-semibold text-gray-500">{data.about.partnerSince}</div>
                <div className="">2011</div>
            </div>
            <div className="flex flex-col mt-5 gap-2 mr-6">
                <div className="font-semibold text-gray-500">{data.about.averageResponseTime}</div>
                <div className="">30 minutes</div>
            </div>
        </div>
       <div className="font-semibold text-gray-500 mt-6">ABOUT</div> 
       <div className="mt-2">{data.about.description}</div>
       <div className="flex justify-between pl-5 pr-10 mt-5">
        <div className="flex flex-col mt-5">
            <div className="font-semibold text-gray-500 mb-3">Services|Offer</div>
            <ul className='list-disc'>
                {data.about.services.map((item)=>{
                 return <li>{item}</li>
                })}
            </ul>
        </div>
        <div className="flex flex-col mt-5">
            <div className="font-semibold text-gray-500 mb-3">Why me?</div>
            <ul className='list-disc'>
            {data.about.benefits.map((item)=>{
                 return <li>{item}</li>
                })}
            </ul>
        </div>
       </div>
    </div>
  )
}

export default RightContainer