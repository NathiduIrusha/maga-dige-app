import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import MapView from './pages/MapView';
import Contact from './pages/Contact';
import { AppContext } from './context/AppContext';

import logo from './logo.png';

function App() {
  const { t, theme, toggleTheme, lang, setLang } = useContext(AppContext);
  const [showLangModal, setShowLangModal] = useState(false);

  const handleSelectLang = (language) => {
      setLang(language);
      setShowLangModal(false);
  };

  return (
    <Router>
      <header className="main-header liquid-glass">
        <div className="header-container">
            {/* 1. වම් පැත්තේ Logo එක */}
            <Link to="/" className="logo-section">
                <img src={logo} alt="Maga Dige Logo" className="site-logo-img" />
                <div className="logo-text-group">
                    <span className="logo-main-text">Maga Dige</span>
                    <span className="logo-sub-text">Partner for every journey</span>
                </div>
            </Link>

            {/* 2. මැද Navigation Links */}
            <nav className="nav-links">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/map" className="nav-item">Map</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </nav>

            {/* 3. දකුණු පැත්තේ Controls */}
            <div className="header-actions">
                <button className="lang-toggle" onClick={() => setShowLangModal(true)}>
                    {lang === 'si' ? 'සිං' : lang === 'ta' ? 'தமிழ்' : 'EN'}
                </button>

                <div className="mode-toggle" onClick={toggleTheme}>
                    <div className={`mode-icon-ball ${theme === 'dark' ? 'dark' : ''}`}>
                        {theme === 'light' ? '☀️' : '🌙'}
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* Language Modal (භාෂාව තෝරන කොටුව) */}
      {showLangModal && (
          <div 
              className="overlay" 
              style={{ zIndex: 3000 }}
              onClick={() => setShowLangModal(false)} /* 1. එළියෙන් (පසුබිමේ) ක්ලික් කළාම වැහෙනවා */
          >
              <div 
                  className="custom-modal liquid-glass" 
                  style={{ padding: '30px', textAlign: 'center' }}
                  onClick={(e) => e.stopPropagation()} /* 2. කොටුව ඇතුළේ ක්ලික් කළාට වැහෙන්නේ නැති වෙන්න මේක දානවා */
              >
                  <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Select Language / භාෂාව</h3>
                  
                  <div className="lang-options" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <button className="pill" style={{ padding: '12px', fontSize: '15px' }} onClick={() => handleSelectLang('si')}>සිංහල</button>
                      <button className="pill" style={{ padding: '12px', fontSize: '15px' }} onClick={() => handleSelectLang('en')}>English</button>
                      <button className="pill" style={{ padding: '12px', fontSize: '15px' }} onClick={() => handleSelectLang('ta')}>தமிழ்</button>
                  </div>
                  
                  {/* පරණ Close බටන් එක මෙතනින් සම්පූර්ණයෙන්ම අයින් කළා! */}
              </div>
          </div>
      )}

      {/* පිටු මාරු වෙන තැන */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;