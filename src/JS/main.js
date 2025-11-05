	import {addBookCards, addBannerToHtml, addMarkersToHtml} from "./addToHTML"
	import { Slider } from "./slider"
	import "../sass/style.scss"

	const pug = require('pug');

	
	
	
	let imageList = ["../src/img/banner.png", "../src/img/banner2.png", "../src/img/banner3.png"]


    let categoryesList = ["Architecture", "Art & Fashion", "Biography", "Business",
	"Crafts & Hobbies", "Drama", "Fiction", "Food & Drink", "Health & Wellbeing", 
	"History & Politics", "Humor", "Poetry", "Psychology", "Science", "Technology", 
	"Travel & Maps"]
	

class GetBooks {
	
	constructor(funcAddBook, list) {
		
			this.loadindex = 0 
			this.key = "AIzaSyAAe2ikW9G4PehhqDt_9eo0KZSXoj5-3WI"
			this.contentCategories = document.querySelector(".content__categories")
			this.containerBookCards = document.querySelector(".content__container--book-cards")
			this.categorySearch = "Humor"
			this.funcAddBook = funcAddBook
			this.categories = list
			this.addCategoriesToHtml()
		}

		async fetchData() {
			this.data = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${this.categorySearch}"&key=${this.key}&printType=books&startIndex=${this.loadindex}&maxResults=6&langRestrict=en`);
			this.response = await this.data.json();
			for (let book of this.response.items) {
				this.funcAddBook(book)
			}
			this.loadindex += 6
		};


		addCategoriesToHtml() {						
			for (let category of this.categories) {
				this.contentCategories.innerHTML += `<li data-id="${category}" class="content__item">${category}</li>`
			}
			this.setActiveCategories(this.categories[0])
		}

		setActiveCategories(category) {

			for (let cat of this.contentCategories.querySelectorAll(".content__item")) {
				cat.classList.remove("content__item--active")
			}
			let activeCategory = this.contentCategories.querySelector(`[data-id="${category}"`)
			activeCategory.classList.add("content__item--active")
			this.categorySearch = category
			this.loadindex = 0
			this.containerBookCards.innerHTML = ""
			this.fetchData()
		}


}
	
let books = new GetBooks(addBookCards, categoryesList)


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











