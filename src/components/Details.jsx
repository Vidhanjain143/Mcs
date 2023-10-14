import React, { useState,useEffect } from 'react'
import Topbar from './Topbar'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import Recommended from './Recommended'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Error from './Error'
const Details = () => {
    const name=useParams();
    const [data,setData]=useState([]);
    const [found,setFound]=useState(false);
  useEffect(()=>{
     const search=name.name;
     console.log(search);
     const url=`http://localhost:3001/profiles?name=${search}`.toString();
     axios.get(url).then(res=>res.data).then((res)=>{setData(res); setFound(res.length>0)}).then((res)=>{console.log(data)}).catch((err)=>{console.log(err.message)})
  },[name])
  return (
    <div className="w-screen">
        <Topbar/>
        {found?
        <div className="flex h-fit w-[80%] m-auto mt-10 gap-[60px] mb-10">
           <LeftContainer data={data[0]}/>
           <RightContainer data={data[0]}/>
        </div>:<Error/>};
        <Recommended/>
        <Footer/>
    </div>
  )
}

export default Details