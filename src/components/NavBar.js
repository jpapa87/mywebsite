import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/story">My Story</NavLink>
    </div>
)
}

export default NavBar
