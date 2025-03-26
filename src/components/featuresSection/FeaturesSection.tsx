import styles from './FeaturesSection.module.css';
import { TfiCup } from 'react-icons/tfi';
import { GoGear } from 'react-icons/go';
import { LuHandshake } from 'react-icons/lu';
import { BiTimer } from 'react-icons/bi';
import { RiLock2Line, RiQuestionnaireLine } from 'react-icons/ri';
import { PiHouseLine, PiBuildingOffice } from 'react-icons/pi';
import { FiPackage, FiShoppingCart } from 'react-icons/fi';
import { TbSchool } from 'react-icons/tb';

const FeaturesSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.column}>
        <h2>Co nas wyróżnia?</h2>
        <ul>
          <li>
            <TfiCup className={styles.icon} />
            <span>
              <strong>Doświadczenie</strong> – od ponad 20 lat zakładamy systemy zabezpieczeń.
            </span>
          </li>
          <li>
            <GoGear className={styles.icon} />
            <span>
              <strong>Najlepszy sprzęt</strong> – pracujemy tylko na sprzęcie sprawdzonych
              producentów.
            </span>
          </li>
          <li>
            <LuHandshake className={styles.icon} />
            <span>
              <strong>Indywidualne podejście</strong> – każdy projekt dopasowujemy do Twoich
              potrzeb.
            </span>
          </li>
          <li>
            <BiTimer className={styles.icon} />
            <span>
              <strong>Szybki montaż</strong> – instalacja w krótkim czasie, bez zbędnych opóźnień.
            </span>
          </li>
          <li>
            <RiQuestionnaireLine className={styles.icon} />
            <span>
              <strong>Wsparcie</strong> – po instalacji służymy pomocą.
            </span>
          </li>
        </ul>
      </div>

      <div className={styles.column}>
        <h2>Jakie obiekty obsługujemy?</h2>
        <ul>
          <li>
            <PiHouseLine className={styles.icon} />
            <span>
              <strong>Domy jednorodzinne</strong> – zabezpiecz swój dom, ogród oraz rodzinę.
            </span>
          </li>
          <li>
            <PiBuildingOffice className={styles.icon} />
            <span>
              <strong>Firmy i biura</strong> – pełne zabezpieczenie Twojego biznesu.
            </span>
          </li>
          <li>
            <FiShoppingCart className={styles.icon} />
            <span>
              <strong>Sklepy i galerie handlowe</strong> – kontrola nad ruchem klientów i
              bezpieczeństwem.
            </span>
          </li>
          <li>
            <FiPackage className={styles.icon} />
            <span>
              <strong>Magazyny i hale produkcyjne</strong> – bezpieczeństwo pracowników i towarów.
            </span>
          </li>
          <li>
            <TbSchool className={styles.icon} />
            <span>
              <strong>Szkoły i instytucje</strong> – bezpieczeństwo uczniów i pracowników.
            </span>
          </li>
          <li>
            <RiLock2Line className={styles.icon} />
            <span>
              <strong>Wszystko co potrzebujesz chronić</strong> – masz nietypowy obiekt? Odezwij
              się!
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
