// this function counts how many of each tag we have from every project
const setupTags = projects => {
  const allTags = {} // js dictionary aka just an object

  projects.forEach(project => {
    project.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag]++
      } else {
        allTags[tag] = 1
      }
    })
  })
  // get the key/value pairs out as a new array. Array of arrays
  // sort by alphabetical order
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag) // compare the strings alphabetically
  })

  console.log(newTags)
  return newTags
}

export default setupTags
