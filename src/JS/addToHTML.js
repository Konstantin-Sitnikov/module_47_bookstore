

function addBookCards (object) {

	
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
						<button class="button button--book-cards">buy now</button>
					</div>
				</div>`


	const containerBookCards = document.querySelector(".content__container--book-cards")
		containerBookCards.innerHTML += htmlBookCards

	}




function addActiveMarker (dataSetId, list) {
	for (let elem of list) {
		elem.classList.remove("content__marker--active")
		if (elem.dataset.id === dataSetId) {
			
			elem.classList.add("content__marker--active")
			
		}
	}
}


function addBannerToHtml(count, list) {
	
	const contentImgBanner = document.querySelector(".content__container--img-slider")
    const contentMarker = document.querySelectorAll(".content__marker")

	contentImgBanner.innerHTML = `<img class="content__img content__img--banner" src=${list[count]} alt="Фото">`

    addActiveMarker(String(count), contentMarker)
    	
}



function addMarkersToHtml(list) {

	const contentContainerMarkers = document.querySelector(".content__container--markers")

	for (let i = 0; i < list.length; i++ ) {
		if (i === 0) {
			contentContainerMarkers.innerHTML += `<div data-id="${i}" class="content__marker content__marker--active"></div>`
         } else {
			contentContainerMarkers.innerHTML += `<div data-id="${i}" class="content__marker"></div>`
		}
		
	}

    addBannerToHtml(0, list)
    
}


    export {addBookCards, addBannerToHtml, addMarkersToHtml}