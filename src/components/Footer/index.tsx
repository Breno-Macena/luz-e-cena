import FooterDesenvolvidoPor from './components/FooterDesenvolvidoPor'
import FooterInfo from './components/FooterInfo'
import FooterInstitucional from './components/FooterInstitucional'
import FooterLogo from './components/FooterLogo'
import FooterRedesSociais from './components/FooterRedesSociais'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <FooterLogo />
          <FooterInfo />
          <FooterInstitucional />
          <FooterRedesSociais />
        </div>
      </footer>
      <FooterDesenvolvidoPor />
    </>
  )
}

export default Footer
