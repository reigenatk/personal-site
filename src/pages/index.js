import React, {useState, useEffect } from "react"
import Layout from "../components/Layout"
// import { Helmet } from "react-helmet"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"
import SEO from "../components/SEO"

let getLastModifiedDate = () => {
  var xhttp = new XMLHttpRequest();
  let days_ago, years_ago, months_ago, hours_ago;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let repos = JSON.parse(this.responseText);
      repos.forEach((repo) => {
        if (repo.name == "personal-site") {
          let lastModifiedDate = new Date(repo.updated_at);
          let today = new Date();
          let diff = today - lastModifiedDate;
          console.log(diff);
          // https://www.unixtimestamp.com/
          years_ago = Math.floor(diff / 31556926)
          diff -= years_ago * 31556926
          months_ago = Math.floor(diff / 2629743)
          diff -= months_ago * 2629743
          days_ago = Math.floor(diff / 86400);
          diff -= days_ago * 86400
          hours_ago = Math.floor(diff / 3600);
          lastModifiedDate = "Site last deployed: " + years_ago + " years, " + months_ago + " months, " +
            days_ago + " days, " + hours_ago + " hours ago";
          console.log(lastModifiedDate)
          return lastModifiedDate;
        }
      });
    }
  };

  // third param = false for synchronous call
  xhttp.open("GET", "https://api.github.com/users/reigenatk/repos", false);
  xhttp.send();
}

export default function Home() {

  const [lastUpdated, setlastUpdated] = useState(0);
  useEffect(() => {
    setlastUpdated(getLastModifiedDate());
  });
  return (
    <Layout>
      <SEO title="Home Page" />
      <main className="page">
        <section className="home-page">
          <article class="website-description">
            <h2>Hi! I'm Richard.</h2>
            <p>
              And this is my personal site! I've always wanted to have a place
              where I can jot down everything about myself, mainly for my own sake.
              It's a bit like keeping a diary of who I am, I suppose. Anyways, feel free
              to click around and learn more about me.
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
            {/* <StaticImage
              src="../assets/img/me2.jpg"
              alt="a person"
              className="home-img about-img" // applied this class to wrapper
              placeholder="dominantColor"
            ></StaticImage> */}

            <StaticImage
              src="https://images.unsplash.com/photo-1564801720666-83b2d7a3de73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhcnJ5JTIwc2t5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              alt="a person"
              className="home-img about-img" // applied this class to wrapper
              placeholder="dominantColor"
            ></StaticImage>
            <p className="better-pictures">
              
            </p>
            <div class="extra-links">
              <div class="resume extra-links-item btn-text">
                <a class="u-remove-underline" href="https://docdro.id/YS8DPkL">
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
                  href="https://codeforces.com/profile/rmaa"
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
              <div class="extra-links-item btn-text">
                <a
                  class="u-remove-underline quick-links"
                  href="https://www.youtube.com/channel/UCgp2ZsLgfX0RGvJfMoNrFEw"
                >
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
              </div>
              <div class="extra-links-item btn-text">
                <a
                  class="u-remove-underline quick-links"
                  href="https://steamcommunity.com/profiles/76561198967382598/"
                >
                  <i class="fa fa-steam" aria-hidden="true"></i>
                </a>
              </div>
              <div class="extra-links-item btn-text">
                <a
                  class="u-remove-underline quick-links"
                  href="https://reigenatk.itch.io/"
                >
                  <img class="quick-links-pic" src="itch.png" />
                </a>
              </div>
            </div>
            <p className="last-modified">{lastUpdated}</p>
          </article>
        </section>
      </main>
    </Layout>
  )
}
