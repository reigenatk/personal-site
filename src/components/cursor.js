const cursor = document.querySelector(".cursor")

window.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px"
  cursor.style.top = e.pageY + "px"
  cursor.setAttribute("from-top", cursor.offsetTop - window.scrollY)
})

// scrollY tells us how much we are scrolled from top
window.addEventListener("scroll", () => {
  const fromtop = parseInt(cursor.getAttribute("from-top"))
  cursor.style.top = window.scrollY + fromtop + "px"
})

window.addEventListener("click", () => {
  if (cursor.classList.contains("click")) {
    // if we click anytime after the first time & its not currently going
    cursor.classList.remove("click")

    // Dom Reflow
    void cursor.offsetWidth
    cursor.classList.add("click")
  } else {
    cursor.classList.add("click")
  }
})
