import React from 'react'

export default function ProductCard({data}) {
  return (
    <div className='rounded-md bg-white shadow-md p-4'>
      <div className='overflow-hidden'>
        <img className='w-full' src={data.image} alt="" />
      </div>
      <p>{data.name}</p>
      <p>{data.category}</p>
      {data._id}
    </div>
  )
}
