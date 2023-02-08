# Backlog

## User Story 1 - As a user I want to have an empty grid So that I can place my first disc

### UAT 1.1 - Initialisation of the game

```
GIVEN two Players
WHEN they start a new game
THEN they should see an empty grid
```

### UAT 1.2 - Players are chosen

```
GIVEN two Players
WHEN they start a new game
THEN one player is marked as Player 1
AND the other is marked as Player 2
AND the game displays that 'Player 1 has a turn'
```

## User Story 2 - As a player I want choose where I place my disc So that I can place it on the grid

### UAT 2.1 - Player 1 takes the first turn

```
GIVEN an empty grid
AND Player 1 has their turn
WHEN they take their turn
THEN they choose a position
AND place their disc on the grid
AND then the turn alternates to Player 2
AND the game displays that 'Player 2 has a turn'
```

### UAT2.2 - Player 2 takes their turn with one disc already on the grid

```
GIVEN a grid with one disc
AND Player 2 has their turn
WHEN they take their turn
THEN they choose a position
AND they choose same column
AND place their disc on the grid
AND then the turn alternates to Player 1
AND the game displays that 'Player 1 has a turn'
```

### UAT2.3 - Player 1 takes their turn and places their disc on a full column

```
GIVEN a grid with discs
AND Player 1 has their turn
WHEN they take their turn
THEN they choose a position
AND they choose a column with no space
AND game displays an error message 'Column Full!'
AND the turn remains with them
```

## US3 - As a player I want to know the state of the game So that I know if the game is over

### UAT 3.1 - Draw game

```
GIVEN a grid with <discs>
WHEN <player> takes their turn
AND chooses column <column>
THEN the entire grid is full
AND game displays the message 'Game ended in a draw!'
```

Examples

```
| discs | column | player |
| [[2, 0, 2, 1, 2, 1, 2], [1, 2, 1, 2, 1, 2, 1], [1, 2, 1, 2, 1, 2, 1], [2, 1, 2, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1, 2], [1, 2, 1, 2, 1, 2, 1]] | 1 | Player 1 |
| [[0, 1, 2, 1, 2, 1, 2], [1, 2, 1, 2, 1, 2, 1], [1, 2, 1, 2, 1, 2, 1], [2, 1, 2, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1, 2], [1, 2, 1, 2, 1, 2, 1]] | 0 | Player 2 |
```

### UAT3.2 - Horizontal win

```
GIVEN a grid with <discs>
WHEN <player> takes their turn
AND chooses column <column>
THEN they connect four discs horizontally
AND game displays the message '<player> wins!'
```

Examples

```
| discs | column | player |
| [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 0, 1, 1, 1]] | 3 | Player 1 |
| [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 2, 2], [1, 1, 0, 2, 1, 1, 1]] | 3 | Player 2 |
```

### UAT3.3 - Vertical win

```
GIVEN a grid with <discs>
WHEN <player> takes their turn
AND chooses column <column>
THEN they connect four discs vertically
AND game displays the message '<player> wins!'
```

Examples

```
| discs | column | player |
| [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 0, 0, 1], [2, 2, 2, 0, 0, 0, 1]] | 6 | Player 1 |
| [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0], [2, 0, 0, 0, 0, 1, 0], [2, 0, 0, 0, 0, 2, 0], [2, 0, 0, 0, 2, 1, 2], [1, 1, 0, 2, 1, 1, 1]] | 0 | Player 2 |
```

### UAT3.4 - Diagonal win

```
GIVEN a grid with <discs>
WHEN <player> takes their turn
AND chooses column <column>
THEN they connect four discs diagonally
AND game displays the message '<player> wins!'
```

Examples

```
| discs | column | player |
| [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 1], [0, 0, 2, 2, 2, 1, 1], [0, 2, 2, 1, 2, 2, 1]] | 3 | Player 1 |
| [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 1, 0, 0, 1], [1, 2, 2, 2, 1, 1, 1], [2, 2, 2, 1, 2, 1, 1]] | 3 | Player 2 |
```

### UAT3.5 - Game over

```
GIVEN a full grid
AND the game is finished
WHEN <player> takes their turn
AND chooses column <column>
THEN game displays the message 'Game has finished!'
```

Examples

```
| player   | column |
| player 1 | 2      |
| player 2 | 4      |
```
