
// Scroll reveal animation

const sections = document.querySelectorAll(
".section, .card, .steps div, .gallery img"
);


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("show");

}

});


},

{
threshold:0.15
}

);



sections.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});






// Navbar background change

const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{


if(window.scrollY > 80){

nav.style.background="#061d42";

}

else{

nav.style.background="#082957";

}


});






// Mobile safety

console.log(
"MK Civil Services Website Loaded"
);