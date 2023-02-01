# Connect 4 Kata (A Team)

https://www.codewars.com/kata/586c0909c1923fdb89002031

The game consists of a grid (7 columns and 6 rows) and two players that take turns to drop their discs. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

Your task is to create a Class called Connect4 that has a method called play which takes one argument for the column where the player is going to place their disc.

## Rules

If a player successfully has 4 discs horizontally, vertically or diagonally then you should return "Player n wins!” where n is the current player either 1 or 2.

If a player attempts to place a disc in a column that is full then you should return ”Column full!” and the next move must be taken by the same player.

If the game has been won by a player, any following moves should return ”Game has finished!”.

Any other move should return ”Player n has a turn” where n is the current player either 1 or 2.

Player 1 starts the game every time and alternates with player 2.

The columns are numbered 0-6 left to right.

## Domain

- The board has 7 columns and 6 rows
- Two players play the game
- Player 1 starts the game and alternates on turn
- The current player places a disc into a column
  - If the column isn't full, then it's placed to the first available row in the column, and we need to check the new state
    - If four discs of a particular player connect either vertically, horizontally or diagonally the player wins the game and the game ends
    - If all columns and rows are filled without a winning state, then the game ends in a draw
    - If there's no winner and the board is not full, the other player moves next
  - If the column is full, then no disc is placed and the player needs to move again

## Entities

- game
  - grid
    - columns
    - rows
  - player
    - number
      - one
      - two
    - discs
      - playerNumber
  - status
