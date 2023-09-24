import styles from './Header.module.css'

function Header () {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.logo}`}>
          <h1>
            <a href="/">Elora official</a>
          </h1>
        </div>
        <div className={`${styles.mediumDownHide}`}>
          <div className={`container-fluid ${styles.navbarContainer}`}>
            <ul className={`p-2 ${styles.navbarList}`}>
              <li className={`${styles.navItem}`}>
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className={`dropdown-center ${styles.navItem}`}>
                <a className={`dropdown-toggle ${styles.navbarProductsToggler}`} data-bs-toggle="dropdown" aria-controls="ProductsNav" aria-expanded="false" aria-label="Toggle navigation" role="button">Collections
                </a>
                <ul className="dropdown-menu">
                  <li className="product-category">
                    <a className="dropdown-item" aria-current="page" href="/products/top">Top</a>
                  </li>
                  <li className="product-category">
                    <a className="dropdown-item" aria-current="page" href="/products/bottom">Bottom</a>
                  </li>
                  <li className="product-category">
                    <a className="dropdown-item" aria-current="page" href="/products/onepiece">OnePiece</a>
                  </li>
                  <li className="product-category">
                    <a className="dropdown-item" aria-current="page" href="/products/suit">Suit</a>
                  </li>
                  <li className="product-category">
                    <a className="dropdown-item" aria-current="page" href="/products/accessory">Accessory</a>
                  </li>
                </ul>
              </li>
              <li className={`${styles.navItem}`}>
                <a className="nav-link" aria-current="page" href="/pages/notice">Purchase Info</a>
              </li>
              <li className={`${styles.navItem}`}>
                <a className="nav-link" aria-current="page" href="/pages/payshipping">Payment and Delivery</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
