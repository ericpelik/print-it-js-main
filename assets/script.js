const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const bannerImage = document.querySelector(".banner-img");

let tagLine = document.querySelector("#banner p")

let compteur = 0;

/** Creating bullet points */

const dots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("div");
    dot.className = "dot";
    dots.appendChild(dot)
}

/** Creating active bullet point */

let allDot = document.querySelectorAll(".dot")
allDot[0].classList.add("dot_selected");

function removeDotSelected() {

    let bullet = document.getElementsByClassName("dot_selected");

    for (let i = 0; i < allDot.length; i++) {
        allDot[i].classList.remove("dot_selected");
    }
}

/** Added JavaScript click scrolling for bullet points */

for (let i = 0; i < allDot.length; i++) {
allDot[i].addEventListener("click", () => {
        compteur = i;
        bannerImage.src = "./assets/images/slideshow/" + slides[compteur].image;
        tagLine.innerHTML = slides[compteur].tagLine;
        removeDotSelected();
        allDot[compteur].classList.add("dot_selected");
    })
}

/** Creating the right arrow */

let next = document.querySelector(".arrow_right")

next.addEventListener("click", () => {
    compteur++
    if (compteur >= slides.length) {
        compteur = 0
    }
    bannerImage.src = "./assets/images/slideshow/" + slides[compteur].image;
    tagLine.innerHTML = slides[compteur].tagLine;
    removeDotSelected();
    allDot[compteur].classList.add("dot_selected");
})

/** Creating the left arrow */

let prev = document.querySelector(".arrow_left")

prev.addEventListener("click", () => {
    compteur--
    if (compteur < 0) {
        compteur = slides.length - 1
    }
    bannerImage.src = "./assets/images/slideshow/" + slides[compteur].image;
    tagLine.innerHTML = slides[compteur].tagLine;
    removeDotSelected();
    allDot[compteur].classList.add("dot_selected");
})

/** creating the carousel scroll interval */

setInterval(()=>{
    compteur++
    if (compteur >= slides.length) {
        compteur = 0
    }
    bannerImage.src = "./assets/images/slideshow/" + slides[compteur].image;
    tagLine.innerHTML = slides[compteur].tagLine;
    removeDotSelected();
    allDot[compteur].classList.add("dot_selected");
},4000)

