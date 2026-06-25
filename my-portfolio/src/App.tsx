import React from 'react';
import Home from './Home';
import LightSite from './LightSite';

/**
 * App - root component.
 *
 * Two versions of the portfolio live side by side so they can be compared:
 *   - the light multi-page site (Home / Work / Projects / Research) — the main one
 *   - "/classic" → Home (the original dark version)
 *
 * The site is a static SPA (Vercel rewrites every path to index.html), so we
 * pick the version from the current pathname rather than pulling in a router.
 */
const App: React.FC = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/classic') {
    return <Home />;
  }
  return <LightSite />;
};

export default App;
