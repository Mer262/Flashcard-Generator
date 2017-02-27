// var flashcards = require("./exports.js")
var inquirer = require("inquirer");
var BasicFlashcard = require('./basic_flashcard.js');
var ClozeFlashcard = require('./clozecard.js');

inquirer.prompt([{
    type: "list",
    name: "start",
    message: "What type of flashcard would you like to create?",
    choices: ["Basic Flashcard", "Cloze Flashcard"]
}]).then(function(userInput) {
    var commandArg = userInput.start
    if (commandArg === "Basic Flashcard") {
        inquirer.prompt([{
                type: "input",
                name: "cardFront",
                message: "Enter the text for the front of the card."
            },
            {
                type: "input",
                name: "cardBack",
                message: "Enter the text for the back of the card."
            }
        ]).then(function(input) {
            var cardFront = input.cardFront;
            var cardBack = input.cardBack;
            new BasicFlashcard(cardFront, cardBack).addCard();
        });
    } else if (commandArg === "Cloze Flashcard") {
        inquirer.prompt([{
                type: "input",
                name: "Cloze",
                message: "Enter the Cloze statement for this card - the part that is hidden initially."
            },
            {
                type: "input",
                name: "ClozeText",
                messsage: "Enter the full text of the card  - Cloze statement and the answer."
            }
        ]).then(function(input) {
            var fullAnswer = input.Cloze;
            var clozeSnippet = input.ClozeText;
            new ClozeFlashcard(fullAnswer, clozeSnippet).matchCloze();
        });
    };
});