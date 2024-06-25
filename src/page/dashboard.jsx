import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchUsersList } from '../store/actions/user'
function Dashboard() {
  const dispatch = useDispatch()
  // const usersList = useSelector(state => state.user)
  useEffect(() => {
    dispatch(fetchUsersList())
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Dashboard