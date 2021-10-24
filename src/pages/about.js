import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
const About = () => {
  return (
    <Layout>
      <SEO title="About"/>
      <main className="page">
        <div class="extra-links">
                  <div class="resume extra-links-item btn-text">
                    <a
                      class="u-remove-underline"
                      href="img/Richard_Ma_Resume.pdf"
                      download
                    >
                      <p class="u-inline-block resume-text">Resume &rarr;</p>
                      <img id="resume_pic" src="resume-image.jpg" />
                    </a>
                  </div>
                  <div class="github extra-links-item btn-text">
                    <a
                      class="u-remove-underline quick-links"
                      href="https://github.com/reigenatk"
                    >
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div class="soundcloud extra-links-item btn-text">
                    <a
                      class="u-remove-underline quick-links"
                      href="https://soundcloud.com/user-652744745-788731291"
                    >
                      <i class="fa fa-soundcloud" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div class="codeforces extra-links-item btn-text">
                    <a
                      class="u-remove-underline quick-links"
                      href="https://codeforces.com/profile/richardma2002"
                    >
                      <img class="quick-links-pic" src="codeforces.PNG" />
                    </a>
                  </div>
                </div>
      </main>
    </Layout>
  )
}

export default About
