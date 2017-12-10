/*
 * Create a list that holds all of your cards
 */
var allCards = [];
var openCards = [];
var previousCard;


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/* set up the event listener for a card.*/
//$('.cardInner').click(function(){
$('.cardInner').click(function(){
    var card = $(this);
    
    var cardType = card.attr('class');
    /* If a card is clicked:
     *  - display the card's symbol (put this functionality in another function that you call from this one)*/
    card.toggleClass('open');//TODO put in separate function
    console.log(cardType);
    
    /*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)*/
    //openCards.push(card);//TODO put in separate function
    
    /*- if the list already has another card, check to see if the two cards match*/
//    if(openCards.length > 0){
//        var card1 = openCards[0];
//        var card2 = openCards[1];
//        card1.classList
//    }
    
    
});

/*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
