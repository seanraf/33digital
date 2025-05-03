import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header>
      <nav>
        <ul>
          {navigation.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;