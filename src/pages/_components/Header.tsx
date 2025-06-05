import { Link } from '../../router';
import siteLogo from '../../assets/ltd48.svg';

import './header.module.css';

const Header = () => {
	return (
		<header className="site-header">
			<Link to="/" className="logo-link">
				<img src={siteLogo} alt="A cup of hot chocolate" className="site-logo" />
				{/* <span className="site-title">Latitude 48</span> */}
			</Link>
			<nav className="site-nav">
				<ul className="nav-list">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/about">About</Link>
					</li>
					<li className="nav-item">
						<Link to="/menu">Menu</Link>
					</li>
					<li className="nav-item">
						<Link to="/events">Events</Link>
					</li>
				</ul>
			</nav>
			<div className="header-actions">
				<Link to="/menu" className="btn secondary">
					Get your coffee
				</Link>
			</div>
		</header>
	);
};

export default Header;
