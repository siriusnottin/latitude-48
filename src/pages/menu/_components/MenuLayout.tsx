import { Link } from '../../../router';
import styles from '../../../styles/menu.module.css';
import React from 'react';
import TopMenu from './TopMenu';

interface MenuLayoutProps {
  children: React.ReactNode;
  currentPath: string;
}

const MenuLayout = ({ children, currentPath }: MenuLayoutProps) => {
  const menuItems = [
    { path: '/menu/coffees' as const, label: 'ALL' },
    { path: '/menu/coffees/italian' as const, label: 'ITALIAN' },
    { path: '/menu/coffees/argentina' as const, label: 'ARGENTINA' },
    { path: '/menu/coffees/chili' as const, label: 'CHILI' },
    { path: '/menu/coffees/brasil' as const, label: 'BRASIL' },
    { path: '/menu/coffees/ethiopia' as const, label: 'ETHIOPIA' },
    { path: '/menu/coffees/colombia' as const, label: 'COLOMBIA' },
    { path: '/menu/coffees/guatemala' as const, label: 'GUATEMALA' },
    { path: '/menu/coffees/costa-rica' as const, label: 'COSTA RICA' },
    { path: '/menu/coffees/kenya' as const, label: 'KENYA' },
    { path: '/menu/coffees/indonesia' as const, label: 'INDONESIA' },
    { path: '/menu/coffees/jamaica' as const, label: 'JAMAICA' }
  ];

  const showOriginsMenu = currentPath.startsWith('/menu/coffees');

  return (
    <div className={styles.pageWrapper}>
      <TopMenu currentPath={currentPath} />
      {showOriginsMenu && (
        <nav className={styles.navigation}>
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li key={item.path} className={styles.navItem}>
                <Link
                  to={item.path}
                  className={`${styles.navLink} ${currentPath === item.path ? styles.activeLink : ''
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {children}
    </div>
  );
};

export default MenuLayout; 
