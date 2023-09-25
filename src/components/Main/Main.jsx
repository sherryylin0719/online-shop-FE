import styles from './Main.module.css'

// eslint-disable-next-line react/prop-types
function Main ({ children }) {
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.wrapper}`}>
        {children}
      </div>
    </main>
  )
}

export default Main
