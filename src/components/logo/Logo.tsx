import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={'/'} className={styles.logo}>
        {' '}
        Sajnóg-Systems{' '}
      </Link>
    </div>
  );
};

export default Logo;
