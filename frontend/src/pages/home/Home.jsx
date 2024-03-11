import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Messagecontainer from '../../components/messages/Messagecontainer'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[600px] md:w-[1000px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-4 border-white'>
        <Sidebar/>
        <Messagecontainer/>
    </div>
  )
}

export default Home
