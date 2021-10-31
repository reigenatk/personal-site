import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="section about">
        <header className="hero">
          <StaticImage
            src="../assets/img/relaxing.jpg"
            alt="relaxing"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Hobbies</h1>
              <h4></h4>
            </div>
          </div>
        </header>
        <div className="about-quote">
          <p>Aside from all the coding, I have a few hobbies!</p>
        </div>
        <div className="section-center projects-center">
          <h1 className="hobby-title">MUSIC PRODUCTION</h1>
          <div className="hobby">
            <div className="hobby-descriptions">
              <p>
                One of my passions is producing music. I think music is amazing
                since it is one of the most fundamental forms of art. Listening
                to someone's music can tell you so much about them.
              </p>
              <p>
                Making a good song today requires nothing but a software program
                and a whole lot of creativity! Technology is powerful, capable
                of emulating every instrument you can think of, with enough
                features to create any sound you can think of! I mostly listen
                to{" "}
                <a
                  id="edm-link"
                  href="https://www.youtube.com/watch?v=B4r0MdBQI6U"
                >
                  electronic music
                </a>
                , so that is what I make. I started making music around the
                summer of 2020 and I have{" "}
                <a
                  id="sc-link"
                  href="https://soundcloud.com/user-652744745-788731291/following
                "
                >
                  no plans to stop!
                </a>
              </p>
            </div>
            <StaticImage
              src="../assets/img/edmprod.jpg"
              alt="EDM"
              className="hobby-img" // applied this class to wrapper
              placeholder="blurred"
            ></StaticImage>
          </div>
          <h1 className="hobby-title">CYBERSECURITY</h1>
          <div className="hobby">
            <div className="hobby-descriptions">
              <p>
                Cybersecurity has always fascinated me. And yes, I got into it because of the whole cliche 
                with cool hackers and stuff, but over time I've come to appreciate how 
                much there is to learn in it. I like to do CTF (capture the flag)
                challenges in my free time, which are essentially security
                challenges written by people with some kind of vulnerability,
                and you need to identify and exploit that vulnerability for a
                flag.
              </p>
              <p>
                There are so many resources online, that any motivated
                individual can go and learn everything to become a security
                expert. I am still a relative beginner when it comes to CTF, but
                I am enjoying it a lot and hope to get good enough to tackle
                tough exams like the OSCP someday, or rank well in a CTF. But at
                the end of the day, learning more is what's most important.
              </p>
            </div>
            <StaticImage
              src="../assets/img/ctf.png"
              alt="EDM"
              className="hobby-img" // applied this class to wrapper
              placeholder="blurred"
            ></StaticImage>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
