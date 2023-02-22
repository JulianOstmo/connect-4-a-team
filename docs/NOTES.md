# Kata Goals

## Brown Belt

- [ ] BDD Double-loop
- [ ] Hexagonal Architecture
- [ ] IaC
- [ ] Deploy app and Smoke Testing
- [ ] Lean UX (CLI)

## Black Belt

- [ ] Event Storming

## Red White

- [ ] Monitoring

# Project setup

- Add cookie cutter to the TS Template repo ✅
- Add Jest Cucumber ✅
- Add SonarCloud, Snyk, CI/CD pipeline stuff
- Determine if Connect 4 kata should be internal or external Github
  - internal = Travis
  - external = Github Actions ✅
- Something for smoke testing, e.g. Pact

# Pomodoro 1 - mob

- Write out the Domains ✅
- Write out the Entities ✅
- Prepare User Stories

# Pomodoro 2 - mob

- Fix detect-secrets ✅
- Fix soanr-scanner
- Prepare User Stories

## Pomodoro 3 - mob

- Create BACKLOG.md
- Prepare User Stories

## Pomodoro 4 - Driver: Julian O; Navigator: Gearoid

- User Story 1 - As a user I want to have an empty grid So that I can place my first disc 🚧
- UAT 1.1 - Initialisation of the game todo ⚠
  ```
  GIVEN two Players
  WHEN they start a new game
  THEN they should see an empty grid
  ```

## Pomodoro 5 - Driver: Julian O; Navigator: Attila; Observer: Gearoid

- Configuring jest cucumber fusion to work with `.ts` files, too ✅
- User Story 1 - As a user I want to have an empty grid So that I can place my first disc 🚧
  - UAT 1.1 - Initialisation of the game todo 🚧
    ```
    GIVEN two Players
    WHEN they start a new game
    THEN they should see an empty grid
    ```

## Pomodoro 6 - Driver: Julian O; Navigator: Attila; Observer: Gearoid

- User Story 1 - As a user I want to have an empty grid So that I can place my first disc 🚧
  - UAT 1.1 - Initialisation of the game todo 🚧
    ```
    GIVEN two Players
    WHEN they start a new game
    THEN they should see an empty grid
    ```

## Pomodoro 7 - Driver: Julian O; Navigator: Attila; Observer: Gearoid

- User Story 1 - As a user I want to have an empty grid So that I can place my first disc 🚧
  - UAT 1.1 - Initialisation of the game todo 🚧
    ```
    GIVEN two Players
    WHEN they start a new game
    THEN they should see an empty grid
    ```

## Pomodoro 8 - Driver: Julian O; Navigator: Attila; Observer: Gearoid

- User Story 1 - As a user I want to have an empty grid So that I can place my first disc 🚧
  - UAT 1.1 - Initialisation of the game todo ✅
    ```
    GIVEN two Players
    WHEN they start a new game
    THEN they should see an empty grid
    ```
  - UAT 1.2 - Players are chosen 🚧
    ```
    GIVEN two Players
    WHEN they start a new game
    THEN one player is marked as Player 1
    AND the other is marked as Player 2
    AND the game displays that 'Player 1 has a turn'
    ```

## Pomodoro 9 - Driver: Julian Ostmo; Navigator: Gearóid; Observer: Attila

- User Story 1 - As a user I want to have an empty grid So that I can place my first disc 🚧

  - UAT 1.2 - Players are chosen 🚧
    ```
    GIVEN two Players ✅
    WHEN they start a new game ✅
    THEN one player is marked as Player 1 ✅
    AND the other is marked as Player 2 ⚠
    AND the game displays that 'Player 1 has a turn' ⚠
    ```

- User Story 2 - As a player I want choose where I place my disc So that I can place it on the grid

  - UAT 2.1 - Player 1 takes the first turn ⚠

    ```
    GIVEN an empty grid
    AND Player 1 has their turn
    WHEN they take their turn
    THEN they choose a position
    AND place their disc on the grid
    AND then the turn alternates to Player 2
    AND the game displays that 'Player 2 has a turn'
    ```

## Pomodoro 10 - Driver: Gearóid; Navigator: Julian Ostmo; Observer: Attila

- User Story 1 - As a user I want to have an empty grid So that I can place my first disc 🚧

  - UAT 1.2 - Players are chosen 🚧
    ```
    GIVEN two Players ✅
    WHEN they start a new game ✅
    THEN one player is marked as Player 1 ✅
    AND the other is marked as Player 2 🚧
    AND the game displays that 'Player 1 has a turn' ⚠
    ```

- User Story 2 - As a player I want choose where I place my disc So that I can place it on the grid

  - UAT 2.1 - Player 1 takes the first turn ⚠

    ```
    GIVEN an empty grid
    AND Player 1 has their turn
    WHEN they take their turn
    THEN they choose a position
    AND place their disc on the grid
    AND then the turn alternates to Player 2
    AND the game displays that 'Player 2 has a turn'
    ```
