import React from "react"
import ProjectsList from "./ProjectsList"
import TagsList from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulProject(sort: { fields: projectName }) {
      nodes {
        projectImage {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
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

const AllProjects = () => {
  const data = useStaticQuery(query)
  const projects = data.allContentfulProject.nodes // destructure it a bit
  console.log(projects)
  return (
    <section className="recipes-container">
      {/* pass in project as props */}
      <TagsList projects={projects}></TagsList>
      <ProjectsList projects={projects} />
    </section>
  )
}

export default AllProjects
