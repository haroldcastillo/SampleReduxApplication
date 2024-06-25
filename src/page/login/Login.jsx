import React from 'react'
import { useFormik } from 'formik'
import TextFieldComp from '../../components/TextFieldComp'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/actions/user'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues:{
      email:"haroldcastillo@gmail.com",
      password:"sample"
    },onSubmit:async (values)=>{
      formik.resetForm();
      dispatch(loginUser(values))
      navigate('/')
    }
  })
  return (
    <div className='min-h-[700px] flex justify-center items-center'> 
      
      <div className='bg-[white] shadow-lg p-4 rounded-md w-[400px] border border-[black]/10 flex flex-col gap-4'>
        <TextFieldComp label='Email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
        <TextFieldComp label='Password' name='password' value={formik.values.password} onChange={formik.handleChange} type='password'/>
        <button onClick={formik.handleSubmit} type='submit' className='bg-[#28356d] text-[white] rounded-xl p-2'>
          Login
        </button>
      </div>
    </div>
  )
}
