/* Create a list that holds all of your cards */
var openCards = [];
var previousCard;
var moves = 0;
var numMatches = 0;
var numStars = 3;
var waitingFor2CardsToFlipBack = false;//In the 1000ms after 2 cards displayed don't allow another selection
var winningMessages = [
    'Better late than never....',
    'Better luck next time',
    'Good job! Mr. grader person',
    'Wow, that was fast, you are at 1 with the random number generator!'
];

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

$('.restart').click(function(){ 
    waitingFor2CardsToFlipBack = false;
    
    var allCardItems = [];
    $('.card-back').each(function(index, element){
        var card = $(this);
        card.removeClass('open');
        card.removeClass('match');
        card.removeClass('mismatch');
        allCardItems.push(element);
        card.detach();
    });
    
    //shuffle order
    allCardItems = shuffle(allCardItems);
    
    //add new cards to visual tree
    var cards = $('.card');
    for(var i = 0; i < cards.length; i++){
        $(cards[i]).append(allCardItems[i]);
    }
    
    //reset move count
    moves = 0;
    numMatches = 0;
    $('.moves').html(moves);
    
    //reset stars count
    $('.stars li').remove();
    $('.stars').append(`<li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>`);
});

/* set up the event listener for a card.*/
$('.card-back').click(function(){
    var card = $(this);
    
    //if the card is aleady showing or doing mismatch animation then ignore click
    if(card.hasClass('open') || waitingFor2CardsToFlipBack) return;
    
    //flip the card over
    card.toggleClass('open');
    openCards.push(card);
    
    //if this is the 2nd card of the guess
    if(openCards.length > 1){
        
        //lock user clicking during animation
        waitingFor2CardsToFlipBack = true;
        
        //get font-awesome class of the 2 cards
        var card1 = openCards[0];
        var card2 = openCards[1];
        var type1= card1.children('i')[0].classList[1];
        var type2 = card2.children('i')[0].classList[1];
        
        //if the 2 flipped cards are of the save font-awesome class
        if(type1 === type2){
            
            //trigger green success animation on both cards
            $(card1).toggleClass('match');
            $(card2).toggleClass('match');
            
            openCards =[];
            numMatches++;
            
            //if they found all matches
            if(numMatches === 8){
                displayWinningMessage();
                updateNumStars();
            }
            
            //allow the user to click again
            waitingFor2CardsToFlipBack = false;
            
        }else{//not a match
            
            //start red mismatch animation
            openCards[0].addClass('mismatch');
            openCards[1].addClass('mismatch');
            
            //flip cards 
            setTimeout(hideMisMatchCards, 1500);
        }
        incrementMoves();
        updateNumStars();
    }
     
});

function hideMisMatchCards(){
    openCards[0].removeClass('mismatch');
    openCards[1].removeClass('mismatch');
    openCards[0].removeClass('open');
    openCards[1].removeClass('open');
    waitingFor2CardsToFlipBack = false;
    openCards = [];
}

function incrementMoves(){
    moves++;
    $('.moves').html(moves);
}

function updateNumStars(){
    if(moves === 18){
        removeStar();
    }else if(moves === 15){
        removeStar();
    }else if(moves === 12){
        removeStar();
    }
}

function removeStar(){
    numStars--;
    $('.stars li').first().remove();
    var starToRemove = $('.stars');
    $('.stars').append(`<li><i class="fa fa-star-o"></i></li>`);
}

function displayWinningMessage(){
    var message = 'You win with ' + numStars + ' stars.\n' + winningMessages[numStars];
    setTimeout(function(){        
            swal({
                title:'You win!',
                text:message,
                type:'success',
                confirmButtonText:'OK'
            });
    },1000);
}
