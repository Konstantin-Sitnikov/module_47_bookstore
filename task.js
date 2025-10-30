    const key = "AIzaSyAAe2ikW9G4PehhqDt_9eo0KZSXoj5-3WI"
	let loadindex = 0
	let category = "Crafts Hobbies"
	
	
	
	const fetchData = async () => {
        let data = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=${key}&printType=books&startIndex=${loadindex}&maxResults=6&langRestrict=en`);
        let response = await data.json();

		for (i of response.items) {
			console.log(i.volumeInfo)
		}
		loadindex += 6
		console.log(loadindex)

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