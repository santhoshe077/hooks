import React from 'react'
import {Outlet,Link} from "react-router-dom";
import "./Layout.css"
export default function Layout() {
  return (
    <div>
        <nav>
            <ul className='navbar'>
            <li><Link className='navlink' to="/" >Home</Link></li>
            <li><Link className='navlink' to="/about">About</Link></li>
            <li><Link className='navlink' to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
