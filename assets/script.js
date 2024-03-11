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

/** Création de defilement infini du carrousel */

const bannerImage = document.querySelector(".banner-img");

let tagLine = document.querySelector("#banner p")

let compteur=0;

/** ajout des eventListeners */
/** Flèche droite  - Avec modifications au clic */

let next=document.querySelector(".arrow_right")
console.log(next);

next.addEventListener("click", () => {
    compteur++
    if (compteur>=slides.length){
        compteur=0
    }  
    bannerImage.src="./assets/images/slideshow/"+slides[compteur].image;
    tagLine.innerHTML = slides[compteur].tagLine;
    console.log(compteur)
})

/** Flèche gauche  - Avec modifications au clic */

let prev=document.querySelector(".arrow_left")
console.log(next);

prev.addEventListener("click", () => {
    compteur--
    if (compteur<0){
        compteur=slides.length-1
    }  
    bannerImage.src="./assets/images/slideshow/"+slides[compteur].image;
    tagLine.innerHTML = slides[compteur].tagLine;
    console.log(compteur)
})

/** Création des bullet points */

const dots = document.querySelector(".dots")
for (let i=0; i<slides.length; i++){
    let dot=document.createElement("div");
    dot.className="dot";
    dots.appendChild(dot)
	console.log(dots)
}