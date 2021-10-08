export default function navHover(links){
  let active = null
  
  window.addEventListener("scroll", e => {
    active = document.querySelector("header nav a .nav-hover");
  })

  links.forEach(link => {
    link.addEventListener("mouseover", (e) => {
      console.log(active.parentNode)
      if(e.target !== active.parentNode){
        active.classList.remove("nav-hover");
        e.target.querySelector(".border").classList.add("nav-hover");
      }
    })

    link.addEventListener("mouseleave", (e) => {
      e.target.parentNode.querySelectorAll(".border").forEach(sel => sel.classList.remove("nav-hover"))
      active.classList.add("nav-hover");
    })
  })

}