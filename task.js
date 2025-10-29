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





function addInfoToHtml (object) {

	const contentTextCity = document.querySelector(".content__text--city")
	const contentTextArea = document.querySelector(".content__text--area")
	const contentTextRepairTime = document.querySelector(".content__text--repair-time")
	const contentTextRepairRcost = document.querySelector(".content__text--repair-rcost")
	const contentContainerImg = document.querySelector(".content__container--img")

	contentTextCity.innerHTML = `${object.city}<br>${object.district}`
	contentTextArea.innerHTML = `${object["apartment area"]}`
	contentTextRepairTime.innerHTML = `${object["repair time"]}`
	contentTextRepairRcost.innerHTML = `${object["repair rcost"]}`
	contentContainerImg.innerHTML = `<img src="${object['img sqr']}" alt="foto" class="content__img">` 

}

function addCategoriesToHtml(list) {
	const contentCategories = document.querySelector(".content__categories")

	const firstСategory = list[0]
	const remainingListCategories = list.slice(1)

	contentCategories.innerHTML += `<li data-id="${firstСategory}" class="content__item content__item--active">${firstСategory}</li>`
	
	for (cat of remainingListCategories) {
		contentCategories.innerHTML += `<li data-id="${cat}" class="content__item">${cat}</li>`
	}

}

addCategoriesToHtml(categoryesList)