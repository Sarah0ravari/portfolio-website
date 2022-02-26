import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../pages/Home/Home';
import Portfolio from '../pages/Portfolio/Portfolio';
import About from '../pages/About/About';
import Resume from '../pages/Resume/Resume';
import Contact from '../pages/Contact/Contact';
import './PortfolioApp.css';

function PortfolioApp() {
  return (
    <div className="app">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="resume" element={<Resume/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default PortfolioApp;
