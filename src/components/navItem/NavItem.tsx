import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
