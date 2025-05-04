import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Outlet />
        {/* This is where the child routes will be rendered */}
    </div>
  )
}

export default Layout