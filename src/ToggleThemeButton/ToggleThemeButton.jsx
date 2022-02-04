import useDarkMode from '../Hook/useDarkMode';

// react-icons
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';

const ToggleThemeButton = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <span
      onClick={() => setTheme(colorTheme)}
      className="flex items-center rounded-full shadow-inner p-2.5 cursor-pointer text-cyan-500 dark:bg-gray-800 ml-4 sm:absolute sm:top-2 sm:right-5"
    >
      {colorTheme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
    </span>
  );
};

export default ToggleThemeButton;
