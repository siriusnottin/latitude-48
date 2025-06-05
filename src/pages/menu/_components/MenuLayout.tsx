import { Link } from '../../../router';
import styles from '../../../styles/menu.module.css';
import React from 'react';

interface MenuLayoutProps {
  children: React.ReactNode;
  currentPath: string;
}

const MenuLayout = ({ children, currentPath }: MenuLayoutProps) => {
  const menuItems = [
    { path: '/menu' as const, label: 'ALL' },
    { path: '/menu/italian' as const, label: 'ITALIAN' },
    { path: '/menu/argentina' as const, label: 'ARGENTINA' },
    { path: '/menu/brasil' as const, label: 'BRASIL' },
    { path: '/menu/chili' as const, label: 'CHILI' },
    { path: '/menu/ethiopia' as const, label: 'ETHIOPIA' },
  ];

  return (
    <div className={styles.pageWrapper}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          {menuItems.map((item) => (
            <li key={item.path} className={styles.navItem}>
              <Link
                to={item.path}
                className={`${styles.navLink} ${
                  currentPath === item.path ? styles.activeLink : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default MenuLayout; 