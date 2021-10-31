import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

const TagsList = ({projects, changeTags, tags}) => {
  const allTags = setupTags(projects)
  console.log(allTags)

  const initialTags = tags;
  console.log(initialTags);

  const tagClicked = (tag) => {
    console.log(tag);
    // so this is rly weird and i still dunno why but tag does not return as just the plaintext
    // probably because I access innerHTML element but sometimes it returns as stuff with "<" character
    // and the very rarely it returns without it. So I just have a quick hack here where I will split on spaces if not
    // and otherwise split on the first "<" character if it is.
    if (tag.includes("<")) { 
      tag = tag.substr(0,tag.indexOf('<'));
    }
    else {
      let a = tag.split(" ");
      tag = a[0];
    }
    if (initialTags.includes(tag)) {
      const index = initialTags.indexOf(tag);
      initialTags.splice(index, 1);
    }
    else {
      // if not in the array, add it
      initialTags.push(tag);
    }
    console.log(initialTags);
    changeTags(initialTags);
  }

  return (
    <div className="tag-container">
      <h4>Project Tags</h4>
      <div className="tags-list">
        <button className = "reset-tags-button" onClick={() => changeTags([])}>Reset Tags</button>
        {allTags.map((tag, index) => {
          const [name, value] = tag
          return (
            <button key={index} onClick={(event) => tagClicked(event.target.innerHTML)} className={initialTags.includes(name) ? "tag-selected" : ""}>
              {name} ({value})
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
