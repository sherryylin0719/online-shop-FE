import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../App'

function Navbar () {
  return (
    <div className={`nav-bar ${styles.pinkTheme}`}>
      <div className={`wrapper ${styles.mediumDownHide}`}>
        <div className={`container-fluid ${styles.navbarWrapper}`}>
          <div className={`row ${styles.navbarContainer}`}>
            <div className="col-4"></div>
            <div className={`col-8 ${styles.navbarRight}`}>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={`/${baseUrl}/login`}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={`/${baseUrl}/register`}>Register</Link>
                </li>
              </ul>
              <div className="cart-module">
                <Link to={`/${baseUrl}/cart`} className="cart-page-link">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`wrapper ${styles.largeHide}`}>
        <div className={`nav-bar navbar-dark ${styles.mobileNavbar}`}>
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#MobileNav" aria-controls="MobileNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="cart-module">
            <Link to={`/${baseUrl}/cart`} className="cart-page-link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </div>
        <div className="collapse" id="MobileNav">
            <ul className={`${styles.mobileNavContainer}`}>
              <li className={`${styles.mobileNavItem}`}>
                <Link className="mobile-nav-link" aria-current="page" to={`/${baseUrl}`}>Home</Link>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <a className={`${styles.navbarProductsToggler}`} data-bs-toggle="collapse" data-bs-target="#MobileProductsNav" aria-controls="MobileProductsNav" aria-expanded="false" aria-label="Toggle navigation">Collections
                  <span className="navbar-toggler-icon">+</span>
                </a>
                <div className="collapse" id="MobileProductsNav">
                  <li className="mobile-product-category">
                    <Link className={`${styles.mobileCategoryLink}`} aria-current="page" to={`/${baseUrl}/collections/Top`}>Top</Link>
                  </li>
                  <li className="mobile-product-category">
                    <Link className={`${styles.mobileCategoryLink}`} aria-current="page" to={`/${baseUrl}/collections/Bottom`}>Bottom</Link>
                  </li>
                  <li className="mobile-product-category">
                    <Link className={`${styles.mobileCategoryLink}`} aria-current="page" to={`/${baseUrl}/collections/OnePiece`}>OnePiece</Link>
                  </li>
                  <li className="mobile-product-category">
                    <Link className={`${styles.mobileCategoryLink}`} aria-current="page" to={`/${baseUrl}/collections/Suit`}>Suit</Link>
                  </li>
                  <li className="mobile-product-category">
                    <Link className={`${styles.mobileCategoryLink}`} aria-current="page" to={`/${baseUrl}/collections/Accessory`}>Accessory</Link>
                  </li>
                </div>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <Link className="mobile-nav-link" aria-current="page" to={`/${baseUrl}/pages/notice`}>Purchase Info</Link>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <Link className="mobile-nav-link" aria-current="page" to={`/${baseUrl}/pages/payshipping`}>Payment and Delivery</Link>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <Link className="mobile-nav-link" aria-current="page" to={`/${baseUrl}/login`}>Login</Link>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <Link className="mobile-nav-link" aria-current="page" to={`/${baseUrl}/register`}>Register</Link>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
