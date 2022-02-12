// ------------- NAV ------------------//

const burger = document.querySelector(".nav-toggle")
const nav = document.querySelector(".menu");

burger.addEventListener("click", ()=> {
    nav.classList.toggle("active");
    burger.classList.toggle("cruz");
})

/*
const card = document.querySelector('.btn-dropdown');
const cardToggle = document.querySelector('.apretar');
cardToggle.onclick = function(){
    card.classList.toggle('active');
}
*/

function prueba() {
    var prueba = document.querySelector('.apretar');
    var x = document.querySelector('.btn-dropdown--info');
    if (x.style.display === "none") {
      x.style.display = "block";
      prueba.classList.add('activo');
    } else {
      x.style.display = "none";
      prueba.classList.remove('activo');
      
    }
  }