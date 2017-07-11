//the below line will find out for me how many characters
//there are in the word Tom
"Tom".length 
// The below is how to create an interactive popup box on a
// webiste
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');
//below is a prompt using JS
prompt("what is your name?");
//can use boolean values to find out if the length of a
//string is longer than said integer
"Hello there, I am a robot".length > 10
//use the below to log whatever appears between the
//parentheses
console.log()
//can also use the console to log boolean responses of if
//else statements etc. console log the particular letters in
//a substring:
console.log("Hamburgers are great".substring(3,5);
//the above code will return: bu by declaring a variable,
//JavaScript will store it and you can call it when you need
//to in the console.log
var myAge = 27;

//below is some code from my game intro
//
// Check if the user is ready to play!
confirm("If you are ready to play the best game of 2016, click OK!"); 
var age = prompt("What's your age?");

if (age < 13) { console.log("You are not encouraged to play this game due to it's sensitive content, however if you do proceed, you do so at your own risk!");
}
else { 
	console.log("We hope you enjoy your adventure!");
}
}}
console.log("You are at a Justin Bieber concert, and you
hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer == "yes") { console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}
else { console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}
var feedback = prompt("Please rate our game out of 10. Thanks!");

if(feedback > 8) { console.log("Thank you! We should race at the next concert!");
}
else { console.log("I'll keep practicing coding and racing.");
}
}
// Below is the greeting function! See line 7 We can join
// strings together using the plus sign (+) See the hint for
// more details about how this works.
// 
var greeting = function (name) { console.log("Great to see you," + " " + name);
};
}
// On line 11, call the greeting function! You can replace
// the name Emily between the quotes with any other name.
greeting("Emily");


 //creating a function. follow step by step as it makes it
 //easier var name first, then function and the name of that
 //function. then declare a variable that you want to store
 //and be able to call on. in this case the cost of oranges
 //entered multiplied by the cost of 5.
 var orangeCost = function (price) { var cost = price * 5;
 console.log(cost);

}
orangeCost(5);


 // below is a rock paper scissors game that randomly
 // generates the computers response
 var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (userChoice, computerChoice){
if (choice1 === choice2) {
    return "The result is a tie!"
}
else if (choice1 === "rock"){
     if (choice2 === "scissors")
        return "rock wins";
    
    else 
        return "paper wins";
}
else if (choice1 === "paper"){
    if (choice2 === "rock")
    return "paper wins";
    
    else
        return "scissors win"
}
else if (choice1 === "scissors"){
    if (choice2 === "rock")
        return "rock wins"
    
    else
        return "scissors wins";
}
}

//below code will create a loop of decrements of five from 100 till 5
for (i=100; end= i > 0; i -= 5){
    console.log(i);
}
//
var cities = ["Melbourne", "Amman", "Helsinki", "NYC", "San Francisco", "New Orleans", "Los Angeles"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}
//
