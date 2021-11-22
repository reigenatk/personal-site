import React from "react"
import ProjectsList from "./ProjectsList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"
import { useState } from "react"

const query = graphql`
  {
    allContentfulProject(sort: { fields: projectName }) {
      nodes {
        projectImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
        projectName
        link
        id
        shortDescription
        content {
          tags
        }
      }
    }
  }
`

const AllProjects = ({ projects }) => {
  console.log(projects)

  const [activeTags, setActiveTags] = useState([])

  console.log(activeTags)
  let goodprojects = []
  if (activeTags.length == 0) {
    goodprojects = projects
  }
  if (activeTags.length != 0 && projects.length != 0) {
    for (var i = 0; i < projects.length; i++) {
      const works = true
      const project_tags = projects[i].content.tags
      console.log(projects[i])
      for (var j = 0; j < activeTags.length; j++) {
        if (!project_tags.includes(activeTags[j])) {
          works = false
          break
        }
      }
      console.log(works)
      if (!works) {
        continue
      }
      goodprojects.push(projects[i])
    }
  }
  console.log("done")

  return (
    <section className="recipes-container">
      {/* pass in project as props */}
      <TagsList
        projects={projects}
        changeTags={value => setActiveTags([...value])}
        tags={activeTags}
      ></TagsList>
      <ProjectsList projects={goodprojects} tags_selected={activeTags} />
    </section>
  )
}

export default AllProjects
