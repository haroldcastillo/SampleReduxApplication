import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { createUser } from '../store/actions/user'
function AddUsers() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues:{
      name:"",
      email:""
    },onSubmit:async (values)=>{
      formik.resetForm();
      dispatch(createUser(values))
    }
  })
  return (
    <div className='flex gap-4 '>
      <input className='bg-[#e6e6e6] p-1 rounded-xl border border-[#818181]' type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/>
      <input className='bg-[#e6e6e6] p-1 rounded-xl border border-[#818181]' type="text" name="email" value={formik.values.email} onChange={formik.handleChange}/>
      <button onClick={formik.handleSubmit} type='submit' className='bg-[#28356d] text-[white] rounded-xl p-2'>
        Add User  
      </button>
    </div>
  )
}

export default AddUsers