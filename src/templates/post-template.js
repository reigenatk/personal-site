import React, { useEffect } from "react"
import Layout from "../components/Layout"
// import Hero from '../components/Hero'
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Banner from '../components/Banner'
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import commentBox from "commentbox.io"

const PostTemplate = ({ data }) => {
  useEffect(() => {
    commentBox("5695195966341120-proj", {
      textColor: "#fff",
      subtextColor: "#fff",
      backgroundColor: "#000",
    })
  }, [])
  const {
    mdx: {
      frontmatter: { title, category, image, date, embeddedImages },
      body,
    },
  } = data

  return (
    <Layout>
      {/* <Hero /> */}
      <Wrapper>
        {/* post info */}
        <article className="content">
          <div className="intro-content">
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              className="main-img"
            />
            <div className="post-info">
              <span className="post-category">{category}</span>
              <h2 className="post-title">{title}</h2>
              <p className="post-date">{date}</p>
              <div className="underline"></div>
            </div>
          </div>
          <MDXRenderer embeddedImages={embeddedImages}>{body}</MDXRenderer>
        </article>
        {/* banner component */}
        <article>{/* <Banner /> */}</article>
        <div className="commentbox" />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "MMMM Do, YYYY")
        readTime
        slug
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;

  .intro-content {
    text-align: center;
    background-color: #333538;
    padding: 2rem 1.5rem;
  }

  .post-info {
    margin: 2rem 0 3rem 0;
    text-align: center;
    span {
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }

    .underline {
      width: 20rem;
      height: 1px;
      background: white;
      margin: 0 auto;
      margin-top: 1rem;
    }
  }

  .post-title {
    font-size: 3rem;
    color: white;
  }

  .post-date {
    font-size: 1rem;
    color: #f0fff0;
  }

  .post-category {
    display: inline-block;
    margin-bottom: 1rem;
    background: hsl(206, 33%, 96%);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 0.25rem;
    letter-spacing: 0.1rem;
    color: hsl(210, 22%, 49%);
    transition: all 0.3s ease-in;
    &:hover {
      background: #0e2f44;
      color: #249929;
    }
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      width: 75%;
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 4rem;
    }
  }
`

export default PostTemplate
