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
let slider = new Slider(imageList)


const categories = document.querySelectorAll(".content__item")
const buttonLoadMore = document.querySelector(".button__load-more")
const contentMarker = document.querySelectorAll(".content__marker")

function addClickCategory (list) {
	for (let object of list) {
		object.addEventListener("click",  function(){
			books.setActiveCategories(this.dataset.id)
		});
	}
	
}

function addClickMarker (list) {
	for (let object of list) {
		object.addEventListener("click",  function(){

			slider.addBannerToHtml(Number(this.dataset.id))
			slider.setCount(Number(this.dataset.id))
			slider.startScroll()

				});
			}
}


function addClickButtonLoadMore () {
	buttonLoadMore.addEventListener("click", () => {
		books.fetchData()
	})
}



addClickCategory(categories)
addClickButtonLoadMore()
addClickMarker(contentMarker)











