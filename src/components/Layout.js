import { Outlet } from "react-router-dom";
import React from 'react'
const Layout = () => {
  return (
    //Outlet is used to determine where to render child routes 
    <Outlet />
  )
}

export default Layout