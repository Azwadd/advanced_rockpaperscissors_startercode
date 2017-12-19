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
//FUNCTIONS

// DOCUMENT READY FUNCTION
$(document).ready(function() {
        $("#nameVal").click(function(e){
                e.preventDefault();
                var userName = $("#name").val();
                console.log(userName);
                $("#nameValue").text(userName).append("'s Choice");
        });
        $("#submitValue").click(function(e){
                e.preventDefault();
                var userChoice = $("#userValue").val();
                var choices = ["rock" , "paper" , "scissors" , "lizard" , "spock"];
                var computerNumber = Math.floor(Math.random() * 5);
                var computerChoice = choices[computerNumber]; 
                console.log(computerChoice);
                console.log(choices);
                $("#crock").css("background-color" , "#333333");
                $("#cpaper").css("background-color" , "#333333");
                $("#cscissors").css("background-color" , "#333333");
                $("#urock").css("background-color" , "#333333");
                $("#upaper").css("background-color" , "#333333");
                $("#uscissors").css("background-color" , "#333333");
                $("#ulizard").css("background-color" , "#333333");
                $("#uspock").css("background-color" , "#333333");
                $("#clizard").css("background-color" , "#333333");
                $("#cspock").css("background-color" , "#333333");
                if (computerChoice === userChoice.toLowerCase()){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("It's a tie");
                } else if (computerChoice === choices[0] && userChoice.toLowerCase() === choices[2]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won!");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#crock").css("background-color" , "#daa520");
                        $("#uscissors").css("background-color" , "#daa520");
                } else if (computerChoice === choices[0] && userChoice.toLowerCase() === choices[1]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Lost!");
                        $('#cresults').html(function(i, val) { return +val+1 ;});
                        $("#crock").css("background-color" , "#daa520");
                        $("#upaper").css("background-color" , "#daa520");
                } else if (computerChoice === choices[1] && userChoice.toLowerCase() === choices[0]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Lost!");
                        $("#cresults").html(function(i, val) { return +val+1 ;});
                        $("#urock").css("background-color" , "#daa520");
                        $("#cpaper").css("background-color" , "#daa520");
                } else if (computerChoice === choices[1] && userChoice.toLowerCase() === choices[2]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#uscissors").css("background-color" , "#daa520");
                        $("#cpaper").css("background-color" , "#daa520");
                } else if (computerChoice === choices[2] && userChoice.toLowerCase() === choices[0]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#urock").css("background-color" , "#daa520");
                        $("#cscissors").css("background-color" , "#daa520");
                } else if (computerChoice === choices[2] && userChoice.toLowerCase() ===  choices[1]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Lost!");
                        $("#cresults").html(function(i, val) { return +val+1 ;});
                        $("#upaper").css("background-color" , "#daa520");
                        $("#cscissors").css("background-color" , "#daa520");
                } else if (computerChoice === choices[3] && userChoice.toLowerCase() === choices[4]) {
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Lost!");
                        $("#cresults").html(function(i, val) { return +val+1 ;});
                        $("#clizard").css("background-color" , "#daa520");
                        $("#uspock").css("background-color" , "#daa520");
                } else if (computerChoice === choices[3] && userChoice.toLowerCase() === choices[1]) {
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Lost!");
                        $("#cresults").html(function(i, val) { return +val+1 ;});
                        $("#clizard").css("background-color" , "#daa520");
                        $("#upaper").css("background-color" , "#daa520");
                } else if (computerChoice === choices[4] && userChoice.toLowerCase() === choices[3]) {
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Lost!");
                        $("#cresults").html(function(i, val) { return +val+1 ;});
                        $("#cspock").css("background-color" , "#daa520");
                        $("#ulizard").css("background-color" , "#daa520");
                } else if (computerChoice === choices[4] && userChoice.toLowerCase() === choices[1]) {
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Lost!");
                        $("#cresults").html(function(i, val) { return +val+1 ;});
                        $("#cspock").css("background-color" , "#daa520");
                        $("#upaper").css("background-color" , "#daa520");
                } else if (computerChoice === choices[3] && userChoice.toLowerCase() === choices[2]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#clizard").css("background-color" , "#daa520");
                        $("#uscissors").css("background-color" , "#daa520");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                } else if (computerChoice === choices[3] && userChoice.toLowerCase() === choices[0]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#clizard").css("background-color" , "#daa520");
                        $("#urock").css("background-color" , "#daa520");
                } else if (computerChoice === choices[4] && userChoice.toLowerCase() === choices[2]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#cspock").css("background-color" , "#daa520");
                        $("#uscissors").css("background-color" , "#daa520");
                } else if (computerChoice === choices[4] && userChoice.toLowerCase() === choices[0]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#cspock").css("background-color" , "#daa520");
                        $("#urock").css("background-color" , "#daa520");
                } else if (computerChoice === choices[0] && userChoice.toLowerCase() === choices[3]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#crock").css("background-color" , "#daa520");
                        $("#ulizard").css("background-color" , "#daa520");
                } else if (computerChoice === choices[2] && userChoice.toLowerCase() === choices[3]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Lost");
                        $("#cresults").html(function(i, val) { return +val+1 ;});
                        $("#cscissors").css("background-color" , "#daa520");
                        $("#ulizard").css("background-color" , "#daa520");
                } else if (computerChoice === choices[1] && userChoice.toLowerCase() === choices[3]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#cpaper").css("background-color" , "#daa520");
                        $("#ulizard").css("background-color" , "#daa520");
                } else if (computerChoice === choices[0] && userChoice.toLowerCase() === choices[4]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#crock").css("background-color" , "#daa520");
                        $("#uspock").css("background-color" , "#daa520");
                } else if (computerChoice === choices[1] && userChoice.toLowerCase() === choices[4]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Lost");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#cpaper").css("background-color" , "#daa520");
                        $("#uspock").css("background-color" , "#daa520");
                } else if (computerChoice === choices[2] && userChoice.toLowerCase() === choices[4]){
                        $("#uchoices").text(userChoice.toLowerCase());
                        $("#cchoice").text(computerChoice);
                        $("#won").text("You Won");
                        $("#uresults").html(function(i, val) { return +val+1 ;});
                        $("#cscissors").css("background-color" , "#daa520");
                        $("#uspock").css("background-color" , "#daa520");
                } else {
                        alert("Not Valid Input");
                        console.log("no conditions were true");
                }
        });
});
