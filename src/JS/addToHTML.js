
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


    export {addBannerToHtml, addMarkersToHtml}