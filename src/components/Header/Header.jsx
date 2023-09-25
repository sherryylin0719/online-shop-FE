import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.logo}`}>
          <h1>
            <Link to="/">Elora official</Link>
          </h1>
        </div>
        <div className={`${styles.mediumDownHide}`}>
          <div className={`container-fluid ${styles.navbarContainer}`}>
            <ul className={`p-2 ${styles.navbarList}`}>
              <li className={`${styles.navItem}`}>
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className={`dropdown-center ${styles.navItem}`}>
                <a className={`dropdown-toggle ${styles.navbarProductsToggler}`} data-bs-toggle="dropdown" aria-controls="ProductsNav" aria-expanded="false" aria-label="Toggle navigation" role="button">Collections
                </a>
                <ul className="dropdown-menu">
                  <li className="product-category">
                    <Link className="dropdown-item" aria-current="page" to="/collections/Top">Top</Link>
                  </li>
                  <li className="product-category">
                    <Link className="dropdown-item" aria-current="page" to="/collections/Bottom">Bottom</Link>
                  </li>
                  <li className="product-category">
                    <Link className="dropdown-item" aria-current="page" to="/collections/OnePiece">OnePiece</Link>
                  </li>
                  <li className="product-category">
                    <Link className="dropdown-item" aria-current="page" to="/collections/Suit">Suit</Link>
                  </li>
                  <li className="product-category">
                    <Link className="dropdown-item" aria-current="page" to="/collections/Accessory">Accessory</Link>
                  </li>
                </ul>
              </li>
              <li className={`${styles.navItem}`}>
                <Link className="nav-link" aria-current="page" to="/pages/notice">Purchase Info</Link>
              </li>
              <li className={`${styles.navItem}`}>
                <Link className="nav-link" aria-current="page" to="/pages/payshipping">Payment and Delivery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
