import { CollectionContext } from '../../components/Context/CollectionContext'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './Collection.module.css'

function CollectionPage () {
  const { collections } = useContext(CollectionContext)
  const { category } = useParams()
  let displayCollections

  if (category === '/') {
    displayCollections = collections
  } else {
    const filteredCollections = collections.filter((collection) => collection.category === category)
    displayCollections = filteredCollections.length > 0 ? filteredCollections : []
  }

  return (
    <div className={`${styles.collectionWrapper}`}>
      <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {displayCollections.map((collection) => (
          <div className={`${styles.card}`} key={collection._id}>
            <Link to={`/collections/${collection.category}/${collection._id}`} className={`${styles.imageWrapper}`}>
              <div className={`${styles.imageContainer}`}>
              <img src={collection.image[0].url} className="card-img-top" alt={collection.title}/>
              </div>
            </Link>
            <Link to={`/collections/${collection.category}/${collection._id}`} className={`${styles.cardBodyContainer} card-body`}>
              <p className="card-title">{collection.title}</p>
              <p className="card-price">${collection.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
