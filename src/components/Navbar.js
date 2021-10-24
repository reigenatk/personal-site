import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
// import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
         <Link to="/">
            <p>Richard&nbsp;Ma</p>
          </Link> 
          <button className="nav-btn btn" onClick={() => {
              setShow(!show)
          }}>
            <FiAlignJustify></FiAlignJustify>
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          {/* activeClassName assigns the class when on that specific link's page */}
          <Link to="/" className="nav-link" activeClassName="active-link" onClick={() => {
              setShow(false)
            }}>
            Home
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link" onClick={() => {
              setShow(false)
            }}>
            About&nbsp;Me
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            activeClassName="active-link" onClick={() => {
              setShow(false)
            }}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className="nav-link"
            activeClassName="active-link" onClick={() => {
              setShow(false)
            }}
          >
            Experience
          </Link>
          <div className="nav-link blog-link">
            <Link to="/blog" className="btn" onClick={() => {
              setShow(false)
            }}>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
