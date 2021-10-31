import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsGithub, BsClock } from "react-icons/bs"
import { FaGlobeAmericas } from "react-icons/fa"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Behind the scenes, gatsby creates a new page for every recipe with the ending /title
// and uses this template to build the page

const ProjectTemplate = ({ data }) => {
  const {
    id,
    projectName,
    content,
    link,
    githubLink,
    description,
    shortDescription,
    projectImage,
    devTime,
  } = data.contentfulProject
  const pathToImg = getImage(projectImage)
  const { tags, features } = content
  console.log(data)
  return (
    <Layout>
      <SEO title={projectName} description={shortDescription} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImg}
              alt={projectName}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{projectName}</h2>
              <MDXRenderer>{description.childMdx.body}</MDXRenderer>
              {/* icons */}
              <div className="icons-and-tags">
              <div className="recipe-icons">
                {link == "N/A" ? (
                  <a href=".">
                    <FaGlobeAmericas></FaGlobeAmericas>
                    <h5>N/A :(</h5>
                  </a>
                ) : (
                  <a href={link}>
                    <FaGlobeAmericas></FaGlobeAmericas>
                    <h5>Link to Site</h5>
                  </a>
                )}
                <a href={githubLink}>
                  <BsGithub />
                  <h5>Github Link</h5>
                </a>
                <article>
                  <BsClock></BsClock>
                  <h5>Development Time</h5>
                  <p>{devTime}</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags :
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })

                  return (
                    <button key={index}>
                      {tag}
                    </button>
                  )
                })}
              </p>
              </div>
            </article>
          </section>
          {/* rest of the content */}
          <section className="recipe-content">
            <article>
              <h4>Things I learned</h4>
              {features.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>{index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($projectName: String) {
    contentfulProject(projectName: { eq: $projectName }) {
      link
      description {
        childMdx {
          body
        }
      }
      projectImage {
        gatsbyImageData
      }
      content {
        tags
        features
      }
      id
      devTime
      githubLink
      projectName
      shortDescription
    }
  }
`

export default ProjectTemplate
