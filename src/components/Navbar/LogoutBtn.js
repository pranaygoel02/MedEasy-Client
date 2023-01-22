import React from 'react'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../redux/actions/userAuthActions'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(userLogout())
        navigate('/user-authentication/login')
    }
  return (
    <div title='Logout'>
        <button onClick={handleLogout} className='px-2 py-1 border border-gray-400 hover:border-black hover:bg-black hover:text-white rounded-full transition-colors'>Logout</button>
    </div>
  )
}

export default LogoutBtn