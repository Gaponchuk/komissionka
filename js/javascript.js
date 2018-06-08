const topPage = document.querySelector("#top");
const nav = document.querySelector(".navigation");
const btn = document.querySelector(".btn-nav");
const btnTop = document.querySelector(".btn-top");
let span = btn.querySelectorAll(".btn-nav__item");
let links = nav.querySelectorAll(".navigation__link");

btn.addEventListener("click", ()=> {
	mobileMenu();
});

links.forEach(function(link){
	link.addEventListener("click", ()=> {
		links.forEach(function(link) {
			link.classList.remove("active-link");
		});
		link.classList.add("active-link");
		mobileMenu();
	});
});

function mobileMenu () {
	nav.classList.toggle("active");
	span.forEach(function(i){
		i.classList.toggle("active");
	});
};

window.addEventListener("scroll", () => {
	if(window.pageYOffset > 500) {
		btnTop.classList.add("activ-up");
	} else {
		btnTop.classList.remove("activ-up");
	}
});
