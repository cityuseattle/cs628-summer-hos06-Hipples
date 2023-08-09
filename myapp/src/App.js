import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

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
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/details">Details</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
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
