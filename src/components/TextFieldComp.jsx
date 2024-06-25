import React from 'react'
export default function TextFieldComp({label, name, value, onChange,placeholder, type,error,errorMessages}) {
  return (
    <div>
      <p className={`text-[15px] mb-3 ${error && "text-primaryPink"}`}>{label}</p>
      <input type={type} className={`w-full bg-[transparent] text-[black] border ${error? "border-[#ED1568]":"border-[black]/10"} p-4 rounded-xl`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        
      />
      {error && <div className='flex gap-1 px-2 items-center  mt-[.5em]'>
        <p className='text-[#ED1568] text-[12px] '> {errorMessages}</p>
      </div>}
    </div>
  )
}
