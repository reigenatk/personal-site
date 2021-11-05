import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BlogPosts from "../components/BlogPosts"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Blog = ({ data }) => {
  console.log(data)
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <SEO title="Blog" />
      <header className="hero">
        <StaticImage
          src="../assets/img/blogbg.jpg"
          alt="relaxing"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        ></StaticImage>
        <div className="hero-container">
          <div className="hero-text">
            <h1>Personal Blog</h1>
            <h4></h4>
          </div>
        </div>
      </header>
      <BlogPosts posts={posts} title="recently published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { isMdxPost: { eq: true } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          category
          date(formatString: "MMMM, Do YYYY")
          readTime
          slug
          postDescription
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default Blog
