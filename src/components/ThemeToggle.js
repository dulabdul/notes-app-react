import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import LocaleContext from '../contexts/LocaleContext';

function ToggleTheme() {
  const { localeTheme, toggleTheme } = useContext(LocaleContext);
  return (
    <button onClick={toggleTheme}>
      {localeTheme === 'dark' ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ToggleTheme;
