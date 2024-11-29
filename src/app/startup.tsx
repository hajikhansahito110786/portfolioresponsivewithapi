import React from 'react'
import Sidebar from './sidebar'
import Detail from './detail'

const Startup = () => {
  return (
    <div className="flex overflow-hidden h-screen" >

<div className="w-1/15">

<Sidebar/>
</div>

<div className=" w-1/15">@@  </div>
<div className="bg-red-400  w-full">
<Detail/>
</div>


    </div>
  )
}

export default Startup