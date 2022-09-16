import { StaticImage } from "gatsby-plugin-image"
import React, {useState} from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Helmet } from "react-helmet"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import particlesConfig from "../components/particle-config"
import Modal from "../components/Modal"

const Favorite = () => {
  const [isModalShowing, setIsModalShowing] = useState(0);
  const [desc_id, set_desc_id] = useState(0);
  ;<Helmet>
    <link
      href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&family=Updock&display=swap"
      rel="stylesheet"
    ></link>
  </Helmet>
  const particlesInit = async main => {
    console.log(main)

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }
  let exitModal = () => {
    setIsModalShowing(0);
  }

  const particlesLoaded = container => {
    console.log(container)
  }

  const toggleModal = (idx) => {
    set_desc_id(idx)
    setIsModalShowing(1);
  }

  return (
    <Layout>
      <SEO title="My Favorite Things" />
      <section className="section about">
        <header className="hero">
          <StaticImage
            src="../assets/img/sailor.jpg"
            alt="relaxing"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Favorite Things</h1>
              <h4></h4>
            </div>
          </div>
        </header>
        <main className="page">
          <div className="project-description">
            <h4>
              One day I thought to myself- what's the best way to learn about someone quickly?
              Then I thought, hmm- probably if I could have a gigantic list of their favorite things. 
              After all, most people bond over shared interests. 
              <br></br>
              <br></br>
              But the thing is, <span className="lg">many people are also shy</span> about 
              telling others what they're really interested in. At least I am (in person).
              <br></br>
              <br></br>
              But online, it's different. So, here's mine.
              <br></br>
              <br></br>
              <span className="lr">Click on each picture</span> to see a little description 
              (oooo React Modals ooo React State, see I know how to program!)
            </h4>
          </div>
          <div className="section-center projects-center favorite-page">
            <h1 className="favorite-header">Movies</h1>
            <p className="favorite-description">
              I don't watch a lot of movies. But when I do, I pirate them.
            </p>
            <div className="favorite-category">
              <ul>
                <div className="favorite-item">
                  <p className="favorite-item">Whiplash</p>
                  <img onClick={() => toggleModal(1)} src="https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Schindler's List</p>
                  <img onClick={() => toggleModal(2)} src="https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Wolf of Wall St.</p>
                  <img onClick={() => toggleModal(3)} src="https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_FMjpg_UX1000_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>The Godfather</p>
                  <img onClick={() => toggleModal(4)} src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>American Psycho</p>
                  <img onClick={() => toggleModal(5)} src="https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Lord of the Rings Trilogy</p>
                  <img onClick={() => toggleModal(6)} src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>12 Angry Men</p>
                  <img onClick={() => toggleModal(7)} src="https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>A Christmas Carol</p>
                  <img onClick={() => toggleModal(8)} src="https://m.media-amazon.com/images/M/MV5BMTM1MTI5ODU4MV5BMl5BanBnXkFtZTcwNTYyNTU4Mg@@._V1_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>WALL-E</p>
                  <img onClick={() => toggleModal(9)} src="https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg" />
                </div>
              </ul>
              
            </div>
            <h1 className="favorite-header">TV Shows</h1>
            <p className="favorite-description">
              My parents wouldn't let me watch much TV as a kid, because it <span className="lg">"rots the brain"</span> or whatever, so I never had a
              childhood. No, seriosuly. And I wasn't smart enough to realize you could 
              just watch them for free online. I'm a little behind, sorry ☹️
            </p>
            <div className="favorite-category">
              <ul>
                <div className="favorite-item">
                  <p>Mr. Robot</p>
                  <img onClick={() => toggleModal(10)} src="https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Breaking Bad</p>
                  <img onClick={() => toggleModal(11)} src="https://i.ytimg.com/vi/UTpCBgrqmlg/maxresdefault.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Game of Thrones</p>
                  <img onClick={() => toggleModal(12)} src="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Regular Show</p>
                  <img onClick={() => toggleModal(13)} src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608863624/regular-show-vol-1-9781608863624_hr.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Silicon Valley</p>
                  <img onClick={() => toggleModal(14)} src="https://m.media-amazon.com/images/M/MV5BM2Q5YjNjZWMtYThmYy00N2ZjLWE2NDctNmZjMmZjYWE2NjEwXkEyXkFqcGdeQXVyMTAzMDM4MjM0._V1_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Peaky Blinders</p>
                  <img onClick={() => toggleModal(34)} src="https://m.media-amazon.com/images/M/MV5BMThlOWE3MWEtZjM4Ny00M2FiLTkyMmYtZGY3ZTcyMzM5YmNlXkEyXkFqcGdeQWpnYW1i._V1_.jpg" />
                </div>
              </ul>
              
              
            </div>
            <h1 className="favorite-header">Games</h1>
            <p className="favorite-description">Games are great. I've been playing them for a long time.
              I left multiplayer games out because <span className="lb">everyone knows those.</span> The ones I (used to play) the most are
              League, Osu, agar.io when I was a middle schooler and Club Penguin when I was a kid 🙃)
              So with that in mind, I tried to keep the list below to singleplayer games.
            
              <br />
              <br />
              Oh and on another note- my favorite kinds of games are <span className="lr">open world</span> and
              <span className="lb"> indie/RPG</span> story driven games,
              open world cuz muh graphics, and the latter because I think indie games often can tell such elaborate 
              stories and create amazing atmospheres for the player. Kinda like a mass-produced donut vs. a home-made one. 
              <br></br>
              <br></br>
              Also, lots of really good indie games were
              made by only one person, or a small team, so they really put their heart into it.
              <br></br>
              <br></br>
              Unrelated: I just now realized that I unintentionally included three games where the main character is a cat... Am I a f-f-furry? 
            </p>
            <div className="favorite-category">
              <ul>
                <div className="favorite-item">
                  <p>Subnautica</p>
                  <img onClick={() => toggleModal(15)} src="https://image.api.playstation.com/vulcan/img/rnd/202009/3006/C76j3lYg8BNBWJRSYtI2ONbo.png" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>The Witcher 3</p>
                  <img onClick={() => toggleModal(16)} src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>RimWorld</p>
                  <img onClick={() => toggleModal(17)} src="https://howlongtobeat.com/games/rimworld1.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Factorio</p>
                  <img onClick={() => toggleModal(18)} src="https://upload.wikimedia.org/wikipedia/en/0/08/Factorio_cover.png" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Hollow Knight</p>
                  <img onClick={() => toggleModal(19)} src="https://static.displate.com/857x1200/displate/2020-03-10/038cd6e5fadd0ccde6686e548a24c8ce_30cd0721cb57c7443b14d330db1c451d.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Omori</p>
                  <img onClick={() => toggleModal(20)} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Omori_cover.jpg/220px-Omori_cover.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Oneshot</p>
                  <img onClick={() => toggleModal(21)} src="https://m.media-amazon.com/images/M/MV5BYzdkZGZmNmMtMTk0Yi00MGMwLThhNWMtNTI4MGU2ZTM2MjI2XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Night in the Woods</p>
                  <img onClick={() => toggleModal(35)} src="https://bleedingcool.com/wp-content/uploads/2018/11/Night-in-the-Woods-art-1200x900.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Red Dead Redemption 2</p>
                  <img onClick={() => toggleModal(36)} src="https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Stray</p>
                  <img onClick={() => toggleModal(37)} src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>LISA</p>
                  <img onClick={() => toggleModal(40)} src="https://ksr-ugc.imgix.net/assets/011/599/285/0e2ea291755ffb8f88c4fb68aa27a1f6_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1552&h=873&fit=crop&v=1463685047&auto=format&frame=1&q=92&s=e910b943fdc6043b1ff1255851e4b16a" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Katana Zero</p>
                  <img onClick={() => toggleModal(42)} src="https://upload.wikimedia.org/wikipedia/en/d/da/Katana_Zero_cover.png" />
                </div>
              </ul>
            </div>

            <h1 className="favorite-header">Musicians</h1>
            <p className="favorite-description">
              I don't listen to music too often, but when I do I mostly listen to electronic music.
              Stuff like <span className="ly">house</span>, <span className="lb">techno</span>, <span className="lg">trance/psytrance</span>,
              <span className="lo"> dubstep (occasionally)</span>, <span className="lp">breakcore</span>, <span className="lr">vaporwave</span>, <span className="lg">IDM </span>,
              <span className="ly">hardstyle</span>, and <span className="lp">DNB</span>. I know I kinda just named every genre. 
              
              <br />
              <br />

              I found lots of these artists from a rhythm game called <span className="lp"><a href="osu.ppy.sh">osu!</a></span>,
              which I play quite often. The basic premise of osu? <span className="ly">Think aim trainer, to the rhythm.</span> 
              <br></br>
              <br></br>
              I was so invested in this game
              at one point of my life, I bought a drawing tablet. And I don't even draw! (Update Sep 2022: Well I've started but I still suck)
              
              Anyways here's <a href="https://osu.ppy.sh/users/14533822">my account</a> if you wanna admire my top plays 😎
              <br></br>
              <br></br>
              See, <span className="lo">this is what I mean by the whole favorites thing.</span> If you are an osu player, we'd instantly become friends.

              Anyways, outside of this game I usually just browse Spotify randomly
              or my Youtube recommendations. If you want to know which songs specifically that I like,
              you can checkout my playlists on <a href="https://www.youtube.com/user/vhgfhjykuhghfcjkgchj/playlists">my Youtube</a>
              
            </p>
            <div className="favorite-category">
              <ul>
                <div className="favorite-item">
                  <p>au5</p>
                  <img onClick={() => toggleModal(22)} src="https://photos.bandsintown.com/thumb/10215518.jpeg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Dragonforce</p>
                  <img onClick={() => toggleModal(23)} src="https://iscale.iheart.com/catalog/artist/43500" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Camellia</p>
                  <img onClick={() => toggleModal(24)} src="https://yt3.ggpht.com/pqEhhuy9Hy0WF-3yikE4KERGjfTIUvyEBfxZOeCFmJ4ZhDrmQ0pQ4Fk-FC3O48MXXmfPyoMmJA=s900-c-k-c0x00ffffff-no-rj" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>goreshit</p>
                  <img onClick={() => toggleModal(25)} src="https://i1.sndcdn.com/avatars-9rmd8pmVqSP8JW3X-H4Xpgw-t500x500.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Aphex Twin</p>
                  <img onClick={() => toggleModal(26)} src="https://yt3.ggpht.com/ytc/AKedOLS6jgDKN4xPknWdIzE_35UCo_A7m5K6wD13CPWu=s900-c-k-c0x00ffffff-no-rj" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>PSYQUI</p>
                  <img onClick={() => toggleModal(27)} src="https://i1.sndcdn.com/avatars-000585913419-thz07x-t500x500.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Warak</p>
                  <img onClick={() => toggleModal(28)} src="https://i1.sndcdn.com/avatars-000326723962-b77n1l-t500x500.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Sewerslvt</p>
                  <img onClick={() => toggleModal(33)} src="https://yt3.ggpht.com/QprPeK62mqF8JF3SesJ7cBq40UuI5L6bEbkIQwcZwrm2kg_QA_6ifiSInuykgmkCDplz8AZE43w=s900-c-k-c0x00ffffff-no-rj" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>N'to</p>
                  <img onClick={() => toggleModal(38)} src="https://i1.sndcdn.com/avatars-Rt9Mdgvu3z0Fjf9t-HhL8qw-t500x500.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Worakls</p>
                  <img onClick={() => toggleModal(39)} src="https://yt3.ggpht.com/ytc/AMLnZu__kdIlUiRhRh0KNORosLMpQnQhKOx7XvUDPhrnfQ=s900-c-k-c0x00ffffff-no-rj" />
                </div>
              </ul>
            </div>
            
            <h1 className="favorite-header">Books</h1>
            <p className="favorite-description">
              Books? 🤨... OK hear me out, I don't really read often, but when I do I make 
              sure its a book I'm 90% likely to enjoy. I have this bad habit, where I'll browse rating
              lists and rankings, making sure it's the absolute perfect book, instead of just reading the damn thing.

              Although most of the time I just read books 
              to act smart and to not be out of the loop. Honestly IDK why I put this here lol
            </p>
            <div className="favorite-category">

              <ul>
                <div className="favorite-item">
                  <p>Catcher In The Rye</p>
                  <img onClick={() => toggleModal(29)} src="https://images.booksense.com/images/532/769/9780316769532.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Dune</p>
                  <img onClick={() => toggleModal(30)} src="https://images-na.ssl-images-amazon.com/images/I/81ym3QUd3KL.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Grapes of Wrath</p>
                  <img onClick={() => toggleModal(31)} src="https://upload.wikimedia.org/wikipedia/commons/a/ad/The_Grapes_of_Wrath_%281939_1st_ed_cover%29.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>The Great Gatsby</p>
                  <img onClick={() => toggleModal(32)} src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg" />
                </div>
              </ul>
              <ul>
                <div className="favorite-item">
                  <p>Holes</p>
                  <img onClick={() => toggleModal(41)} src="https://upload.wikimedia.org/wikipedia/en/c/c3/Sachar_-_Holes_Coverart.png" />
                </div>
              </ul>
            </div>
            
            <h1 className="favorite-header">Anime!? </h1>
            <p className="favorite-description">
              Check out <a href="https://myanimelist.net/profile/rma2002">MyAnimeList...</a> don't judge pls 🙈
              <br></br>
              <br></br>
              There was a brief period (I'd say about a year?) of my life where I was <span className="lp">super into anime.</span>
              I think it was around junior year of high school? In other words, <span className="lo">I had my weeb phase.</span>
              <br></br>
              <br></br>
              Then I just stopped watching because <span className="lg">I ran out of good shows to watch xD</span>
              <br></br>
              <br></br>
              But I still look back on that time with good memories. Anime isn't the greatest thing in the world 
              as a certain group (*ahem* weebs) like to proclaim, but it certainly isn't bad. It's very different from 
              western media, and <span className="lr">brings a completely different interpretation of life.</span>
            </p>
          </div>

          <Modal show={isModalShowing} exitModal={exitModal} desc_id={desc_id}></Modal>
        </main>
      </section>
    </Layout>
  )
}

export default Favorite
