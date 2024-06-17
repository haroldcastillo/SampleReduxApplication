import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/actions/user';
export default function UpdateUsers({data}) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues:{
      id : data._id,
      name: data.name,
      email: data.email
    },onSubmit:async (values)=>{
      dispatch(updateUser(values))
    }
  })
  return (
    <div className='grid gap-4' style={{gridTemplateRows:"1fr"}}>
      <input placeholder={data.name} className='bg-[#e6e6e6] p-1 rounded-xl border border-[#818181]' type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/> 
      <input placeholder={data.email} className='bg-[#e6e6e6] p-1 rounded-xl border border-[#818181]' type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/>
      <button className='bg-[#28356d] text-[white] rounded-xl p-2' onClick={formik.handleSubmit} type='submit'>
        Update User
      </button>
    </div>
  )
}
