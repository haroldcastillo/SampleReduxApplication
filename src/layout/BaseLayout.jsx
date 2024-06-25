import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function BaseLayout() {
  const navigate = useNavigate()
  return (
    <div>
      <header className='flex items-center justify-between px-4 py-7 bg-[white] shadow-md'>
        <h1 className='text-[20px] font-semibold'>Sample Project</h1>
        <nav>
          <ul className='flex gap-4'>
            <li onClick={()=>{navigate('/products')}}>Products</li>
          </ul>
        </nav>
      </header>
      <div className='p-4'>
        <Outlet/>
      </div>
    </div>
  )
}
