const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function getRandomPokemon() {
	let ID = 25;
	let result = fetch(API_BASE_URL + ID)
		.then((response) => {
			console.log("Response is: " + JSON.stringify(response, null, 4));

			return response.json();
		})
		.then((data) => {
			console.log("Data is: " + JSON.stringify(data, null, 4));

			console.log("Data retrieved for: " + data.name);

			let pokemonImage = document.getElementById("pokemonImage");
			pokemonImage.src = data.sprites.front_default;
			return data;
		})
		.catch((error) => {
			console.log(error);
		});
}
