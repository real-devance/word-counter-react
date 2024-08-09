import './App.scss'; 
import { useState } from 'react';

// Importing subcomponents
import Header from './components/layout/Header'; 
import MainApp from './components/layout/MainApp'; 

// Define a type for the theme to be either 'light' or 'dark'
type Theme = 'light' | 'dark';


function App() {
  // State variable to manage the current theme
  const [theme, setTheme] = useState<Theme>('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    // Apply the appropriate class based on the current theme
    <div className={`${theme === 'light' ? 'light_theme' : 'dark_theme'} app_container`}>
     
      <Header theme={theme} toggleTheme={toggleTheme} />
      <MainApp />
    </div>
  );
}

export default App;
