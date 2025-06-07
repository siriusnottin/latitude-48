import {Outlet} from 'react-router';

import Header from './_components/Header';
import Footer from './_components/Footer';
import styles from './app.module.css';

const App = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default App;
