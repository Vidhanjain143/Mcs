import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {LiaPeopleCarrySolid} from 'react-icons/lia'
import {PiNewspaperDuotone} from 'react-icons/pi'
import {HiAcademicCap} from 'react-icons/hi'
const About = () => {
  return (
    <div className="flex h-fit mt-10 justify-center sm:h-[600px]  p-2">
        <div className="h-fit w-[50%] flex flex-col items-center ">
            <div className="text-[50px] font-bold"><span className='bg-gradient-to-r from-[#0076CE] to-[#9400d3] bg-clip-text text-transparent'>All-in-One</span> platform</div>
            <div className="text-[50px] font-bold">that Makes Easier</div>
            <div className="ml-[150px] mr-[150px] mt-4">
               <div className="text-[18px]"> We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</div>
               <div className="grid grid-flow-row grid-cols-1 mt-5 gap-y-8 gap-x-20 md:grid-cols-2 ml-[-80px] sm:h-fit sm:ml-0">
                <div className="flex items-center w-[200px]">
                    <div className="text-blue-500 text-[35px] mr-2"><BiSearchAlt/></div>
                    <div className="text-[16px]"><span className='font-semibold'>SEARCH</span> for vital company information </div>
                </div>
                <div className="flex items-center w-[200px]">
                    <div className="text-blue-500 text-[35px] mr-2"><LiaPeopleCarrySolid/></div>
                    <div className="text-[16px]"><span className='font-semibold'>CONNECT</span> with the resources to meet your business needs </div>
                </div>
                <div className="flex items-center w-[200px]">
                    <div className="text-blue-500 text-[35px] mr-2"><PiNewspaperDuotone/></div>
                    <div className="text-[16px]"><span className='font-semibold'>RESEARCH</span> and generate reports that drive growth </div>
                </div>
                <div className="flex items-center w-[200px]">
                    <div className="text-blue-500 text-[35px] mr-2"><HiAcademicCap/></div>
                    <div className="text-[16px]"><span className='font-semibold'>ACADEMY</span> to give you the skills for success in your career </div>
                </div>
               </div>
        </div>
        </div>
        <div className="flex flex-col h-fit w-[50%] sm:h-[500px]">
            <div className='flex'>
                <div className="flex flex-col items-end mt-16">
                <div className="w-fit bg-purple-200 p-1 rounded-xl mb-2">Hey, check out loreumipsum services. </div>
                <div className="w-fit bg-purple-200 p-1 rounded-xl mb-2 ">I learned from their videos, got my first job.</div>
                <div className="w-fit bg-purple-200 p-1 rounded-xl mb-2">You won't be disappointed with their services.</div>
                <div className="w-fit bg-blue-100 p-1 rounded-xl mb-2 mt-5">I got a perfect analysis report from them too</div>
                <div className="w-fit bg-blue-100 p-1 rounded-xl mb-2">Oh,that's great</div>
                </div>
                <div className=""> <img src='/public/Student.png'/></div>
            </div>
            <div className="lg:mt-[-130px] md:mt-[-100px] "><img src='/public/Maskgroup.png'/></div>
        </div>
    </div>
  )
}

export default About