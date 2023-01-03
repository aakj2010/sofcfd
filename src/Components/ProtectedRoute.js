// import React from 'react'
// import { Navigate, Outlet, Redirect, Route, useNavigate } from "react-router-dom";
// import LoginPage from './LoginPage';


// const authUser = () => {
//   const user = { login: true };

//   return user && user.login
// }

// export default function ProtectedRoute(props) {


//   // const navigate = useNavigate()
//   // const user = window.localStorage.getItem("app-token");
//   // if (!user) {
//   //   return navigate("/");
//   // } else {
//   //   return <Route {...props} />;
//   // }

//   isAuth ? <Outlet /> : <Navigate to='/' />

// }


import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import LoginPage from './LoginPage';


const authUser = () => {
  // const user = { login: true };
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