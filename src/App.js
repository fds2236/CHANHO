import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Setting from './pages/Setting';
import News from './pages/News';
import NewsList from './components/NewsList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/newslist" element={<NewsList />} />
      </Routes>
    </Router>
  );
}

export default App;
