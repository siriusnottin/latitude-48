import { Outlet } from 'react-router';

import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
