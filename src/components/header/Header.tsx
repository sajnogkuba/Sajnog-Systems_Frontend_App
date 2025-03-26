import styles from './Header.module.css';
import Logo from '../logo/Logo.tsx';
import Separator from '../separtor/Separator.tsx';
import NavItem from '../navItem/NavItem.tsx';
import Button from '../button/Button.tsx';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { to: '/', label: 'Strona główna' },
    { to: '/about', label: 'O Nas' },
    { to: '/contact', label: 'Nasze Usługi' },
    { to: '/contact', label: 'Kontakt' },
  ];

  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <header className={styles.headerWrapper}>
        <Logo />
        <div className={styles.center}>
          <nav className={styles.navigation}>
            {navLinks.map((link) => (
              <NavItem key={link.to} to={link.to} label={link.label} />
            ))}
          </nav>
        </div>
        <div className={styles.right}>
          <Button
            label={'Umów darmową konsultację!'}
            onClick={() => navigate('/formularz-kontaktowy')}
          />
        </div>
      </header>
      <Separator />
    </div>
  );
};

export default Header;
