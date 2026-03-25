import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
    <nav className="navbar">
      <h2>Gelfand Lab</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/research">Research</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
    )
}