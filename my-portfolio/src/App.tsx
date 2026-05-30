import React from 'react';
import Home from './Home';

/**
 * App - root component. The portfolio is a single page, so there is no
 * client-side router; we render the one page directly.
 */
const App: React.FC = () => {
  return <Home />;
};

export default App;
