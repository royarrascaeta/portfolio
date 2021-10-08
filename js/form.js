const d = document;

export default function form(form){
 d.addEventListener("submit",e=>{
    e.preventDefault();
    
    const $btn = form.querySelector("button");
    
    $btn.innerText = "ENVIANDO..."
    
    fetch("https://formsubmit.co/ajax/rodrigo_a92@hotmail.com",{
      method: "POST",
      body: new FormData(e.target)
    })
      .then(res=>res.ok ? res.json() : Promise.reject(res))
      .then(json =>{
        $btn.innerText = "MENSAJE ENVIADO"
        form.reset();
        setTimeout(() => {
          $btn.innerText = "ENVIAR"
        }, 3000);
      })
      .catch(err => {
        // console.log(err);
        let message = err.statusText || "Ocurrió un error al enviar. Intente nuevamente";
        $btn.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
      })
  })
}