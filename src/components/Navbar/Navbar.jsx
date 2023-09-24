import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
                  <a className="nav-link" aria-current="page" href="/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/register">Register</a>
                </li>
              </ul>
              <div className="cart-module">
                <a href="/cart" className="cart-page-link">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
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
            <a href="/cart" className="cart-page-link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </div>
        <div className="collapse" id="MobileNav">
            <ul className={`${styles.mobileNavContainer}`}>
              <li className={`${styles.mobileNavItem}`}>
                <a className="mobile-nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <a className={`${styles.navbarProductsToggler}`} data-bs-toggle="collapse" data-bs-target="#MobileProductsNav" aria-controls="MobileProductsNav" aria-expanded="false" aria-label="Toggle navigation">Collections
                  <span className="navbar-toggler-icon">+</span>
                </a>
                <div className="collapse" id="MobileProductsNav">
                  <li className="mobile-product-category">
                    <a className={`${styles.mobileCategoryLink}`} aria-current="page" href="/products/top">Top</a>
                  </li>
                  <li className="mobile-product-category">
                    <a className={`${styles.mobileCategoryLink}`} aria-current="page" href="/products/bottom">Bottom</a>
                  </li>
                  <li className="mobile-product-category">
                    <a className={`${styles.mobileCategoryLink}`} aria-current="page" href="/products/onepiece">OnePiece</a>
                  </li>
                  <li className="mobile-product-category">
                    <a className={`${styles.mobileCategoryLink}`} aria-current="page" href="/products/suit">Suit</a>
                  </li>
                  <li className="mobile-product-category">
                    <a className={`${styles.mobileCategoryLink}`} aria-current="page" href="/products/accessory">Accessory</a>
                  </li>
                </div>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <a className="mobile-nav-link" aria-current="page" href="/pages/notice">Purchase Info</a>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <a className="mobile-nav-link" aria-current="page" href="/pages/payshipping">Payment and Delivery</a>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <a className="mobile-nav-link" aria-current="page" href="/login">Login</a>
              </li>
              <li className={`${styles.mobileNavItem}`}>
                <a className="mobile-nav-link" aria-current="page" href="/register">Register</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
