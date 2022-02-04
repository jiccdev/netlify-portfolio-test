import React from 'react';

const Header = ({ children }) => {
  return (
    <header className="py-0 px-40 sm:p-4 sm:py-0 lg:px-10">{children}</header>
  );
};

export default Header;
