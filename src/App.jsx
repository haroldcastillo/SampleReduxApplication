import { useState } from 'react'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'
import {fetchUser} from './store/actions/user'
function App() {
  const dispatch = useDispatch()
  const users = useSelector(state=>state)
  console.log(users)

  return (
    <>
      <div className='h-full flex flex-col items-center p-4'>
        <button className='px-4 py-2 rounded bg-[gray]' onClick={()=>{dispatch(fetchUser())}}>Get Requests</button>
        <div>
          <p>USERS:</p>
          {/* {users?.map((user,index)=>(
            <div key={index} className='flex flex-row items-center justify-between w-full p-4 my-2 bg-[gray]'>
              <p>{user.name}</p>
            </div>
          ))} */}
        </div>
      </div>
    </>
  )
}

export default App
