import React from 'react'
import { Navigate, Outlet } from "react-router-dom";


const authUser = () => {
  const user = window.localStorage.getItem("app-token");

  return user
}

function ProtectedRoute() {
  const isAuth = authUser();
  return (
    isAuth ? <Outlet /> : <Navigate to='/' />
  )
}

export default ProtectedRoute