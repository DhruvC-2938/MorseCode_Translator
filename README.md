# Morse Code Translator

A modern and interactive Morse Code Translator built using React, Vite, and Tailwind CSS.

This web application converts English text into Morse code symbols (`.` and `-`) in real-time with a premium neumorphic user interface and smooth animations.

---

## Features

- Real-time English → Morse code conversion
- Animated Morse code output boxes
- Smooth transitions and hover effects
- Built with React functional components

---

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)

---

## Preview
---

<img width="1710" height="981" alt="Screenshot 2026-05-12 at 11 53 52 AM" src="https://github.com/user-attachments/assets/ffdcf189-6619-4ab1-91af-0d7c141c9c07" />


---

## Project Structure

```bash
src/
├── components/        # Reusable React components
│   ├── Translator.jsx # Parent component managing state
│   ├── InputBox.jsx   # Handles user input
│   ├── MorseOutput.jsx # Displays translated Morse code
│   └── MorseCard.jsx  # Reusable Morse code card component
│
├── utils/
│   └── morsecode.js   # Morse code dictionary mappings
│
├── App.jsx            # Root application component
├── main.jsx           # React DOM entry point
├── App.css            # Component-level styles
└── index.css          # Global styles
```
---

## Morse Code Support

The translator currently supports:

- Alphabets: `A - Z`
- Numbers: `0 - 9`

### Example

#### Input

```text
HELLO
```

#### Output

```text
.... . .-.. .-.. ---
```
---

## Installation

Clone the repository:

```bash
git clone https://github.com/DhruvC-2938/MorseCode_Translator.git
```

Navigate to the project directory:

```bash
cd MorseCode_Translator
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
---

## Future Improvements

- Morse → English conversion
- Morse code audio playback
- Copy to clipboard feature
- Translation history
- Light/Dark mode toggle
- Typing sound effects

---

## Author

Dhruv Chavda

GitHub:
https://github.com/DhruvC-2938

---

## Live Demo

https://moresetranslatorreact.netlify.app/



---

## License

This project is open source and available under the MIT License.
