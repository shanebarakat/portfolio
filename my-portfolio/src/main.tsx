/**
 * Entry bootstrap for the React application.
 *
 * Bootstrap sequence and environment assumptions:
 * - This file is intended to run in a browser environment where `document` is available.
 * - It looks up the DOM element with id "root" and mounts the React application into it.
 * - Client-only side effects (DOM access and React mounting) are guarded by a check for `document`.
 *
 * Root render pattern and testability helpers:
 * - getRootElement(): Small helper to obtain the root DOM node; returns null if not present.
 * - initializeApp(rootElement): Encapsulates the createRoot(...).render(...) call so it can be tested
 *   or invoked independently.
 *
 * Runtime behavior is preserved:
 * - When `document` is defined, the file mounts the app exactly as before.
 * - A non-null assertion is still used at the call site to maintain the same runtime assertion behavior
 *   as the previous implementation.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './index.css';

function getRootElement(): HTMLElement | null {
  return document.getElementById('root')
}

function initializeApp(rootElement: HTMLElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

if (typeof document !== 'undefined') {
  initializeApp(getRootElement()!)
}