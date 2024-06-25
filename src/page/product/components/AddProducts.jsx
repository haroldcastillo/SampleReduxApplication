import React from 'react'
import { useFormik } from 'formik'
import TextFieldComp from '../../../components/TextFieldComp'

import { createProduct } from '../../../store/actions/product'
import { useDispatch } from 'react-redux'
export default function AddProducts() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues:{
      name:"",
      price:0,
      image:"",
      description:"",
      stock:0,
      category:"",
      brand:"",
    },
    onSubmit:(values)=>{
      dispatch(createProduct(values))
      formik.resetForm();
    }
  })
  return (
    <div className='flex flex-col gap-4 bg-white rounded-md shadow-md p-4'>
      <h6 className='text-[25px] font-semibold text-[black]/70'>Add Products</h6>
      <TextFieldComp
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextFieldComp
        label="Brand"
        name="brand"
        value={formik.values.brand}
        onChange={formik.handleChange}
      />
      <TextFieldComp
        label="Price"
        name="price"
        type={'number'}
        value={formik.values.price}
        onChange={formik.handleChange}
      />
      <TextFieldComp
        label="Stock"
        name="stock"
        type={'number'}
        value={formik.values.stock}
        onChange={formik.handleChange}
      />
      <TextFieldComp
        label="Category"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
      />
      <TextFieldComp
        label="Image"
        name="image"
        value={formik.values.image}
        onChange={formik.handleChange}
      />
      <TextFieldComp
        label="Description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      <button  type="submit" onClick={
        (e)=>{
          e.preventDefault(); 
          formik.handleSubmit()
        }} className='bg-[#28356d] mt-4 text-[white] rounded-xl p-2'>
        Add Product
      </button>
    </div>
  )
}
