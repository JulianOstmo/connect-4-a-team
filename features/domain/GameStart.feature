Feature: As a user I want to have an empty grid So that I can place my first disc

Scenario: Initialisation of the game
    Given two Players
    When they start a new game
    Then they should see an empty grid