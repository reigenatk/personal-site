import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      <section className="section about">
        <header className="hero">
          <StaticImage
            src="../assets/img/galaxy.jpg"
            alt="relaxing"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>About Me</h1>
              <h4></h4>
            </div>
          </div>
        </header>
        <div className="section-center projects-center">
          <div className="hobby">
            <div className="hobby-descriptions-2">
              <p className="hobby-text">
                Hello. I'm assuming you've come to learn more about who I am as
                a person.{" "}
                <span className="lg">
                  Honestly, I don't really know the answer to that
                  question fully. 
                </span>{" "}
                I admire people who do. I'm still exploring things and trying to figure out what I like.
                <br />
                <br />
                Aside from school,{" "}
                <span className="lb">
                  I do (poorly) maintain a few hobbies
                </span>{" "}
                which you can read about using the buttons below. Oh, I also made a list of 
                some of my <span className="lr">favorite stuff.</span>
                <br />
                <br />I will now proceed to put <span className="g"> an image of a cat</span> on the right,
                so this page doesn't look so barren. Cats are pretty cool. It's not my cat
                though.
              </p>
              <div class="extra-links-2">
                <div class="extra-links-item btn-text">
                  <a class="u-remove-underline quick-links" href="/hobbies">
                    <p>Hobbies</p>
                  </a>
                </div>
                <div class="extra-links-item btn-text">
                  <a class="u-remove-underline quick-links" href="/favorite">
                    <p>Favorites</p>
                  </a>
                </div>
              </div>
            </div>
            <StaticImage
              src="../assets/img/cat.jpg"
              alt="EDM"
              className="hobby-img" // applied this class to wrapper
              placeholder="blurred"
              imgStyle={{ objectFit: "contain" }}
            ></StaticImage>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
