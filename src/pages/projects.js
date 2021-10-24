import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllProjects from "../components/AllProjects"
import SEO from "../components/SEO"

const Projects = () => {
  return (
    <Layout>
    <SEO title="Projects" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/img/projectbg.jpg"
            alt="projects"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Coding Projects</h1>
              <h4></h4>
            </div>
          </div>
        </header>
        <div className="project-quote">
          <p>What we learn to do, we learn by doing. ~Thomas Jefferson</p>
        </div>
        <div className="project-description">
          <h4>
            A non-exhaustive list of the projects I have completed (and will
            complete in the future). You can filter for certain languages below
            using the tags.
          </h4>
        </div>
        <AllProjects></AllProjects>
      </main>
    </Layout>
  )
}

export default Projects
