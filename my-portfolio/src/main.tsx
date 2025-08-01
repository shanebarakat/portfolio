import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './index.css';

// Overall flow of the file:
// 1. Import necessary modules from React and other dependencies.
// 2. Locate the DOM element where the app will be rendered.
// 3. Create a React root and render the application component.

// Entry point: Render the React application inside StrictMode for error checking.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)