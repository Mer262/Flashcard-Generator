var fs = require("fs");
var ClozeFlashcard = function(fullAnswer, clozeSnippet) {
    this.fullAnswer = fullAnswer;
    this.clozeSnippet = clozeSnippet;
};

ClozeFlashcard.prototype.showSnippet = function() {
    var full = this.fullAnswer;
    var partial = full.replace(this.clozeSnippet, "- - fill in the answer - -");
    console.log(partial);
};

ClozeFlashcard.prototype.addCard = function() {
    fs.appendFile("flashCardTest.txt", JSON.stringify(this), function(err) {
        if (err) {
            console.log(err);
        };
        console.log("The new card was added to text file flashCardText.txt.");
    });
};

ClozeFlashcard.prototype.matchCloze = function() {
    var match = this.fullAnswer.search(this.clozeSnippet);
    if (match !== -1) {
        this.addCard();
        this.showSnippet();
    } else {
        console.log("That statement didn't match the full answer you provided previously. Please check and try again.")
    }
};

module.exports = ClozeFlashcard;