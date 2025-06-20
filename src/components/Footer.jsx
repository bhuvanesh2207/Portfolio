import React from 'react'
import {FaGithubSquare , FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import '../styles/Footer.css'
export default function Footer() {
  return (
    < >
        <div className="footer" >
            <p>©  {new Date().getFullYear()} Bhuvanesh. All Rights Reserved.</p>
        
            <div className="footer_links">

                <a href="https://github.com/bhuvanesh2207" target="_blank" rel="noopener noreferrer">
                    <FaGithubSquare  size={24} />
                </a>                

                <a href="https://www.linkedin.com/in/bhuvanesh-kr-6a977b282/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size ={24}/>
                </a>

                <a href="mailto:bhuvaneshb546@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope  size={22} />
                </a>
        
            </div>

        </div>
    </>
  )
}
