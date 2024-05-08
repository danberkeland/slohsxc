import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Importing the components
import Athletes from './Athletes';
import Meets from './Meets';
import Courses from './Courses';
import NonAthletes from './NonAthletes';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>SLO High School Cross Country</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/athletes">Athletes</Link>
            </li>
            <li>
              <Link to="/nonathletes">NonAthletes</Link>
            </li>
            <li>
              <Link to="/meets">Meets</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
          </ul>
        </nav>
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/nonathletes" element={<NonAthletes />} />
          <Route path="/meets" element={<Meets />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
