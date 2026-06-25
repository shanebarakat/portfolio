import React from 'react';
import Home from './Home';
import LightSite from './LightSite';

/**
 * App - root component.
 *
 * Production serves the light multi-page site (Home / Work / Projects / Research).
 * In local dev only, "/classic" renders the original dark Home page for comparison.
 *
 * The site is a static SPA (Vercel rewrites every path to index.html), so we
 * pick the version from the current pathname rather than pulling in a router.
 */
const App: React.FC = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (import.meta.env.DEV && path === '/classic') {
    return <Home />;
  }
  return <LightSite />;
};

export default App;
