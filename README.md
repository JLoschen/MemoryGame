# Web Memory Game
[Play It](https://jloschen.github.io/)

![Pic of game](/memory.png)

This is a web version of the classic memory game many people played as kids. The goal of the game is to match 8 pairs of cards in as few turns as possible.

## About
This is a project I did for the Udacity [Front End Web](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) developer nanodegree. The project uses jQuery for DOM manipulation and css animations  to flip the cards as well as javascript for the basic game logic. 

## How to Play
* Select a card to reveal it's symbol
* Select a 2nd card to reveal it's symbol
* If the 2 flipped cards match the cards will remain revealed
* If the 2 cards do not match the cards will flip back over, remember there location for future guesses
* Once all 16 cards have been matched the player has won the game

## Game Features
* A game timer
* Move counter
* CSS Animations for card flipping over, failed match and successful match
* Random shuffling of card locations at the start of each game
* A star rating system based on the number of moves: 
	* 0 to 13 moves = 3 star
	* 14 to 18 moves = 2 star
	* 19+ moves = 1 star


## Resources I Used
* [Card flipping](https://www.youtube.com/watch?v=ajFK1WKxVDo)
* [Match Fail and Success animations](https://www.youtube.com/watch?v=f1WMjDx4snI)
* [Sweet Alert Modal Dialog](https://www.youtube.com/watch?v=F8rLwoLtCpM)
* [Timer](https://www.youtube.com/watch?v=fF-vtP3sjPc&feature=youtu.be)
* [Responsive Design for mobile screens](https://www.youtube.com/watch?v=2KL-z9A56SQ)
* [jQuery (DOM manipulation)](https://jquery.com/)

## Dependencies
The game is dependent on [jQuery](https://jquery.com/) and a [google font](https://fonts.google.com/specimen/Coda) which it installs from a CDNs. Other than that all that's needed are the included files css,html and javascript files.

## How to Setup the Game
1. [Download](https://github.com/JLoschen/MemoryGame/archive/master.zip) or [Clone](https://github.com/JLoschen/MemoryGame.git) the Repository.
2. Open `index.html` file to view the project in your browser.