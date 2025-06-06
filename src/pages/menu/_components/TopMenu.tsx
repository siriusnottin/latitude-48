import { Link, type Path } from '../../../router';
import styles from '../../../styles/menu.module.css';

interface TopMenuProps {
  currentPath: string;
}

const TopMenu = ({ currentPath }: TopMenuProps) => {
  const menuCategories: { path: Path; label: string }[] = [
    { path: '/menu/coffees', label: 'COFFEE' },
    { path: '/menu/tea', label: 'TEA' },
    { path: '/menu/cold-drinks', label: 'COLD DRINKS' },
    { path: '/menu/food', label: 'FOOD' },
  ];

  return (
    <nav className={styles.topNavigation}>
      <ul className={styles.topNavList}>
        {menuCategories.map((category) => (
          <li key={category.path} className={styles.topNavItem}>
            <Link
              to={category.path}
              className={`${styles.topNavLink} ${currentPath.startsWith(category.path) ? styles.activeTopLink : ''
                }`}
            >
              {category.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopMenu; 
