/*
Tom Elliott
Mood Monitor.
*/

/*
Initialise the variables to be used for the solution.
Create composite mood variable that can easily be amended in the future.
In addition the variable can be easily utilised in the algorithm to generate mood image. 
I wanted to normalise the mood variable whilst placing additional emphasis on the coffee and fridge levels over the weather.
*/
var fridgeLevel = 8;
	coffeeLevel = 6;
	tempLevel = 22.5;
// I have created alternative variables below that could be used. 
// They would generate random values between 1 & 10 for the coffee and fridge and between 0 and 35 for the temperature.
// fridgeLevel = Math.floor((Math.random() * 10) + 1);
// coffeeLevel = Math.floor((Math.random() * 10) + 1);
// tempLevel = (Math.random()*35+1).toFixed(1);
var mood;


// Assigns the initial value for the Fridge HTML Box.
function fridgeValue(){
	var targetDiv = document.getElementById("fridge").getElementsByClassName("content")[0];
	targetDiv.innerHTML = fridgeLevel;	
}

// Assigns the initial value for the Coffee HTML Box.
function coffeeValue(){
	var targetDiv = document.getElementById("coffee").getElementsByClassName("content")[0];
	targetDiv.innerHTML = coffeeLevel;	
}

// Assigns the initial value for the Temperature HTML Box.
function tempValue(){
	var targetDiv = document.getElementById("temp").getElementsByClassName("content")[0];
	targetDiv.innerHTML = tempLevel;	
}

//update mood value number
function moodValue() {
	mood = (fridgeLevel + coffeeLevel + (tempLevel / 2)) / 3;
	setTimeout(arguments.callee, 100);
}

/* 
Assigns the image for the Mood Box.
The function checks the value of mood variable and assigns the image accordingly.
Moods:
					       	&#9788; (sun)
                            &#9730; (umbrella)
                            &#9748; (umbrella with rain)
                            &#9729; (cloud)
                            &#9889; (lightning)
*/
function getMoodImage() {
	(function(){
		var moodImage;
		if (mood > 5 && mood <= 7) {
			moodImage = "&#9730;";
		} else if (mood > 8 && mood <= 10) {
			moodImage = "&#9889;";
		} else if(mood > 10 && mood < 30) {
			moodImage = "&#9729";
		} else if (mood > 30) {
			moodImage = "&#9788;";
		} else {
			moodImage = "&#9748"; 
		}
		setTimeout(arguments.callee, 1000);
		var targetDiv = document.getElementById("mood").getElementsByClassName("content")[0];
		targetDiv.innerHTML = moodImage;
	})();
}

/*
Function to simulate a delivery re-stocking the fridge.
Timer set to increment every 45 seconds.
The counter will only increment if the value for fridgeLevel is less than 10.
*/
function fridgePut() {
	(function(){
		if(fridgeLevel < 10) {
			fridgeLevel++;
		}
		setTimeout(arguments.callee, 45000);
		var targetDiv = document.getElementById("fridge").getElementsByClassName("content")[0];
		targetDiv.innerHTML = fridgeLevel;	
	})();
}	

/*
Function to simulate someone taking food from the fridge.
Timer set to decrement every 40 seconds.
The counter will only decrement if the value for fridgeLevel is higher than zero (0).
*/
function fridgeTake() {
	(function(){
		if(fridgeLevel > 0) {
			fridgeLevel--;
		}
		setTimeout(arguments.callee, 40000);
		var targetDiv = document.getElementById("fridge").getElementsByClassName("content")[0];
		targetDiv.innerHTML = fridgeLevel;	
	})();
}	

/*
Function to simulate an individual making themselves a coffee.
Timer set to decrement the value for coffeeLevel every 4 seconds.
The guys in the office love coffee!!
*/
function coffeeDrink() {
	(function(){
		if(coffeeLevel == 0) {
			coffeeRestock();
		}
		else {
			coffeeLevel--;
		}
		setTimeout(arguments.callee, 4000);
		var targetDiv = document.getElementById("coffee").getElementsByClassName("content")[0];
		targetDiv.innerHTML = coffeeLevel;	
})();
}		

/*
This function simulates a rise in temperature (presumably updated by office thermostat).
Timer set to increment every 6 minutes.
The counter will only increment if the value for tempLevel is less than 35.
*/
function tempUp() {
	(function(){
		if(tempLevel < 35) {
			tempLevel++;
		}
		setTimeout(arguments.callee, 600000);
		var targetDiv = document.getElementById("temp").getElementsByClassName("content")[0];
		targetDiv.innerHTML = tempLevel;	
	})();
}

/*
This function simulates a drop in temperature (presumably updated by office thermostat).
Timer set to decrement every 4 minutes.
The counter will only decrement if the value for tempLevel is more than 0.
*/
function tempDown() {
	(function(){
		if (tempLevel > 0) {
			tempLevel--;
		}
		setTimeout(arguments.callee, 400000);
		var targetDiv = document.getElementById("temp").getElementsByClassName("content")[0];
		targetDiv.innerHTML = tempLevel;	
	})();
}

/*
Function to simulate a delivery re-stocking the coffee levels.
The count for coffee will be reset to 10.
*/
function coffeeRestock() {
	coffeeLevel = 10;
}		

// Calling all functions so that they are operational when the page loads.
fridgeValue();
coffeeValue();
moodValue();
tempValue();
getMoodImage();
fridgePut();
fridgeTake();
setTimeout(coffeeDrink, 4000); // create delay to prevent the value for coffee decrementing immediately. 
tempUp();
tempDown();
