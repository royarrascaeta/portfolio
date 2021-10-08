export default function dinamicPortfolio(){
  //Dom variables
  const $view = document.querySelector(".portfolio_view");
  const $details = document.querySelector(".portfolio_details");
  const $title = document.querySelector(".portfolio_details h3");
  const $description = document.querySelector(".portfolio_details .description p");
  const $video = document.querySelectorAll(".portfolio_view video");
  const $github = document.querySelectorAll(".portfolio_details .links a")[0];
  const $web = document.querySelectorAll(".portfolio_details .links a")[1];
  const $arrowLeft = document.querySelector(".arrow-left");
  const $arrowRight = document.querySelector(".arrow-right");

  //Array proyectos
  const projects = [];

  //Indicador id
  let id = 1;

  $arrowLeft.style.display = "none";

  fetch("../data/data.json")
    .then(res => res.json())
    .then(json => {
      json.forEach(project => projects.push(project))
      showProject(id);
    });

  function showProject(id){
    $view.classList.remove("hidden")
    $details.classList.remove("hidden")
    $view.classList.add("fadeIn")
    $details.classList.add("fadeIn")


    let project = projects.filter(project => project.id === id);

    $title.innerText = project[0].title;
    $description.innerHTML = project[0].description;
    $video[0].src = "assets/video/" + project[0].video;
    $github.href = project[0].github;
    $web.href = project[0].url;

    project[0].github === "" 
      ? $github.style.visibility = "hidden"
      : $github.style.visibility = "visible"
  }


  document.addEventListener("click", (e)=> {
    if(e.target === $arrowRight && id < projects.length){
      id++;
      $view.classList.add("hidden")
      $details.classList.add("hidden")
      setTimeout(() => {
        showProject(id);
      }, 250);
    }
    
    if(e.target === $arrowLeft && id > 1){
      id--;
      $view.classList.add("hidden")
      $details.classList.add("hidden")
      setTimeout(() => {
        showProject(id);
      }, 250);
    }

    //Visibilidad de flechas
    id === 1 ? $arrowLeft.style.display = "none" : $arrowLeft.style.display = "block";
    id === projects.length ? $arrowRight.style.display = "none" : $arrowRight.style.display = "block";
  });

}