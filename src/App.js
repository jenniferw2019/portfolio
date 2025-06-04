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

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="App">     
      <header id="header">
        <AppHeader
        darkMode={darkMode} 
        onToggleDarkMode={() => setDarkMode(prev => !prev)}
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
