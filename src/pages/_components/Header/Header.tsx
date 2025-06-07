import { Link } from '../../../router';
import siteLogo from '../../../assets/ltd48.svg';
import styles from './header.module.css';
import { Button } from '../../../components/Button';

const Header = () => {
	return (
		<header className={styles.site_header}>
			<Link to="/" className={styles.logo_link}>
				<img src={siteLogo} alt="A cup of hot chocolate" className={styles.site_logo} />
				{/* <span className="site-title">Latitude 48</span> */}
			</Link>
			<nav className={styles.site_nav}>
				<ul className={styles.nav_list}>
					<li className={styles.nav_item}>
						<Link to="/">Home</Link>
					</li>
					<li className={styles.nav_item}>
						<Link to="/about">About</Link>
					</li>
					<li className={styles.nav_item}>
						<Link to="/menu">Menu</Link>
					</li>
					<li className={styles.nav_item}>
						<Link to="/events">Events</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.header_actions}>
				<Link to="/menu">
					<Button variant="secondary">Get your coffee</Button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
