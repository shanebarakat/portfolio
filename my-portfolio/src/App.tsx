import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Intouch from './Intouch';
import PillThought from './PillThought';
import Palkia from './Palkia';

const App: React.FC = () => {
  const renderComponent = (Component?: React.ComponentType<any>) => {
    if (!Component || typeof Component !== 'function') return null;
    const C = Component;
    return <C />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={renderComponent(Home)} />
        <Route path="/intouchcx" element={renderComponent(Intouch)} />
        <Route path="/pillthought" element={renderComponent(PillThought)} />
        <Route path="/palkia" element={renderComponent(Palkia)} />
      </Routes>
    </Router>
  );
};

export default App;