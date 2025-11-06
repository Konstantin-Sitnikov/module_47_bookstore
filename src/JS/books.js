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
	
			let id = object.id
			let urlImg = object.volumeInfo.imageLinks.thumbnail;
			let authors = object.volumeInfo.authors.join(', ');
			let title = object.volumeInfo.title;
			let averageRating = '';
			let ratingsCount = '';
			if (object.volumeInfo.averageRating) {
				averageRating = object.volumeInfo.averageRating
				ratingsCount = object.volumeInfo.ratingsCount
			}


			let description = object.volumeInfo.description;
            let sale = object.saleInfo.saleability
			let price = ""
            let buttonClass = ""
            let buttonBody = ""
			if (sale === "FOR_SALE") {
				price = `${object.saleInfo.retailPrice.amount} ${object.saleInfo.retailPrice.currencyCode}`
                buttonClass = "button__book-cards"
                buttonBody = "buy now"
                
			}

            if (sale === "FREE") {
                price = "FREE"
				buttonClass = "button__book-cards"
                buttonBody = "buy now"
			}
            
            if (sale === "NOT_FOR_SALE") {
                 buttonClass = "button__book-cards--not-sale"
                 buttonBody = "not sale"
            }

			let htmlBookCards = `
						<div class="book-cards">
							<img class="book-cards__img" src=${urlImg} alt="Foto book">
							<div class="book-cards__info ">
								<span class="book-cards__authors">${authors}</span>
								<span class="book-cards__title">${title}</span>
								<div class="book-cards__rating">
									<div class="book-cards__average-rating">${averageRating}</div>
									<span class="book-cards__ratings-count">${ratingsCount}</span>
								</div>
								<span class="book-cards__description">${description}</span>
								<span class="book-cards__price">${price}</span>
								<button data-id="${id}" class="button button__book-cards ${buttonClass}">${buttonBody}</button>
							</div>
						</div>`

			
				this.containerBookCards.innerHTML += htmlBookCards

				let button = document.querySelector(`[data-id="${id}"]`)
				console.log(button)
				button.addEventListener("click", ()=> {
					console.log("click")})
				


			}


}


export {Books}