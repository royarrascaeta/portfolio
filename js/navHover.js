export default function navHover(links, cb){
  links.forEach(link => {
    link.addEventListener("mouseover",(e)=>{
      links.forEach(link => link.querySelector(".border").classList.remove("nav-hover"));
      e.target.querySelector(".border").classList.add("nav-hover");
    });

    link.addEventListener("mouseleave", cb)
  })

}