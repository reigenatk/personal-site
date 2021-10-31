import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Dash from './Dash'

const query = graphql`
  {
    allMdx(limit: 4, sort: { fields: frontmatter___date, order: DESC }, filter: {frontmatter: {isMdxPost: {eq: true}}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM, Do YYYY")
          slug
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

const Recent = () => {
  const data = useStaticQuery(query)

  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Wrapper>
      <Dash value="recent" />
      {posts.map(post => {
        const { title, slug, date, image } = post.frontmatter
        return (
          <Link to={`/posts/${slug}`} key={post.id} className="post">
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              className="img"
            ></GatsbyImage>
            <div>
              <h5>{title}</h5>
              <p>{date}</p>
            </div>
          </Link>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .post {
    display: grid;
    grid-template-columns: 75px 1fr;
    column-gap: 1rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    padding: 0.5rem 0.5rem;
    border-radius: 5%;
  }
  .img {
    border-radius: 10%;
  }
  h5 {
    font-size: 0.7rem;
    margin-bottom: 0.25rem;
    letter-spacing: 0;
    line-height: 1.2;
    
    color: white;
  }
  p {
    font-size: 0.6rem;
    margin-bottom: 0;
    color: white;
  }
  .post:hover {
      background: #66A5AD;
  }
`

export default Recent
