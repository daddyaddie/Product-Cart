import React from 'react'
import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <div
        onClick={()=>router.push('/')}
        className='text-xl lg:text-2xl font-bold cursor-pointer'
      >
        <span style={{ color: 'rgba(38, 242, 172, 0.96)' }}>Sh</span>
        <span className="text-gray-800">opiee</span>
      </div>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar