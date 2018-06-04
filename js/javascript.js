const nav = document.querySelector(".navigation");
const btn = document.querySelector(".btn-nav");
const span = btn.querySelectorAll(".btn-nav__item");

btn.addEventListener("click", ()=>{
	nav.classList.toggle("active");
	span.forEach(function(i){
		i.classList.toggle("active");
	})
});