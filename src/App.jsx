import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import {fetchUser,deleteUser} from './store/actions/user'
import UpdateUsers from './components/UpdateUsers'
import AddUsers from './components/AddUsers'
function App() {
  const dispatch = useDispatch()
  const users = useSelector(state=>state.user.users)
  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  if(users?.user?.isloading) return <h1>Loading...</h1>
  return (
    <>
      <div className='p-4'>
        <AddUsers/>
        <h6 className='text-[25px]'>Users</h6>
        <div className='h-full grid gap-4' style={{gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))"}}>
          {users.data?.map((user,index)=>(
            <div key={index}>
              <div  className=' w-full p-4 my-2 rounded-xl shadow-md' onClick={()=>{
                dispatch(deleteUser({id:user._id}))
              }}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
              <div>
                <UpdateUsers data={user}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
