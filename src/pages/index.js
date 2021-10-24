import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home Page"/>
      {/* <header class="header"> */}
        {/* <div class="header__logo-box">
          <img src="img/nepi.png" alt="logo" class="header__logo" />
        </div> */}
        {/* <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Richard Ma</span>
            <span class="heading-primary--sub">Lifelong Learner</span>
          </h1>

          <a href="#about" class="btn-start btn-white btn-animated">
            Continue!
          </a>
        </div> */}
        
      {/* </header> */}
      <main className="page">
        <section className="home-page"> 
          <article>
            <h2>Hi! I'm Richard.</h2>
            <p>
              And this is my personal site! I think having a place on the internet for people
              to learn more about you is really cool. Please feel free to look around and learn more about me.
            </p>
            <p>
              I am studying computer science at the University of Illinois, Urbana Champaign.
              I am planning to graduate in Spring of 2023. I have interned at two companies, Capital One and Synchem, 
              and am looking to enter the software engineering industry after graduation.
            </p>
            <p>
              I need more good pictures of myself...
            </p>
            <Link to="/about" className="btn">
              Continue...
            </Link>
          </article>
          <StaticImage
            src="../assets/img/meee.jpg"
            alt="a person"
            className="home-img" // applied this class to wrapper
            placeholder="blurred"
          ></StaticImage>
        </section>
      </main>
    </Layout>
  )
}
