## Web Memory Game
This is a web version of the classic memory game many people played as kids. The goal of the game is to match 8 pairs of cards in as few turns as possible.

### About
This is a project I did for the Udacity [Front End Web](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) developer nanodegree. The project uses jQuery for DOM manipulation and css animations  to flip the cards as well as javascript for the basic game logic. To play the game in any browser simply download the files and in the browser open `index.html`.

### How to Play
* Select a card to reveal it's symbol
* Select a 2nd card to reveal it's symbol
* If the 2 flipped cards match the cards will remain revealed
* If the 2 cards do not match the cards will flip back over, remember there location for future guesses
* Once all 16 cards have been matched the player has won the game

[Play It](https://jloschen.github.io/)

### Game Features
* A game timer
* Move counter
* CSS Animations for card flipping over, failed match and successful match
* Random shuffling of card locations at the start of each game
* A star rating system based on the number of moves: 
	* 0 to 13 moves = 3 star
	* 14 to 18 moves = 2 star
	* 19+ moves = 1 star


### Dependencies

The game is dependent on [jQuery](https://jquery.com/) and a [google font](https://fonts.google.com/specimen/Coda) which it installs from a CDNs. Other than that all that's needed are the included files.