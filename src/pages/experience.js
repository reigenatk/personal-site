import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"

const Experience = () => {
  return (
    <Layout>
    <SEO title="Experience" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/img/office.jpg"
            alt="office"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Work Experience</h1>
              <h4></h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}

export default Experience
