const error = {
    "error": {
        "code": 503,
        "message": "Service temporarily unavailable.",
        "errors": [
            {
                "message": "Service temporarily unavailable.",
                "domain": "global",
                "reason": "backendFailed"
            }
        ]
    }
}


class Books {
	
	constructor(list) {
		
			this.loadindex = 0 
			this.key = "AIzaSyAAe2ikW9G4PehhqDt_9eo0KZSXoj5-3WI"
			this.contentCategories = document.querySelector(".content__categories")
			this.containerBookCards = document.querySelector(".content__container--book-cards")
			this.loader = document.querySelector(".loader")
			this.categorySearch = "Humor"
			this.categories = list
			this.addCategoriesToHtml()
		}

		async fetchData() {
			try {
				this.startLoader()
				this.data = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${this.categorySearch}"&key=${this.key}&printType=books&startIndex=${this.loadindex}&maxResults=6&langRestrict=en`);
				this.response = await this.data.json();
				if (!this.response.error) {
					for (let book of this.response.items) {
						this.addBookCards(book)
					}
					this.loadindex += 6
				} else {
					 throw new Error(`Что-то пошло не так: Код: ${this.response.error.code}, message: ${this.response.error.message}`)
				}
					
			} 
			catch (err) {
				console.log("Ошибка:",err.message)
				}
			finally {
				this.stopLoader()
			}
			}

		

		startLoader () {
			this.loader.style.display = "block"
		}
		
		stopLoader() {
			this.loader.style.display = "none"
		}
			

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

		addBookCards (object) {
	
			this.id = object.id
			this.urlImg = object.volumeInfo.imageLinks.thumbnail;
			this.authors = object.volumeInfo.authors.join(', ');
			this.title = object.volumeInfo.title;
			this.averageRating = '';
			this.ratingsCount = '';
			if (object.volumeInfo.averageRating) {
				this.averageRating = object.volumeInfo.averageRating
				this.ratingsCount = object.volumeInfo.ratingsCount
			}


			this.description = object.volumeInfo.description;
            let sale = object.saleInfo.saleability
			this.price = ""
            this.buttonClass = ""
            this.buttonBody = ""
			if (sale === "FOR_SALE") {
				this.price = `${object.saleInfo.retailPrice.amount} ${object.saleInfo.retailPrice.currencyCode}`
                this.buttonClass = "button__book-cards"
                this.buttonBody = "buy now"
                
			}

            if (sale === "FREE") {
                this.price = "FREE"
				this.buttonClass = "button__book-cards"
                this.buttonBody = "buy now"
			}
            
            if (sale === "NOT_FOR_SALE") {
                 this.buttonClass = "button__book-cards--not-sale"
                 this.buttonBody = "not sale"
            }

			this.htmlPatternBookCards()

			}

		htmlPatternBookCards(){
			
			let bookCards = document.createElement("div")
			bookCards.classList.add("book-cards")

			let bookCardsImg = document.createElement("img")
			bookCardsImg.src = this.urlImg
			bookCardsImg.alt = "Foto book"
			bookCardsImg.classList.add("book-cards__img")

			bookCards.appendChild(bookCardsImg)

			let bookCardsInfo = document.createElement("div")
			bookCardsInfo.classList.add("book-cards__info")
			
			let bookCardsAuthors = document.createElement("span")
			bookCardsAuthors.classList.add("book-cards__authors")
			bookCardsAuthors.textContent = this.authors
			bookCardsInfo.appendChild(bookCardsAuthors)


			let bookCardsTitle = document.createElement("span")
			bookCardsTitle.classList.add("book-cards__title")
			bookCardsTitle.textContent = this.title
			bookCardsInfo.appendChild(bookCardsTitle)

			let bookCardsRating = document.createElement("div")
			bookCardsRating.classList.add("book-cards__rating")

			let bookCardsAverageRating = document.createElement("div")
			bookCardsAverageRating.classList.add("book-cards__average-rating")
			bookCardsAverageRating.textContent = this.averageRating
			
			bookCardsRating.appendChild(bookCardsAverageRating)
			
			let bookCardsRatingsCount = document.createElement("span")
			bookCardsRatingsCount.classList.add("book-cards__ratings-count")
			bookCardsRatingsCount.textContent = this.ratingsCount

			bookCardsRating.appendChild(bookCardsRatingsCount)

			bookCardsInfo.appendChild(bookCardsRating)
			
			let bookCardsDescription = document.createElement("span")
			bookCardsDescription.classList.add("book-cards__description")
			bookCardsDescription.textContent = this.description
			bookCardsInfo.appendChild(bookCardsDescription)


			let bookCardsPrice = document.createElement("span")
			bookCardsPrice.classList.add("book-cards__price")
			bookCardsPrice.textContent = this.price
			bookCardsInfo.appendChild(bookCardsPrice)




			let button = document.createElement("button")
			button.dataset.id = this.id
			button.classList.add("button", "button__book-cards" ,`${this.buttonClass}`)
			button.textContent = this.buttonBody
			button.addEventListener("click", function(event) {
				
				let button = event.currentTarget
				if(!button.classList.contains("button__book-cards--not-sale")){
					console.log(button.dataset.id)
				}
				
			})

			bookCardsInfo.appendChild(button)

			bookCards.appendChild(bookCardsInfo)
				
			this.containerBookCards.appendChild(bookCards)
			}


}


export {Books}