import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/SEO"
import data from "../constants/jobs"

import { FaAngleDoubleRight } from "react-icons/fa"

const Experience = () => {
  const [value, setValue] = React.useState(0)
  const { company, position, date, description } = data[value]
  return (
    <Layout>
      <SEO title="Experience" />
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
      <main className="page">
      <div className="project-description">
          <h4>
           Checkout my Linkedin/resume for more details, I also got too lazy to update this page lol
          </h4>
        </div>
        <div className="jobs-center">
          {/* btn container */}
          <div className="btn-container">
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={index === value ? "job-btn active-btn" : "job-btn"}
                  onClick={() => setValue(index)}
                >
                  {item.company}
                </button>
              )
            })}
          </div>
          {/* job info */}
          <article className="job-info">
            <h3>{position}</h3>
            <h4>{company}</h4>
            <p className="job-date">{date}</p>
            {description.map((item, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{item}</p>
                </div>
              )
            })}
          </article>
        </div>
        <header className="hero">
          <StaticImage
            src="../assets/img/collegehall.jpg"
            alt="office"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Coursework</h1>
              <h4></h4>
            </div>
          </div>
        </header>

        <div className="courses">
          <div className="course">
            <h3>CS 374: Algorithms</h3>
          </div>
          <div className="course">
            <h3>ECE 408: Applied Parellel Programming</h3>
          </div>
          <div className="course">
            <h3>CS 225: Data Structures (A-)</h3>
          </div>
          <div className="course">
            <h3>CS 173: Discrete Math (A)</h3>
          </div>
          <div className="course">
            <h3>STAT 400 (A-)</h3>
          </div>
          <div className="course">
            <h3>ECE 391: Operating Systems</h3>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Experience
