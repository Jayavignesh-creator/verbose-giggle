import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img 
              src={viteLogo} 
              className="h-24 p-6 hover:drop-shadow-lg hover:drop-shadow-blue-500/50 transition-all duration-300" 
              alt="Vite logo" 
            />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img 
              src={reactLogo} 
              className="h-24 p-6 hover:drop-shadow-lg hover:drop-shadow-cyan-500/50 transition-all duration-300 animate-spin" 
              style={{ animationDuration: '20s' }}
              alt="React logo" 
            />
          </a>
        </div>
        
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Vite + React + Tailwind
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-4"
          >
            count is {count}
          </button>
          <p className="text-gray-600 dark:text-gray-300">
            Edit <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="text-gray-500 dark:text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
