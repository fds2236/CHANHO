import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Setting from './pages/Setting';
import NewsList from './components/NewsList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/NewsList" element={<NewsList />} />
      </Routes>
    </Router>
  );
}

export default App;
