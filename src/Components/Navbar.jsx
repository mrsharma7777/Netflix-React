import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="/logo.png" className="logo" />

            <select className="dropdown">
                <option>English</option>
                <option>हिन्दी</option>
            </select>

            <button className="signin">Sign In</button>
        </nav>
    )
}

export default Navbar