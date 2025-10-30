    const key = "AIzaSyAAe2ikW9G4PehhqDt_9eo0KZSXoj5-3WI"
	let loadindex = 0
	let category = "Humor"
	
	
	
	
	
	
function addBookCards (object) {
	console.log(object)
	
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
	let price = ""
	if (object.saleInfo.saleability === "FOR_SALE") {
		price = `${object.saleInfo.retailPrice.amount} ${object.saleInfo.retailPrice.currencyCode}`
	} 
	
		
	/*console.log(urlImg)
	console.log(authors)
	console.log(title)
	console.log(averageRating)
	console.log(ratingsCount)
	console.log(description)
	console.log(price)*/

	htmlBookCards = `
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
						<button class="button">buy now</button>
					</div>
				</div>`


	const containerBookCards = document.querySelector(".content__container--book-cards")
		containerBookCards.innerHTML += htmlBookCards

		if (averageRating) {
			
		}

	}

	
	const fetchData = async () => {
        let data = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=${key}&printType=books&startIndex=${loadindex}&maxResults=6&langRestrict=en`);
        let response = await data.json();

		for (book of response.items) {
			addBookCards(book)
		}
		loadindex += 6
	};






let categoryesList = ["Architecture", "Art & Fashion", "Biography", "Business",
	"Crafts & Hobbies", "Drama", "Fiction", "Food & Drink", "Health & Wellbeing", 
	"History & Politics", "Humor", "Poetry", "Psychology", "Science", "Technology", 
	"Travel & Maps"
]

let imageList = ["img/banner.png", "img/banner.png", "img/banner.png"]



function addCategoriesToHtml(list) {
	const contentCategories = document.querySelector(".content__categories")


	const firstСategory = list[0]
	const remainingListCategories = list.slice(1)

	contentCategories.innerHTML += `<li data-id="${firstСategory}" class="content__item content__item--active">${firstСategory}</li>`
	
	
	for (cat of remainingListCategories) {
		contentCategories.innerHTML += `<li data-id="${cat}" class="content__item">${cat}</li>`
	}

}


function addBannerToHtml(count, list) {

	const contentImgBanner = document.querySelector(".content__container--img-slider")
	contentImgBanner.innerHTML = `<img class="content__img content__img--banner" src=${list[count]} alt="Фото">`
}



function addMarkersToHtml(list) {

	const contentContainerMarkers = document.querySelector(".content__container--markers")


	for (i = 0; i < list.length; i++ ) {
		if (i === 0) {
			contentContainerMarkers.innerHTML += `<div data-id="${i}" class="content__marker content__marker--active"></div>`
			addBannerToHtml(i, list)
		} else {
			contentContainerMarkers.innerHTML += `<div data-id="${i}" class="content__marker"></div>`
		}
		
	}

}


addCategoriesToHtml(categoryesList)
addMarkersToHtml(imageList)