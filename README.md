# Guess the Word Game

A fun and interactive word guessing game built with **HTML, CSS, and Vanilla JavaScript**.
Players have **6 attempts** to guess a **6-letter word** with the help of hints and color-coded feedback.

---

## Demo

* **Live Demo**: [Play the Game](https://mohamedhodaib.github.io/GuessWordGame/)

---

## Introduction

Guess the Word Game is a browser-based word puzzle inspired by popular word guessing games.
The player must guess a randomly selected 6-letter word within 6 tries.

Each guess provides instant visual feedback through color indicators to guide the player toward the correct answer.

---

## Table of Contents

* [Game Features](#game-features)
* [How to Play](#how-to-play)
* [Project Structure](#project-structure)
* [Game Words](#game-words)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Game Settings](#game-settings)
* [Color Legend](#color-legend)
* [Features Details](#features-details)
* [Configuration](#configuration)
* [Browser Support](#browser-support)
* [Future Improvements](#future-improvements)
* [Author](#author)
* [License](#license)
* [Contributing](#contributing)

---

## Game Features

* **6 Attempts**: Players get 6 tries to guess the correct word
* **Random Word Selection**: A random word is chosen every time the page loads
* **Color-Coded Feedback**:

  * 🟩 **Green**: Letter is correct and in the correct place
  * 🟨 **Orange**: Letter is correct but in the wrong place
  * 🔴 **Red**: Letter is not in the word
* **Hints System**: Players can use up to 2 hints to reveal random letters
* **Keyboard Navigation**: Use arrow keys (← →) to navigate between input fields
* **Auto-Focus**: Automatically moves to the next input after typing a letter
* **Backspace Handling**: Properly handles backspace to delete letters and move between inputs
* **Scroll-to-Result**: Automatically scrolls to the result message when the game ends
* **Visual Feedback**: Disabled tries have reduced opacity to show game progress
* **Responsive Design**: Works seamlessly on different screen sizes

---

## How to Play

1. **Start Guessing**: Begin typing letters in the input fields
2. **Navigate**: Use arrow keys (← →) to move between letter fields
3. **Submit Guess**: Click the **"Check"** button to submit your guess
4. **Use Hints**: Click the **"Hints"** button to reveal up to 2 random letters
5. **Win Condition**: Match all letters in their correct positions to win
6. **Lose Condition**: If you don't guess the word within 6 tries, you lose
7. **Special Achievement**: Win without using any hints to earn a special congratulation message

---

## Project Structure

```
GuessWordGame/
├── index.html      # HTML structure with game layout
├── guess.css       # Styling, colors, and responsive design
├── main.js         # Game logic and interactivity
└── README.md       # Project documentation
```

---

## Game Words

The game randomly selects one of the following words:

* Create
* Update
* Delete
* Master
* Branch
* Mainly
* Samara
* School

You can easily add more words by editing the `words` array in `main.js`:

```javascript
const words = ["Create", "Update", "Delete", "Master", "Branch", "Mainly", "Samara", "School"];
```

> All words are automatically converted to uppercase during gameplay.

---

## Technologies Used

* **HTML5**

  * Semantic structure
  * Accessible layout

* **CSS3**

  * Flexbox for layout
  * CSS variables for theme colors
  * Responsive design
  * CSS `clamp()` for adaptive font sizing

* **JavaScript (Vanilla)**

  * Dynamic DOM creation
  * Event handling (keyboard & mouse)
  * Game state management
  * Input validation
  * Random word selection

---

## Installation

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/mohamedHodaib/GuessWordGame.git
   ```

2. Navigate into the project folder:

   ```bash
   cd GuessWordGame
   ```

3. Open `index.html` in your browser.

No additional dependencies or build tools are required.

---

## Game Settings

You can customize the game by modifying these variables in `main.js`:

```javascript
let numberOfTries = 6;      // Number of attempts
let numberOfLetters = 6;    // Length of the word
let numberOfHints = 2;      // Maximum hints available
```

---

## Color Legend

| Color     | Meaning                                  |
| --------- | ---------------------------------------- |
| 🟩 Green  | Letter is in the correct position        |
| 🟨 Orange | Letter is in the word but wrong position |
| 🔴 Red    | Letter is not in the word                |

---

## Features Details

### Input Management

* Accepts only one letter per input field
* Automatically converts lowercase to uppercase
* Auto-advances to the next input
* Supports arrow key navigation
* Prevents interaction with disabled tries

### Hint System

* Reveals one random empty letter per hint
* Displays remaining hints count
* Disables hint button when no hints remain
* Only fills empty, enabled inputs

### Try Management

* Only the current try is editable
* Previous tries become disabled after submission
* Automatically enables the next try
* All inputs disable when the game ends

### Game End Conditions

* **Victory**: All 6 letters are guessed correctly
* **Defeat**: All 6 tries are used
* Displays the correct word at the end
* Shows special message if no hints were used
* Disables all inputs and buttons

---

## Configuration

You can modify:

* Theme colors via CSS variables in `:root`
* Word list inside `main.js`
* Number of tries and hints
* Footer or title text from JavaScript variables

Example CSS variable customization:

```css
:root {
  --primary-color: tomato;
  --correct-color: #18ba89;
  --semi-correct-color: #f89e13;
  --wrong-color: red;
}
```

---

## Browser Support

Tested and works on:

* Chrome / Chromium
* Firefox
* Safari
* Edge
* Opera

---

## Future Improvements

* Add difficulty levels
* Add on-screen virtual keyboard
* Add dark mode
* Add timer mode
* Add score tracking system
* Store best score in localStorage

---

## Author

**Mohamed Hodaib**

---

## License

This project is open source and available under the **MIT License**.

---

## Contributing

Feel free to fork this project and submit pull requests for improvements or new features!

---
