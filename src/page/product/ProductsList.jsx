import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { fetchProductList } from '../../store/actions/product'
import ProductCard from './components/ProductCard'
import AddProducts from './components/AddProducts'
export default function ProductsList() {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.product.products)
  useEffect(()=>{
    dispatch(fetchProductList())
  },[])
  if(products.isLoading) return <h1>Loading...</h1>
  return (
    <div className='flex flex-col-reverse lg:grid gap-7' style={{gridTemplateColumns:"auto 500px"}}>
      <div className='grid gap-4' style={{gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))"}}>
        {products.data?.map((product,index)=>(
          <ProductCard key={index} data={product}/>
        ))} 
      </div>
      <div>
        <AddProducts/>
      </div>
    </div>
  )
}
