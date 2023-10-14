import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Middlebox = () => {
  const [name,setName]=useState('');
  const navigate=useNavigate();
  const handleSearch=()=>{
    console.log(name)
    navigate(`/search/${name}`);
  }
  return (
    <div className=' sm:flex justify-center ml-[-20px] gap-[120px] items-center w-screen h-fit p-2 md:ml-2'>
        <div className="flex-col">
            <div className="font-bold text-[60px]">Find <span className='bg-gradient-to-r from-[#0076CE] to-[#9400d3] bg-clip-text text-transparent'>Partners</span> (CAs)</div>
            <div className="font-bold text-[60px]">available online</div>
            <div className='text-gray-500'><span className='font-semibold'>CONNECT</span> with us where your services are listed and visible to a myriad <br/>of businesses seeking CA’s for compliance support</div>
        <div className="flex justify-between items-center h-[60px] border-2 mt-5 border-gray-300 rounded-xl">
          <input type='text' className='ml-5 h-[58px] w-[75%] rounded-xl outline-none' placeholder='Search by name' value={name} onChange={(e)=>setName(e.target.value)}></input>
          <button className='bg-blue-500 h-[60px] text-white rounded-xl w-[25%]' onClick={handleSearch}>Search</button>
        </div>
        </div>
        <div className=" hidden sm:flex justify-end items-center h-[400px]">
          <img src='/public/Left.png' className='h-[340px] w-[500px]'/>
        </div>
    </div>
  )
}

export default Middlebox