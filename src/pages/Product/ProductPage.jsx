import { CollectionContext } from '../../components/Context/CollectionContext'
import { CartContext } from '../../components/Context/CartContext'
import { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './Product.module.css'

function ProductPage () {
  const [quantity, setQuantity] = useState(1);
  const { collections } = useContext(CollectionContext)
  const { cart, setCart } = useContext(CartContext)
  const { productId } = useParams()
  const product = collections.find((collection) => collection._id === productId)
  // handle go back
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  // handle quantity change
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };
  // handle add to cart
  const AddToCart = () => {
    const item = {
      id: product._id,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.image[0].url,
    };
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === productId);

    if (existingItemIndex !== -1) {
      const newCart = [...cart];
      newCart[existingItemIndex].quantity += quantity;
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }

    navigate('/cart');
  };

  return (
    <div className={`${styles.productWrapper}`}>
      <div className={`${styles.backBtn}`} onClick={goBack}>
        <FontAwesomeIcon icon={faArrowLeft} /> Going Back</div>
      <div className={`${styles.productContent}`}>
        <div className={`${styles.imageWrapper}`}>
          <div className={`${styles.productImage}`}>
            <img src={product.image[0].url} alt={product.title}/>
          </div>
        </div>
        <div className='productInfo'>
          <h2 className='productTitle'>{product.title}</h2>
          <p className='productDescription'>{product.description}</p>
          <h4 className='productPrice'>${product.price}</h4>
          <div className='productStock'>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id='quantity' name='quantity' value={quantity} min='1' max={product.quantity} onChange={handleQuantityChange} className={`${styles.quantitySelector}`}/>
          </div>
          <button type='submit' id={`${styles.AddToCart}`} className="btn btn-outline-primary">
            <span onClick={AddToCart}>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage