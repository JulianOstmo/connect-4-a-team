Feature: As a user I want to have an empty grid So that I can place my first disc

Scenario: Initialisation of the game
    Given two Players
    When they start a new game
    Then they should see an empty grid

Scenario: Players are chosen
    Given two Players
    When they start a new game
    Then one player is marked as Player 1
    And the other is marked as Player 2
    And the game displays that "Player 1 has a turn"