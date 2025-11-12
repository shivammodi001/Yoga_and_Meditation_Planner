import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  // 1️⃣ Get the user data from Redux store
  const { user } = useSelector((state) => state.auth)

  // 2️⃣ If user exists -> render the protected page (children)
  // Otherwise -> redirect to "/"
  return user ? children : <Navigate to="/" replace />
}

export default ProtectedRoute
