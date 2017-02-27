var fs = require("fs")
var BasicFlashcard = function(cardFront, cardBack) {
    this.cardFront = cardFront;
    this.cardBack = cardBack;
};

BasicFlashcard.prototype.addCard = function() {
    fs.appendFile("flashCardText.txt", JSON.stringify(this), function(err) {
        if (err) {
            console.log(err);
        };
        console.log("The new card was added to text file flashCardText.txt.");
    });
};
module.exports = BasicFlashcard;