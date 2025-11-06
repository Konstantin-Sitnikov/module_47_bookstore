	import {addBannerToHtml, addMarkersToHtml} from "./addToHTML"
	import { Slider } from "./slider"
	import { Books } from "./books"
	import "../sass/style.scss"

	
	
	let imageList = ["../src/img/banner.png", "../src/img/banner2.png", "../src/img/banner3.png"]


    let categoryesList = ["Architecture", "Art & Fashion", "Biography", "Business",
	"Crafts & Hobbies", "Drama", "Fiction", "Food & Drink", "Health & Wellbeing", 
	"History & Politics", "Humor", "Poetry", "Psychology", "Science", "Technology", 
	"Travel & Maps"]
	


	
let books = new Books(categoryesList)


const categories = document.querySelectorAll(".content__item")

function addClickCategory (list) {
	for (let object of list) {
		object.addEventListener("click",  function(){
			books.setActiveCategories(this.dataset.id)
		});
	}
}


addClickCategory(categories)




const buttonLoadMore = document.querySelector(".button--load-more")



buttonLoadMore.addEventListener("click", () => {
	books.fetchData()
} )
	



let slider = new Slider(imageList, addBannerToHtml)




addMarkersToHtml(imageList)
slider.startScroll()



const contentMarker = document.querySelectorAll(".content__marker")

function addEventClickToHtml (list) {
	for (let object of list) {
		object.addEventListener("click",  function(){

			addBannerToHtml(Number(this.dataset.id), imageList)
			slider.setCount(Number(this.dataset.id))
			slider.startScroll()

				});
			}
}

addEventClickToHtml(contentMarker)











