# Guess the Word Game

A fun and interactive word guessing game built with HTML, CSS, and JavaScript. Players have 6 attempts to guess a 6-letter word with the help of hints and color-coded feedback.

## Demo
-**Live Demo**: [Demo](https://mohamedhodaib.github.io/GuessWordGame/)

## Game Features

- **6 Attempts**: Players get 6 tries to guess the correct word
- **Color-Coded Feedback**:
  - 🟩 **Green**: Letter is correct and in the correct place
  - 🟨 **Orange**: Letter is correct but in the wrong place
  - 🔴 **Red**: Letter is not in the word
- **Hints System**: Players can use up to 2 hints to reveal random letters
- **Keyboard Navigation**: Use arrow keys (← →) to navigate between input fields
- **Auto-Focus**: Automatically moves to the next input after typing a letter
- **Backspace Handling**: Properly handles backspace to delete letters and move between inputs
- **Visual Feedback**: Disabled tries have reduced opacity to show game progress
- **Responsive Design**: Works seamlessly on different screen sizes

## How to Play

1. **Start Guessing**: Begin typing letters in the input fields
2. **Navigate**: Use arrow keys (← →) to move between letter fields
3. **Submit Guess**: Click the "Check" button to submit your guess
4. **Use Hints**: Click the "Hints" button to reveal up to 2 random letters from the word
5. **Win Condition**: Match all letters in their correct positions to win!
6. **Lose Condition**: If you don't guess the word within 6 tries, you lose
7. **Special Achievement**: Win without using any hints to earn a special congratulation message!

## Project Structure

```
GuessWordGame/
├── index.html      # HTML structure with game layout
├── guess.css       # Styling, colors, and responsive design
├── main.js         # Game logic and interactivity
└── README.md       # Project documentation
```

## Game Words

The game includes the following words to guess:
- Create
- Update
- Delete
- Master
- Branch
- Mainly
- Elzero
- School

You can easily add more words by editing the `words` array in [main.js](main.js):

```javascript
const words = ["Create", "Update", "Delete", "Master", "Branch", "Mainly", "Elzero", "School"];
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Flexbox for layout
  - CSS variables for consistent theming
  - Responsive design principles
- **JavaScript (Vanilla)**:
  - Game logic and state management
  - DOM manipulation
  - Event handling (keyboard and mouse)
  - Input validation

## Game Settings

You can customize the game by modifying these variables in [main.js](main.js):

```javascript
let numberOfTries = 6;      // Number of attempts
let numberOfLetters = 6;    // Length of the word
let numberOfHints = 2;      // Maximum hints available
```

## Color Legend

| Color | Meaning |
|-------|---------|
| 🟩 Green | Letter is in the correct position |
| 🟨 Orange | Letter is in the word but wrong position |
| 🔴 Red | Letter is not in the word |

## Features Details

### Input Management
- Only accepts single uppercase letters per field
- Auto-converts lowercase to uppercase
- Auto-advances to next field after input
- Prevents interaction with disabled tries

### Hint System
- Reveals one random empty letter per hint used
- Shows remaining hints count on the button
- Disables button when all hints are used
- Hints are only available for empty fields

### Try Management
- Only the current try is active and editable
- Previous tries are disabled and display with reduced opacity
- Automatically advances to the next try after incorrect guess
- All inputs disable when game ends (win or lose)

### Game End Conditions
- **Victory**: All 6 letters are guessed correctly
- **Defeat**: All 6 tries are used without correct guess
- Final message displays the correct word
- All buttons are disabled
- Game shows special message if won without using hints

## Browser Support

- Chrome/Chromium
- Firefox
- Safari
- Edge
- Opera

## Author

Mohamed Hodaib

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests for any improvements!
