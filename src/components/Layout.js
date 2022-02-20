import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "normalize.css"
// import "../components/cursor"
import "../assets/css/styles.css"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>rmaa.dev</title>

        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        /> */}
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />
        <script
          src="https://kit.fontawesome.com/f860f7b393.js"
          crossorigin="anonymous"
        ></script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link href="../../assets/css/prism.css" rel="stylesheet" /> 
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Mukta&family=Readex+Pro&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Luxurious+Roman&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      <script src="../../utils/prism.js"></script> 
    </>
  )
}

export default Layout
