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