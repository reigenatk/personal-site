import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

const TagsList = ({ projects }) => {
  const allTags = setupTags(projects)
  console.log(allTags)
  return (
    <div className="tag-container">
      <h4>Project Tags</h4>
      <div className="tags-list">
        {allTags.map((tag, index) => {
          const [name, value] = tag
          return (
            <Link key={index} to={`/${name}`}>
              {name} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
