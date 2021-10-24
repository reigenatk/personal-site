import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
const ProjectsList = ({ projects = [] }) => {
  console.log(projects)
  return (
    <div className="recipes-list">
      {
        // curly braces needed cus .map is js
        projects.map(project => {
          const {
            projectImage,
            link,
            projectName,
            shortDescription,
            id,
            content,
          } = project
          const { tags } = content
          const sluggedTitle = slugify(projectName, { lower: true })
          console.log(sluggedTitle)
          const pathToImage = getImage(projectImage) // avoids errors if image happens to be undefined
          return (
            <Link to={`/${sluggedTitle}`} className="recipe" key={id}>
              <GatsbyImage
                image={pathToImage}
                className="recipe-img"
                alt={projectName}
              />
              <h5>{projectName}</h5>
              <p>{shortDescription}</p>
              <div class="project-tags">
              {
                  tags.map((tag, index) => {
                      return <div class="project-tag"><p key={index}>{tag}</p></div>
                  })
              }
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default ProjectsList
