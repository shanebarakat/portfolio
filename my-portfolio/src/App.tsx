import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Intouch from './Intouch';
import PillThought from './PillThought';
import Palkia from './Palkia';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/intouchcx" element = {<Intouch />} />
        <Route path="/pillthought" element = {<PillThought />} />
        <Route path="/palkia" element = {<Palkia />} />
      </Routes>
    </Router>
  );
};

export default App;
