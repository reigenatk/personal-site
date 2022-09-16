import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
// import logo from "../assets/images/logo.svg"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesConfig from "../components/particle-config"

const Navbar = () => {
  const [show, setShow] = useState(false)
  const particlesInit = async main => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }

  const particlesLoaded = container => {
    console.log(container)
  }

  return (
    <nav className="navbar">
      {/* <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
      </div> */}

      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="my-name">
            <p>Richard&nbsp;Ma</p>
          </Link>
          <button
            className="nav-btn btn"
            onClick={() => {
              setShow(!show)
            }}
          >
            <FiAlignJustify></FiAlignJustify>
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          {/* activeClassName assigns the class when on that specific link's page */}
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            <p>Home</p>
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            <p>About</p>
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            <p>Projects</p>
          </Link>
          <Link
            to="/experience"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => {
              setShow(false)
            }}
          >
            <p>Experience</p>
          </Link>
          <div className="blog-link">
            <Link
              to="/blog"
              className="btn"
              onClick={() => {
                setShow(false)
              }}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
