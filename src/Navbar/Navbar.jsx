import { Fragment } from 'react';

import LogoSite from '../LogoSite/LogoSite';
import { links } from './data';
import Extra from '../Extra/Extra';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton';

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 20,
    });
  };
  return (
    <Fragment>
      <nav className="grid grid-cols-2 content-center md:grid-cols-1 border-b py-2 border-slate-200 dark:border-slate-800">
        <LogoSite />
        <div className="flex items-center justify-end sm:justify-start">
          <ul className="flex items-center justify-end sm:flex-row sm:items-center sm:justify-start sm:flex-wrap sm:py-2">
            {links.map((link) => {
              return (
                <li key={link.id} className="mx-4 sm:ml-0">
                  <a
                    href={link.url}
                    onClick={handleClick}
                    className="text-sm font-medium text-slate-700 hover:text-cyan-500 whitespace-pre dark:text-slate-300 dark:hover:text-slate-400"
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
            <div className="flex items-center text-sm font-medium text-slate-700 sm:justify-end pl-4 sm:pl-0 sm:border-none border-l border-slate-200 dark:border-slate-800 ">
              <Extra />
              <ToggleThemeButton />
            </div>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
