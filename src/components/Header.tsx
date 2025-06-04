import siteLogo from '../assets/ltd48.svg';

function Header() {
	return (
		<header className="site-header">
			<img src={siteLogo} alt="A cup of hot chocolate" className="site-logo" />
			<nav className='site-nav'>
				<ul className="nav-list">
					<li className='nav-item'>
						<a href="/">Home</a>
					</li>
					<li className='nav-item'>
						<a href="/about">About</a>
					</li>
					<li className='nav-item'>
						<a href="/menu">Menu</a>
					</li>
					<li className='nav-item'>
						<a href="/events">Events</a>
					</li>
				</ul>
			</nav>
			<div className="header-actions">
				<a href="/menu" className="btn btn-primary">Get your coffee</a>
			</div>
		</header>
	);
}

export default Header;
