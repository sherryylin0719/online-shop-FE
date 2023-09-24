import styles from './Footer.module.css'

function Footer () {
  return (
    <footer className="footer">
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.footerContainer}`}>
          <p>@2023 Elora official</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
