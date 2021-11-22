import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home Page" />
      <main className="page">
        <section className="home-page">
          <article class="website-description">
            <h2>Hi! I'm Richard.</h2>
            <p>
              And this is my personal site! I've always wanted to have a place
              where I can jot down everything about myself, not just for
              employers and friends, but also for myself. So I'm excited to have
              made this!
            </p>
            <p>
              I am studying computer science at the{" "}
              <span class="font-uiuc">
                University of Illinois, Urbana Champaign.
              </span>{" "}
              I am planning to graduate in{" "}
              <span class="green">Spring of 2023.</span> You can see the
              companies I've interned at, my coursework, or some of my projects,
              using the navigation above.
            </p>
          </article>
          <article>
            <StaticImage
              src="../assets/img/meee.jpg"
              alt="a person"
              className="home-img" // applied this class to wrapper
              placeholder="dominantColor"
            ></StaticImage>
            <p className="better-pictures">
              I need better pictures of myself &#128566;
            </p>
            <div class="extra-links">
              <div class="resume extra-links-item btn-text">
                <a
                  class="u-remove-underline"
                  href="img/Richard_Ma_Resume.pdf"
                  download
                >
                  <div className="resume-div">
                    {/* <img id="resume_pic" src="resume-image.jpg" /> */}
                    <h5 class="resume-text">Resume</h5>
                  </div>
                </a>
              </div>
              <div class="extra-links-item btn-text">
                <a
                  class="u-remove-underline quick-links"
                  href="https://github.com/reigenatk"
                >
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
              <div class=" extra-links-item btn-text">
                <a
                  class="u-remove-underline quick-links"
                  href="https://soundcloud.com/user-652744745-788731291"
                >
                  <i class="fa fa-soundcloud" aria-hidden="true"></i>
                </a>
              </div>
              <div class="extra-links-item btn-text">
                <a
                  class="u-remove-underline quick-links"
                  href="https://codeforces.com/profile/richardma2002"
                >
                  <img class="quick-links-pic" src="codeforces.PNG" />
                </a>
              </div>
              <div class="extra-links-item btn-text">
                <a
                  class="u-remove-underline quick-links"
                  href="https://www.linkedin.com/in/richard-ma-151746b1/"
                >
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  )
}
