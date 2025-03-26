import styles from './Footer.module.css';
import Separator from '../separtor/Separator.tsx';
import Logo from '../logo/Logo.tsx';
import Button from '../button/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <Separator />
      <div className={styles.flexContainer}>
        <Logo />
        <div className={styles.footerText}>
          <FaPhone size={24} />
          <p>603-337-347</p>
        </div>
        <div className={styles.footerText}>
          <FaMapMarkerAlt size={24} />
          <p>05-205 Dobczyn, ul. Krzywa 5</p>
        </div>
        <div className={styles.footerText}>
          <FaEnvelope size={24} />
          <p>sajnog.systems@gmail.com</p>
        </div>
        <Button
          label={'Umów darmową konsultację!'}
          onClick={() => navigate('/formularz-kontaktowy')}
        />
      </div>
      <div className={styles.copyright}>
        <p>© 2025 Sajnóg-Systems. Wszelkie prawa zastrzeżone.</p>
      </div>
    </div>
  );
};

export default Footer;
