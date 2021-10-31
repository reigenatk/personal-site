import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
import {useEffect} from "react"


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// OK i made it so that "projects" prop passes in the selected projects according to the tags
// already- meaning that if it is empty this means we did not have any projects matching all the selected
// tags
const ProjectsList = ({ projects = [], tags_selected = []}) => {
  console.log(tags_selected);
  const notempty = (projects.length !== 0)
  console.log(notempty);
  return (
    <div className="recipes-holder">
    {notempty ? 
        <div className="recipes-list"> {
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
          const pathToImage = getImage(projectImage) // avoids errors if image happens to be undefined
          const rand = getRandomInt(5) + 1; // 1-5
          const color_rand = "recipe-bg-" + rand;
          return (
            <Link to={`/${sluggedTitle}`} className={`recipe ${color_rand}`} key={id}>
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
                      return <div class={"project-tag"}><p class={tags_selected.includes(tag) ? "tag-selected" : ""}key={index}>{tag}</p></div>
                  })
              }
              </div>
            </Link>
          )
        }) }</div>
    : <p className="no-projects"> No projects found :(</p>}
    </div>
  )
}

export default ProjectsList
