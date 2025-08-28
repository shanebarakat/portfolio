import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import './index.css';
import App from './App.tsx';




/**
 * Application bootstrap and DOM mount logic.
 *
 * Steps:
 * 1. Locate the DOM mount point with id "root".
 * 2. Create a React Root for concurrent rendering.
 * 3. Render the App component wrapped in StrictMode.
 *
 * Defensive checks are used to warn (not throw) if the mount point is missing,
 * allowing the environment to continue without raising exceptions during startup.
 */
const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
  console.warn('Root element with id "root" not found. App mounting aborted.');
} else {
  const root: Root = createRoot(rootElement as HTMLElement);
  const appElement: JSX.Element = (
    <StrictMode>
      <App />
    </StrictMode>
  );
  root.render(appElement);
}
