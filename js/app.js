/*
 * Create a list that holds all of your cards
 */
//var allCards = [];
var allCards = $('.cardInner i');
var openCards = [];
var previousCard;
var moves = 0;


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
$('.cardInner').click(function(){
    var card = $(this);
    
    var cardType = card.attr('class');
    /* If a card is clicked:
     *  - display the card's symbol (put this functionality in another function that you call from this one)*/
    card.toggleClass('open');//TODO put in separate function
    
    /*  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)*/
//    openCards.push(card.children('i')[0]);//TODO put in separate function
    openCards.push(card);//TODO put in separate function
    
    /*- if the list already has another card, check to see if the two cards match*/
    if(openCards.length > 1){
        var card1 = openCards[0].children('i')[0];
        var card2 = openCards[1].children('i')[0];
        var type1= card1.classList[1];
        var type2 = card2.classList[1];
        if(type1 === type2){
            /*    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)*/
            console.log("match!");
            $(card1).toggleClass('match');
            $(card2).toggleClass('match');
            openCards =[];
        }else{
            setTimeout( function (){
                /*+ if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)*/
                
                //TODO handle issue of user clicking 
                // before 1700 ms is up.
                    if(openCards[0].hasClass('open')){
                        openCards[0].toggleClass('open');
                    }
                    if(openCards[1].hasClass('open')){
                        openCards[1].toggleClass('open');
                    }                
                    openCards = [];
                }, 1700);
        }
        /*+ increment the move counter and display it on the page (put this functionality in another function that you call from this one)*/
        incrementMoves();
    }
     
});

function incrementMoves(){
    moves++;
    $('.moves').html(moves);
}

/*
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
