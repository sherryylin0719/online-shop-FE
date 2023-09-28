import { CartContext } from "../../components/Context/CartContext";
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Cart.module.css'

function CartPage () {
  const { cart, setCart } = useContext(CartContext)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }
  
  return (
    <div className={`${styles.cartWrapper}`}>
      <div className='cartContainer'>
        <div className='cartHeader'>
          <h1>Cart</h1>
        </div>
        <div className='cartContent'>
          <div className='cartItems'>
            {cart.map((item) => (
              <div className={`${styles.cartItem}`} key={item.id}>
                <div className={`${styles.cartItemImg}`}>
                  <Link to={`/collections/${item.category}/${item.id}`}>
                    <img src={item.image} alt={item.title}/>
                  </Link>
                </div>
                <div className={`${styles.cartItemInfo}`}>
                  <div className={`${styles.gridLeft}`}>
                    <p className='cartItemTitle'>{item.title}</p>
                    <p className='cartItemPrice'>${item.price}</p>
                    <div className={`${styles.cartItemRemove}`} onClick={() => removeItem(item.id)}><FontAwesomeIcon icon={faTrash} /></div>
                  </div>
                  <div className={`${styles.gridRight}`}>
                    <p className='cartItemQuantity'>Quantity: {item.quantity}</p>
                    <p className='cartItemPrice'>${item.quantity*item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles.cartTotal}`}>
            <p className={`${styles.cartTotalTitle}`}>Total</p>
            <p className={`${styles.cartTotalPrice}`}>${totalPrice}</p>
          </div>
          <div className={`${styles.checkoutWrapper}`}>
            <button type='submit' id={`${styles.checkOut}`} className={`btn btn-outline-primary ${styles.checkOut}`}>
              <span>Checkout <FontAwesomeIcon icon={faArrowRight} /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage