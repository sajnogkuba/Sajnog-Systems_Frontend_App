import '../../theme.css';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import FeaturesSection from '../../components/featuresSection/FeaturesSection.tsx';

const Home = () => {
  return (
    <div className={styles.heroSection}>
      <div>
        <div className={styles.heroHeader}>
          <h1>Bezpieczny dom i firma</h1>
          <h1>nowoczesne systemy alarmowe i CCTV</h1>
          <h3>
            Chroń to, co najważniejsze! Instalujemy nowoczesne
            <Link to={'/systemy-alarmowe'} className={styles.link}>
              {' '}
              systemy alarmowe{' '}
            </Link>
            i{' '}
            <Link to={'/systemy-cctv'} className={styles.link}>
              {' '}
              systemy CCTV{' '}
            </Link>
            dopasowane do Twoich potrzeb.
          </h3>
        </div>
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Home;
