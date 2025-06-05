import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';

import AppHeader from './components/header';
//import AppHero from './components/hero';
import AppAbout from './components/about';
import AppExperiences from './components/experiences';
import AppProjects from './components/projects';
import AppContact from './components/contact';
import AppFooter from './components/footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

    // Set initial mode based on time
  useEffect(() => {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour < 6;
    setDarkMode(isNight);
  }, []);

  // Apply class when darkMode changes
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="App">     
      <header id="header">
        <AppHeader
        darkMode={darkMode} 
        onToggleDarkMode={handleToggleDarkMode}
        />
      </header>
      <main>
        {/*<AppHero />*/}
        <AppAbout />
        <AppExperiences />
        <AppProjects />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
