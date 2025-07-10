import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import styles from '../Footer.module.css'
import Link from '../../Link'

const FooterRedesSociais = () => {
  return (
    <div className={styles.redes}>
      <h4 className={styles.titulo}>Siga nossas redes</h4>
      <div className={styles.icones}>
        <Link href='#'>
          <FaWhatsapp className={styles.icone} />
        </Link>
        <Link href='#'>
          <FaInstagram className={styles.icone} />
        </Link>
        <Link href='#'>
          <FaTiktok className={styles.icone} />
        </Link>
      </div>
    </div>
  )
}

export default FooterRedesSociais
