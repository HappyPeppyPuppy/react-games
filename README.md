# 🎮 react-games

**react-games** is a collection of classic, interactive games built entirely with **React** —  
easy to embed, customize, and use in your own projects.

You can import each game **individually** from scoped packages  
or **collectively** from the main `react-games` package.

---

## ✨ Features

- 🧩 Modular architecture — import only what you need
- ⚛️ 100% React components (no external dependencies required)
- 🎨 Theme-friendly and customizable via props or CSS
- 📦 Supports both ESM and CJS environments
- 🧠 TypeScript-ready with full IntelliSense support

---

``

## 📦 Installation

Install the main package or just the game you need:

```bash
# Entire collection
npm install react-games

# or individual game
npm install @react-games/minesweeper
npm install @react-games/snake
```

---

## 🚀 Usage

### Option 1 — Import from main package

```tsx
import { Minesweeper, Snake } from 'react-games';

export default function App() {
  return (
    <div>
      <h1>Play React Games!</h1>
      <Minesweeper rows={10} cols={10} mines={15} />
      <Snake width={400} height={400} />
    </div>
  );
}
```

### Option 2 — Import from individual sub-packages

```tsx
import { Minesweeper } from '@react-games/minesweeper';

function GamePage() {
  return <Minesweeper rows={8} cols={8} mines={10} />;
}
```

---

## 🕹️ Available Games

| Game                  | Package                                    | Description                                                            |
| --------------------- | ------------------------------------------ | ---------------------------------------------------------------------- |
| 🧨 Minesweeper        | `@react-games/minesweeper`                 | Classic logic puzzle where you uncover tiles without triggering mines  |
| 🐍 Snake              | `@react-games/snake`                       | Guide the snake to eat and grow without colliding with walls or itself |
| ⏳ (More coming soon) | `@react-games/tetris`, `@react-games/2048` | Additional retro classics planned for upcoming releases                |

---

## ⚙️ Props Example (Minesweeper)

| Prop    | Type                | Default   | Description                         |
| ------- | ------------------- | --------- | ----------------------------------- |
| `rows`  | `number`            | `10`      | Number of grid rows                 |
| `cols`  | `number`            | `10`      | Number of grid columns              |
| `mines` | `number`            | `15`      | Number of mines placed on the board |
| `theme` | `'light' \| 'dark'` | `'light'` | Optional color theme                |

---

## 🧱 Monorepo Structure

```
react-games/
├─ packages/
│  ├─ react-games/              # meta entry (re-exports)
│  ├─ @react-games/minesweeper/ # individual game package
│  ├─ @react-games/snake/
│  └─ ...
└─ tsconfig.json
```

All individual packages are published independently and also bundled under the main `react-games` entry point for convenience.

---

## 💅 Customization

Each game exposes:

- `className` and `style` props for styling
- Theme variables (`--cell-color`, `--mine-color`, etc.)
- Event callbacks (e.g., `onWin`, `onLose`, `onScoreChange`)

Example:

```tsx
<Minesweeper
  rows={12}
  cols={12}
  mines={20}
  onWin={() => alert('You won! 🎉')}
  className='my-minesweeper'
/>
```

---

## 🧩 TypeScript Support

Each component includes `.d.ts` definitions for prop autocompletion and type safety.

```tsx
import type { MinesweeperProps } from '@react-games/minesweeper';
```

---

## 🧑‍💻 Development

```bash
# clone repo
git clone https://github.com/yourname/react-games.git

# install dependencies
pnpm install

# start dev server (example)
pnpm dev --filter @react-games/minesweeper
```

---

## 📜 License

**MIT License** © 2025 [Your Name or Organization]

You’re free to use, modify, and distribute this library with attribution.

---

## 🌟 Links

- 📘 [Documentation](https://github.com/yourname/react-games/wiki)
- 🧱 [NPM: react-games](https://www.npmjs.com/package/react-games)
- 💬 [Issues](https://github.com/yourname/react-games/issues)

---

> _Bring nostalgic fun into your modern React projects — one component at a time._
