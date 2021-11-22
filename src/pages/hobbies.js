import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <SEO title="Hobbies" />
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
          <p>More of my interests!</p>
        </div>
        <div className="section-center projects-center">
          <h1 className="hobby-title">MUSIC PRODUCTION</h1>
          <div className="hobby">
            <div className="hobby-descriptions">
              <p>
                One of my passions is producing music. I'm not very good yet at
                it but I hope to improve in the future.
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
                summer of 2020 and I have no plans to stop!
              </p>
            </div>
            <StaticImage
              src="../assets/img/edmprod.jpg"
              alt="EDM"
              className="hobby-img" // applied this class to wrapper
              placeholder="blurred"
              imgStyle={{ objectFit: "contain" }}
            ></StaticImage>
          </div>
          <h1 className="hobby-title">CYBERSECURITY</h1>
          <div className="hobby">
            <div className="hobby-descriptions">
              <p>
                Cybersecurity has always fascinated me. And yes, I got into it
                because of the whole cliche with cool hackers and stuff, but
                over time I've come to appreciate how much there is to learn in
                it. I like to do CTF (capture the flag) challenges in my free
                time, which are essentially security challenges written by
                people with some kind of vulnerability, and you need to identify
                and exploit that vulnerability for a flag.
              </p>
              <p>
                There are so many resources online, that any motivated
                individual can go and learn everything to become a security
                expert. I am still a relative beginner when it comes to CTF, but
                I am enjoying it a lot and hope to get good enough to tackle
                tough exams like the OSCP someday, or rank well in a CTF.
              </p>
            </div>
            <StaticImage
              src="../assets/img/ctf.png"
              alt="EDM"
              className="hobby-img" // applied this class to wrapper
              placeholder="blurred"
              imgStyle={{ objectFit: "contain" }}
            ></StaticImage>
          </div>
          <h1 className="hobby-title">Game Development</h1>
          <div className="hobby">
            <div className="hobby-descriptions">
              <p>
                Games are awesome (in moderation of course &#128527;). In the
                past when I have finished playing a really good game
                (Subnautica, Witcher 3, Portal 2, etc.) it's really inspiring to
                me as a programmer. Because, at the end of every game is a team
                of people (sometimes just a few) that created it from absolutely
                nothing but their blank game engine and a whole lot of
                creativity and hard work.
              </p>
              <p>
                Now I'm not trying to become the next Toby Fox. Nor am I going
                into the game dev industry, at least for now. It's still just a
                hobby. But it would be pretty cool if I could get somewhat good
                at developing games... Maybe even release something someday onto
                a store for others to play. After all, the biggest flex (to me
                at least) is being able to say that you helped developed a
                really good game. Knowing that you helped brighten the day of
                millions of players around the globe- that's seriously awesome
              </p>
            </div>
            <StaticImage
              src="../assets/img/hollowknight.jpg"
              alt="EDM"
              className="hobby-img" // applied this class to wrapper
              placeholder="blurred"
              layout="fullWidth"
              imgStyle={{ objectFit: "contain" }}
            ></StaticImage>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
