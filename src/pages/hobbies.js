import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const hobbies2 = () => {
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

        <div className="section-center projects-center">
          <div className="about-quote">
            <p>More of my interests! Check out my blog, I'm usually babbling about these topics...</p>
          </div>
          <h1 className="hobby-title">MUSIC PRODUCTION</h1>
          <div className="hobby">
            <div className="hobby-descriptions">
              <p>
                One of my passions is producing music. I'm not very good yet at
                it but I hope to improve in the future.
              </p>
              <p>
                Making a good song today requires nothing but a software program
                and <span className="lb">a whole lot of creativity!</span> Technology is powerful, capable
                of emulating every instrument you can think of, and even more, with the rise of
                DSP technology and synthesizers. I mean, <a className="lg" href="https://twitter.com/lydoel/status/1501922523335827461">check this out!</a>
                <br></br>
                Anyways, I mostly listen
                to{" "}
                <a
                  id="edm-link"
                  href="https://www.youtube.com/watch?v=B4r0MdBQI6U"
                >
                  electronic music
                </a>
                , so that is what I make. I started making music around the
                summer of 2020 and I have no plans to stop! For technicalities I use Ableton
                and have way too many soft synths, the problem these days is finding motivation 💀
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
                because of the whole cliche with <span className="ly">cool hackers and stuff</span>, but
                over time I've come to appreciate how much there is to learn in
                it. I like to do CTF (capture the flag) challenges in my free
                time, which are essentially security challenges written by
                people with some kind of vulnerability, and you need to identify
                and exploit that vulnerability for a flag.
              </p>
              <p>
                <span className="lo">There are so many resources online</span>, that any motivated
                individual can go and learn everything to become a security
                expert. I am still a relative beginner when it comes to CTF, but
                I am enjoying it a lot and hope to get good enough to tackle
                tough exams like the OSCP someday, or rank well in a CTF. I am certainly thinking 
                about pursuing a career in security, given that I gain enough knowledge.
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
                into the game dev industry, <span className="lg">at least for now.</span> It's still just a
                hobby. But it would be pretty cool if I could get somewhat good
                at developing games... Maybe even release something someday onto
                a store for others to play. You know, a <i>magnum opus</i> of some kind.
                
                On a tangent, I personally feel like gamedevs have some of the coolest jobs out there.
                Games can do great things, like bring people out of tough places in their lives.
                So <span className="lp">having the power to </span> brighten the day of
                millions of players around the globe, and to earn money from it, that's awesome.
                (Yes, I know that gamedevs are overworked and underpaid, blah blah blah, just let me have my moment man!)
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

export default hobbies2
