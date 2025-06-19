import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <>
    <Link to="/Home">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Education">Skill/Education</Link>
    <Link to="/Projects">Projects</Link>
    <Link to="/Contact">Contact</Link>
    </>
  )
}
