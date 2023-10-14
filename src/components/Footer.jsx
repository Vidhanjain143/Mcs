import React from 'react'
import {BsInstagram,BsLinkedin,BsFacebook,BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
    <div className='h-[260px] bg-gradient-to-r from-[#0076CE] to-[#9400d3]'>
    <div className=" mt-10 flex p-[30px] pl-[30px] justify-around">
            <div className="flex flex-col">
            <div className=""><img src="/public/image1.png"/></div>
            <div className="text-white mt-4">India's first platform dedicated to simplifying partner search</div>
            </div>
            <div className="flex gap-8">
            <div className="flex flex-col">
                <div className="font-bold text-white mb-4"> Company</div>
                <div className='text-white'>About</div>
                <div className='text-white'>Pricing</div>
                <div className='text-white'>Careers</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-white mb-4"> Solutions</div>
                <div className='text-white'>Search</div>
                <div className='text-white'>Connect</div>
                <div className='text-white'>Research</div>
                <div className='text-white'>Academy</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-white mb-4"> Resouces</div>
                <div className='text-white'>Blogs</div>
                <div className='text-white'>Forms</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-white mb-4"> Support</div>
                <div className='text-white'>Help</div>
                <div className='text-white'>Contact us</div>
            </div>
            <div className="flex flex-col">
                <div className="font-bold text-white mb-4"> Legal</div>
                <div className='text-white'>Privacy</div>
                <div className='text-white'>Terms</div>
                <div className='text-white'>Accessibilty</div>
            </div>
            </div>
    </div>
    <div className="border-white border-2 w-[80%] m-auto"></div>
    <div className="flex justify-between w-[80%] m-auto items-center">
        <div className="text-white">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</div>
        <div className="flex justify-around text-white gap-6 pr-4">
            <BsFacebook/>
            <BsInstagram/>
            <BsLinkedin/>
            <BsWhatsapp/>
        </div>
    </div>
    </div>
    <div className="h-[30px] bg-black text-white flex items-center justify-center text-sm">Registered trademark of India Private Limited © 2023 loerumipsum Inc. All Rights Reserved</div>
    </>
  )
}

export default Footer