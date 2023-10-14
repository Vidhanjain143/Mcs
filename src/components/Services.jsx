import React from 'react'

const Services = () => {
  return (
    <div className="sm:mt-20 mt-1 h-fit flex flex-col items-center bg-[#f8fafd] outline-none">
     <div className="font-bold text-[60px]">Want to <span className='bg-gradient-to-r from-[#0076CE] to-[#9400d3] bg-clip-text text-transparent'>Join</span> Us ?</div>
     <div className='text-gray-800 text-lg mb-10'>To remain with us, it is essential that you diligently follow the steps provided</div>
     <div className="mt-10 grid grid-flow-row grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3 ml-5 md:gap-[40px] md:ml-10">
        {/*1st block */} 
        <div className="md:w-[390px] h-[270px] flex flex-col items-center rounded-2xl shadow-xl shadow-blue-100 ">
        <div className="flex w-[50px] mt-[-20px] h-[40px] ml-[-370px] border-2  rounded-xl font-bold text-white bg-gradient-to-r from-[#0076CE] to-[#9400D3] justify-center items-center">1<sup>st</sup></div>
        <div className="font-bold text-base mb-2">Commencement of Business</div>
        <div className="font-normal ml-5 mr-5">Invested shareholders must confirm payment and office address </div>
        <div className="flex w-[90%] h-[130px] mt-3 rounded-2xl bg-[#F4F4F4] justify-around gap-2">
            <div className="flex flex-col mt-2">
            <div className="text-blue-500 font-bold">Due Date</div>
            <div className="mt-2"> Within 180 <br/>days</div>
            </div>
            <div className="flex flex-col mt-2">
            <div className="text-red-600 font-bold">Penalty Fees</div>
            <div className="mt-2"><span className='font-bold'>₹50,000 </span>for company</div>
            <div className="mt-1"><span className='font-bold'>₹1000 </span>/day for directors</div>
            </div>
        </div>
        </div>
        {/*End*/}
        {/*2nd block */} 
        <div className="w-[390px] h-[270px] flex flex-col items-center rounded-2xl shadow-xl shadow-blue-100">
        <div className="flex w-[50px] mt-[-20px] h-[40px] ml-[-370px] border-2  rounded-xl font-bold text-white bg-gradient-to-r from-[#0076CE] to-[#9400D3] justify-center items-center">2 <sup>nd</sup></div>
        <div className="font-bold text-base mb-2">Auditor Appointment</div>
        <div className="font-normal ml-5 mr-5">Company informs new auditor and submits ADT.1 form to ROC.</div>
        <div className="flex w-[90%] h-[130px] mt-3 rounded-2xl bg-[#F4F4F4] justify-around gap-2">     <div className="flex flex-col mt-2">
            <div className="text-blue-500 font-bold">Due Date</div>
            <div className="mt-2"> Within 30 <br/>days</div>
            </div>
            <div className="flex flex-col mt-2">
            <div className="text-red-600 font-bold">Penalty Fees</div>
            <div className="mt-2"><span className='font-bold'>₹3000 </span>per month</div>
            </div>
        </div>
        </div>
        {/*End*/}
         {/*3rd block */} 
         <div className="w-[390px] h-[270px] flex flex-col items-center rounded-2xl shadow-xl shadow-blue-100">
        <div className="flex w-[50px] mt-[-20px] h-[40px] ml-[-370px] border-2  rounded-xl font-bold text-white bg-gradient-to-r from-[#0076CE] to-[#9400D3] justify-center items-center">3<sup>rd</sup></div>
        <div className="font-bold text-base mb-2">Din eKYC</div>
        <div className="font-normal ml-5 mr-5">Directors share personal information for identification & verification </div>
        <div className="flex w-[90%] h-[130px] mt-3 rounded-2xl bg-[#F4F4F4] justify-around gap-2">
            <div className="flex flex-col mt-2">
            <div className="text-blue-500 font-bold">Due Date</div>
            <div className="mt-2"> Every Year</div>
            </div>
            <div className="flex flex-col mt-2">
            <div className="text-red-600 font-bold">Penalty Fees</div>
            <div className="mt-2"><span className='font-bold'>₹5000</span>one time</div>
            </div>
        </div>
        </div>
        {/*End*/}
         {/*4th block */} 
         <div className="w-[390px] h-[270px] flex flex-col items-center rounded-2xl shadow-xl shadow-blue-100">
        <div className="flex w-[50px] mt-[-20px] h-[40px] ml-[-370px] border-2  rounded-xl font-bold text-white bg-gradient-to-r from-[#0076CE] to-[#9400D3] justify-center items-center">4<sup>th</sup></div>
        <div className="font-bold text-base mb-2">DPT-3</div>
        <div className="font-normal ml-5 mr-5">Company informs new auditor and submits ADT.1 form to ROC.</div>
        <div className="flex w-[90%] h-[130px] mt-3 rounded-2xl bg-[#F4F4F4] justify-around gap-2">
            <div className="flex flex-col mt-2">
            <div className="text-blue-500 font-bold">Due Date</div>
            <div className="mt-2"> Within 30 <br/>days</div>
            </div>
            <div className="flex flex-col mt-2">
            <div className="text-red-600 font-bold">Penalty Fees</div>
            <div className="mt-2"><span className='font-bold'>₹3000 </span>per month</div>
            </div>
        </div>
        </div>
        {/*End*/}
         {/*5th block */} 
         <div className="w-[390px] h-[270px] flex flex-col items-center rounded-2xl shadow-xl shadow-blue-100">
        <div className="flex w-[50px] mt-[-20px] h-[40px] ml-[-370px] border-2  rounded-xl font-bold text-white bg-gradient-to-r from-[#0076CE] to-[#9400D3] justify-center items-center">5<sup>th</sup></div>
        <div className="font-bold text-base mb-2">MCA Form AOC-4</div>
        <div className="font-normal ml-5 mr-5">It's like an official report card for a company's documents</div>
        <div className="flex w-[90%] h-[130px] mt-3 rounded-2xl bg-[#F4F4F4] justify-around gap-2">
            <div className="flex flex-col mt-2">
            <div className="text-blue-500 font-bold">Due Date</div>
            <div className="mt-2"> On or Before <br/>30th November</div>
            </div>
            <div className="flex flex-col mt-2">
            <div className="text-red-600 font-bold">Penalty Fees</div>
            <div className="mt-2"><span className='font-bold'>₹200 </span>per day</div>
            </div>
        </div>
        </div>
        {/*End*/}
        {/*6th block */} 
        <div className="w-[390px] h-[270px] flex flex-col items-center rounded-2xl shadow-xl shadow-blue-100">
        <div className="flex w-[50px] mt-[-20px] h-[40px] ml-[-370px] border-2  rounded-xl font-bold text-white bg-gradient-to-r from-[#0076CE] to-[#9400D3] justify-center items-center">5<sup>th</sup></div>
        <div className="font-bold text-base mb-2">MCA Form MGT-7</div>
        <div className="font-normal ml-5 mr-5">Companies must annually report activities and finances to the registrar.</div>
        <div className="flex w-[90%] h-[130px] mt-3 rounded-2xl bg-[#F4F4F4] justify-around gap-2">
            <div className="flex flex-col mt-2">
            <div className="text-blue-500 font-bold">Due Date</div>
            <div className="mt-2"> On or Before <br/>31st December</div>
            </div>
            <div className="flex flex-col mt-2">
            <div className="text-red-600 font-bold">Penalty Fees</div>
            <div className="mt-2"><span className='font-bold'>₹200 </span>per day</div>
            </div>
        </div>
        </div>
        {/*End*/}
     </div>
    </div>
  )
}

export default Services