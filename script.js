//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
var userChoice = "";
var computerChoice = "";
var winner = "";
var choices = ["rock" , "paper" , "scissors"];
console.log(userChoice);
console.log(computerChoice);
console.log(winner);
console.log(choices);

//FUNCTIONS
$(document).ready(function() {
        console.log("Document ready");
        $("#rock").click(function() {
                $(".choices").text("Picked Rock");
        });
        $("#paper").click(function() {
                $(".choices").text("Picked Paper");      
        });
        $("#scissors").click(function() {
                $(".choices").text("Picked Scissors");  
        });
        Math.random(0, 1 , 2);
        var rock = 0;
        var paper = 1;
        var scissors = 2;
        if (number = 0) {
                $(".choice").text("Picked Rock");
        } else if (number = 1) {
                $(".choice").text("Picked Paper");
        } else if (number = 2) {
                $(".choice").text("Picked Scissors");
        }
});
$(document).ready(function() {
        
        
});




// DOCUMENT READY FUNCTION

