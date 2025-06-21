# verbose-giggle

A modern React application built with Vite and styled with Tailwind CSS.

## Features

- ⚡️ **Vite** - Fast build tool and development server
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔥 **Hot Module Replacement** - Instant updates during development
- 📦 **Optimized Build** - Production-ready builds

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jayavignesh-creator/verbose-giggle.git
   cd verbose-giggle
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
verbose-giggle/
├── public/           # Static assets
├── src/             # Source code
│   ├── assets/      # Images, icons, etc.
│   ├── App.jsx      # Main App component
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles (Tailwind imports)
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js  # PostCSS configuration
└── vite.config.js   # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## License

This project is open source and available under the [MIT License](LICENSE).
