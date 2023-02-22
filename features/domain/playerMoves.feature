Feature: As a player I want choose where I place my disc So that I can place it on the grid
    
    Scenario: Player 1 takes the first turn ⚠
        Given an empty grid
        And Player 1 has their turn
        When they take their turn
        Then they choose a position
        And place their disc on the grid
        And then the turn alternates to Player 2