import styles from './Header.module.scss';
import Logo from '../../ui/Logo';
import { LightModeIcon, DarkModeIcon } from '../../ui/Icons/AppIcons';

// Define the type for the component props
type HeaderProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void; 
};

// Functional component for the header
function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Logo /> 

      {/* Button to toggle theme */}
      <button 
        onClick={toggleTheme} 
        aria-label='toggle-theme' 
        className={styles.svg_icon}
      >
        {/* Conditionally render icon based on current theme */}
        {theme === 'dark' ?    
          <DarkModeIcon /> : 
          <LightModeIcon />  
        }
      </button>
    </header>
  );
}

export default Header;
