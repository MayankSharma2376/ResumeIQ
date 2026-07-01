import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface Props {
    children: React.ReactNode
}

function ProtectedRoute({children}: Props) {
    const {user, loading} = useAuth()
    if(loading){
        return <h1>Loading.....</h1>
    }

    if(!user){
        return <Navigate to="/login" replace/>
    }
  return children
}

export default ProtectedRoute