let output = document.getElementById("container")

function getPeople(){
	for(var i = 0; i < famousPeople.length; i++){

		//Create the Elements
		var myPerson = famousPeople[i];
		var cards = `<div class ="allCards">
					<header>${myPerson.name}</header>
					<section><p>${myPerson.bio}</p>
					<img src=${myPerson.image}>
					</section>
					<footer>${myPerson.lifespan.birth} - ${myPerson.lifespan.death}</footer>
					</div>`;

		output.innerHTML += cards;
	} //End of ForLoop

	addBackground();
	dottedBorder();

}  //End of getPeopleFunction



	//Start  Function
function addBackground(){

	var getAllCards = document.getElementsByClassName("allCards");
	for(var i = 0; i < getAllCards.length; i++){
		// console.log("cards", getAllCards.length);
		if(i % 2 === 0){
			getAllCards[i].classList.add("blue")
		}else {
			getAllCards[i].classList.add("yellow");
		}
	}

}  //End addBackground Function


function dottedBorder() {
		var getAllCards = document.getElementsByClassName("allCards");
		let input = document.getElementById("input");

		for(var i = 0; i < getAllCards.length; i++){
			var currentCard = getAllCards[i];
			currentCard.addEventListener("click", function(){
				this.classList.toggle("dots");
				input.focus();
				mirrorText(this);
				//event.target would work in place of "this"
				// console.log("this", this);
			})
		}
}

function mirrorText(currentCard) {

	var input = document.getElementById("input");
	// console.log("mirrorText", currentCard);

	input.addEventListener("keyup", function(){
		if (currentCard.classList.contains("dots")){
			currentCard.querySelector("p").innerHTML = input.value;
			// console.log("current", currentCard);	
		}
	})

	clearText(currentCard);
}


function clearText(currentCard){
	var input = document.getElementById("input");
	input.addEventListener("keydown", function(event){
		if(event.keyCode === 13) {
			currentCard.classList.remove("dots");
			input.value = "";
	}

	})
}


getPeople();


