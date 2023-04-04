import Backdrop from "./Backdrop";
import React from "react";
import { useState } from "react";

const Modal = ({ show, exitModal, desc_id }) => {

  console.log("show: %d, exitModal: %d, desc_id: %d\n", show, exitModal, desc_id)
  
  // HAHAHA there has to be a better way to do this-- fml
  let getText = (id) => {
    if (id == 1) {
      return "Not quite my tempo. \
      Watch this if you were ever in band."
    }
    if (id == 2) {
      return "Kind of your generic Holocaust movie, \
      but can one ever call the Holocaust generic? \
      I remember watching this for some class in high school\
      and really thought it was something afterwards"
    }
    if (id == 3) {
      return "$GME to the moon"
    }
    if (id == 4) {
      return "I'm convinced this movie is the \
      most badass thing I've ever seen"
    }
    if (id == 5) {
      return "Let's see Paul Allen's favorite movie"
    }
    if (id == 6) {
      return "I have never read the books, am I missing out? 😅\
      actually, I tried a few times but they dragged on too much \
      for my liking so I never finished them."
    }
    if (id == 7) {
      return "This movie came out in 1957. So you know it has to be good. \
      It's a pretty short movie \
      too, but leaves such a strong impression. \
      Highly recommend."
    }
    if (id == 8) {
      return "This movie is more just nostalgic for me. \
      I remember watching it near Christmas time in my 8th grade \
      english class surrounded by my friends..\
      back when life was simple... and you can't go \
      wrong with a story from 18th century England told by \
      Dickens"
    }
    if (id == 9) {
      return "OK I'm running out of ideas. Robot love? \
      The fact that the characters don't talk? \
      Also the themes of automation and the degradation of \
      humanity because of technology? It's a great movie"
    }
    if (id == 10) {
      return "Mr. Robot is my favorite TV show ever. \
      And to think that I dropped this show twice after \
      finishing the first season. It looks like its only \
      about hacking but is really so much more than that. \
      It gets better and better over each season, too. \
      I was gonna make a review on it but I'm way too lazy. \
      Anyways, do yourself a favor and at least try it."
    }
    if (id == 11) {
      return "Jesse, we need to cook"
    }
    if (id == 12) {
      return "The ending wasn't that bad tbh. Anyways, I love\
      fantasy/meideval things so this show was right up that alley"
    }
    if (id == 13) {
      return "If any show was my childhood it was probably this one. \
      Fun story- my parents didn't like us watching TV but they were always \
      gone from around 3-5pm, and this show was always on during that time. \
      Jolly good show!"
    }
    if (id == 14) {
      return "Hey, the main character's name is Richard too! But on a serious note\
      this is literally the funniest show ever if you are a software developer"
    }
    if (id == 15) {
      return "This game is the coolest thing ever. The \
      underwater is such a unknown and vast place and this\
      game nailed that sentiment perfectly."
    }
    if (id == 16) {
      return "Epic GTA like game but instead its Medieval? \
      I'm personally not too into the lore (haven't read the books or seen the show), \
      I just like the gameplay. Graphics are S+ tier. And yes I got the worst ending."
    }
    if (id == 17) {
      return "Can't explain this game in a sentence or two, \
      unfortunately. Maybe the closest word would be slavery?\
      I remember when it first came out though, I slept like \
      5am that night playing it lmao"
    }
    if (id == 18) {
      return "The factory must grow. Basically rimworld but less enemies\
      and heavier focus on design. If you are an engineer you will love this game"
    }
    if (id == 19) {
      return "Takes the word 'platformer' to a whole new level. Brilliant art \
      soundtrack, gameplay- what else do you need?"
    }
    if (id == 20) {
      return "OMORI is a game. A really good one. Reminds me of Undertale a bit, \
      with a slightly more serious tone (kinda dark at times). \
      Really good soundtrack and art, though. Perfect game to play when depressed"
    }
    if (id == 21) {
      return "OneShot is another game. I really like indie games tbh, \
      probably because the creators put so much work into them. \
      Oneshot has such a good soundtrack and atmosphere to it, I can't describe it"
    }
    if (id == 22) {
      return "Melodic bass dude :D, also has great tutorials"
    }
    if (id == 23) {
      return "I blame osu for this. I love their songs"
    }
    if (id == 24) {
      return "I also blame osu for this. On a side note, Camellia \
      releases so many songs, so quickly too. Although sometimes \
      lots of his songs sound similar lol"
    }
    if (id == 25) {
      return "Breakcore god. Probably one of my favorite artists period, some of my favorite songs ever are his songs"
    }
    if (id == 26) {
      return "everyone likes him so i just put him here to seem sophisticated.... Ok jokes aside he's a very unique producer and makes some crazy ass tracks"
    }
    if (id == 27) {
      return "PSYQUI's songs are so well mixed"
    }
    if (id == 28) {
      return "Just a really good composer"
    }
    if (id == 29) {
      return "I recall that I really liked this book when I was younger.\
       It was an interesting novel about growing up\
      and I still kinda have"
    }
    if (id == 30) {
      return "Dune is probably my favorite book. Who doesn't love big sandworms? \
      The new movie is also really good, but IMO can't do the book justice. It's\
      probably one of the only books that I couldn't put down, literally. And I normally hate reading.\
       Something about\
       the worldbuilding in this book is just so insane."
    }
    if (id == 31) {
      return "Grapes of Wrath was just a really informative and interesting\
       book for me to read. I like all of Steinbeck's novels in general, \
       Of Mice and Men is super good too"
    }
    if (id == 32) {
      return "Great movie, old sport. Nah but on a more serious note \
      I love the story for this movie. Shows that\
       money can't buy happiness"
    }
    if (id == 33) {
      return "Breakcore but for edgy teens"
    }
    if (id == 34) {
      return "Tommy FOOKIN Shelby. Love 1800s Britain, such a cool atmosphere"
    }
    if (id == 35) {
      return "Night in the Woods for me is just a great game\
       about loneliness and that awkward period of your life where you are 20\
       - I felt like I related a lot the story. Highly recommend."
    }
    if (id == 36) {
      return "RDR2 is another masterpiece of an open world game. \
      The story is really good, and obviously the graphics are S tier. \
      The only complaint from me is that the story was really long (like 40+ hours)\
      but then again, if you're having fun that doesn't really feel as long.\
      I guess I just love western/18th century cowboy stuff."
    }
    if (id == 37) {
      return "This game is a masterpiece, probably one of the most inspiring works\
      of art I've ever seen. And it's also why I think gaming in the 21st century is\
      so revolutionary. Games can tell such powerful stories, and in the case of this game, without\
      a single word from the main character. This game alone is gonna inspire me to learn Unreal Engine.\
      Oh also, cats are cool."
    }
    if (id == 38) {
      return "I've been listening to lots of techno recently on spotify and I swear that\
      everytime I checked who the artist is, it was N'to."
    }
    if (id == 39) {
      return "Another melodic techno dude. And he's French, again. It's interesting, \
      I swear certain countries just dominate each genre of EDM. Like German+Dutch dominate trance, \
      French for like Hardcore and Techno, then UK for DnB, etc. Edit: Well maybe because genres originate \
      in certain places? Duh :P"
    }
    if (id == 40) {
      return "LISA is so inspirational to me because it tells an incredible story while having \
      very poor/ not very eye-catching graphics. It's proof that you don't need to have art skills \
      to make a powerful game, which personally I find very motivating. Oh, there's also lots of \
      suicide and blood so don't play if you don't wanna see that."
    }
    if (id == 41) {
      return "IDK... it's just a good book";
    }
    if (id == 42) {
      return "Now here's a game in complete contrast to LISA, \
      a game with one of the cleanest, prettiest graphics and smoothest gameplay experiences I've ever had \
      Like, I went into this game thinking I would just play a bit, and I wanted to hate it \
      because I'm not really into beatem/shootemup stuff, but gawd dam this game is well made";
    }
    if (id == 43) {
      return "Hyperpop psycho... his songs are so trippy yet melodic. If I would say a producer is closest to the style I eventually wanna be like, I'd say METAROOM."
    }
    if (id == 44) {
      return "Portal 2 is one of the best puzzle games ever. I know there are puzzle game elitists that would disagree but for how simple it is, and the amount of fun it is, there's nothing that can top this game imo"
    }
    if (id == 45) {
      return "An insanely good Chinese science fiction series (translated to English). After reading this, you will NOT want extraterrestrial contact to occur during our lifetimes. Highly recommend!"
    }
    if (id == 46) {
      return "This book is just a very imaginative depiction of the highest high to the lowest low. A ride I found very exhilerating yet also very sad."
    }
    if (id == 47) {
      return "The Metamorphosis made me question human value and what I'm worth as a person. And I concluded that there's not a lot between me and the cockroach on the floor. That's why I love this book."
    }
    if (id == 48) {
      return "This book is close to me because I relate with it so heavily. And yet it takes place 100 years ago."
    }
    if (id == 49) {
      return "Do yourself a favor and watch this film if you haven't already. It's one of my favorite films of all time."
    }
    if (id == 50) {
      return "It's just so funny idk I had to add it here"
    }
    if (id == 51) {
      return "Again, do yourself a favor and watch this film. It's the thing that made me come closest to crying. I still didn't cry tho. It was close."
    }
    if (id == 52) {
      return "I feel like I have to add this. It's just such a great film from bottom to top."
    }
    if (id == 53) {
      return "One of the funniest movies I've ever seen"
    }
    if (id == 54) {
      return "The father of all indie RPGs"
    }
    if (id == 55) {
      return "One of the most insane VNs I've ever played. The art and sound is insane"
    }
    if (id == 56) {
      return "To be honest, I didn't like this book at first. But it grew on me. It's a great coming of age tale and reads very smoothly"
    }
  }
  return (
    <div>
      <Backdrop show={show} exitModal={exitModal}></Backdrop>
      <div className="modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100xh)",
          opacity: show ? "1" : "0",
        }}
        
      >
        <p>{getText(desc_id)}</p>
      </div>
    </div>
  )
}

export default Modal