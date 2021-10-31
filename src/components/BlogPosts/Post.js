import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Post = ({ excerpt, frontmatter }) => {
  const { title, image, slug, date, category, readTime, postDescription } = frontmatter
  return (
    <Wrapper>
    <Link to={`/posts/${slug}`} className="link">
      <GatsbyImage image={getImage(image)} alt={title} className="img" />
    </Link>
    <Link to={`/posts/${slug}`} className="link">
      <div className="info">
        <span className="post-category">{category}</span>
        <h3 className="post-title">{title}</h3>
        <div className="underline"></div>
        <p>{postDescription}</p>

        <footer>
          <span className="date">
            <FaRegClock className="icon" />
            {date}
          </span>
          <span>{readTime} min read</span>
        </footer>
      </div>
    </Link>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: 3rem;
  background: #333538;
  padding: 1rem 1rem;
  border-radius: 5%;
  transition: all 0.3s ease-in;

  :hover {
    background: #66A5AD;
  }

  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: 10px;
    height: 17rem;
  }
  .post-category {
    display: inline-block;
    margin-bottom: 1rem;
    background: hsl(206, 33%, 96%);;
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
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
    font-size: 2rem;
    transition: all 0.5s ease-out;
  }
  h3:hover {
    border-color: #7fffd4;
    color: #7fffd4;
  }
  .underline {
    width: 100%;
    height: 1px;
    background: white;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: white;
    line-height: 1.8;
  }
  .link {
    text-decoration: none;
  }

  /* .link {
    text-transform: capitalize;
    text-decoration: none;
    letter-spacing: 0.1rem;
    font-weight: 700;
    color: white;
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: #7fffd4;
    color: #7fffd4;
  } */
  footer {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        color: white;
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 20rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 100%;
        max-height: 20rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post
