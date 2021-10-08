import typeWriter from "./typeWriter.js";
import navHover from "./navHover.js";
import form from "./form.js";
import dinamicPortfolio from "./portfolio.js";

//Variables
const $header = document.querySelector(".header");
const $navLinks = document.querySelectorAll("nav a");
const $hero = document.querySelector(".hero");
const $about = document.querySelector(".about");
const $ocupation = document.querySelector(".hero div h4 span");
const $form = document.querySelector(".form");
const $btnMenu = document.querySelector(".btn-menu");
const $sections = document.querySelectorAll("section");


function scrollSpy(){
  //Scrollspy nuevo
  let mediaqueryList = window.matchMedia("(min-width: 540px)");

  window.addEventListener("scroll",(e)=>{

    $sections.forEach(section => {
      let top = window.scrollY;
      let offsetTop = section.offsetTop;
      let offsetHeight = section.offsetHeight;
      let id = section.id;

      if(top >= ($hero.offsetTop - 100) + $hero.offsetHeight && mediaqueryList.matches ){
        $header.classList.add("slideDown");
      }else{
        $header.classList.remove("slideDown");
      }

      if(top >= offsetTop - 100 && top < offsetTop - 100 + offsetHeight){
        $navLinks.forEach(link => {
          let active = document.querySelector("header nav a[href*='#" + id +"']");
          link.querySelector(".border").classList.remove("nav-hover");
          if(active) active.querySelector(".border").classList.add("nav-hover");
        })

        if(id === "about"){
          $about.querySelectorAll(".value").forEach(value => {
            value.classList.add("progress");
          })
        }
      }

      if(top >= offsetTop - 250 && top < offsetTop - 250 + offsetHeight){
        section.classList.add("fadeIn");
        section.classList.remove("hidden");
      }
    })
  })
}


//Ejecucion de funciones
document.addEventListener("DOMContentLoaded",(e)=>{
  scrollSpy();
  typeWriter($ocupation.dataset.text, $ocupation);
  navHover($navLinks, scrollSpy);
  form($form);
  dinamicPortfolio();

  //Btn menu mobile
  $btnMenu.addEventListener("click", (e)=>{
    $header.classList.toggle("show-header-mobile");
    e.target.querySelector("i").classList.toggle("fa-times");
  })
})