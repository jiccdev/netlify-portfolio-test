import { links } from '../Navbar/data';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton';

// react-icons
import { IoRocketSharp } from 'react-icons/io5';

const Logo = () => {
  return (
    <div className="flex items-center">
      <a
        href={links[0].url}
        className="flex items-center cursor-pointer text-2xl font-medium text-slate-900 dark:text-gray-200"
      >
        <span className="pr-1 text-cyan-500">
          <IoRocketSharp />
        </span>
        ji.ccdev
      </a>
    </div>
  );
};
{
}

export default Logo;
