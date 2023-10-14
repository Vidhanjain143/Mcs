import React from 'react'
import Topbar from './Topbar'
import Middlebox from './Middlebox'

const Outerbox = () => {
  return (
    <div className='w-screen h-[500px]'>
        <Topbar/>
        <Middlebox/>
    </div>
  )
}

export default Outerbox