import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/home.js';
import About from './components/about.js';
import Details from './components/details.js';
import Team from './components/team.js';
import Member from './components/member.js';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className='container'>
      <nav className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/team">Team</Link></li>
        </ul>
      </nav>
      <div className='content'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/team" element={<Team />}>
            <Route path="member/:id" element={<Member />} />
          </Route>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
