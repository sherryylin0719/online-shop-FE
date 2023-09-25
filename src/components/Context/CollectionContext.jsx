import { createContext, useState, useEffect } from 'react'
import { getProducts } from '../../API/collection'

export const CollectionContext = createContext()

// eslint-disable-next-line react/prop-types
export default function CollectionProvider ({ children }) {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    async function fetchData () {
      try {
        const data = await getProducts()
        setCollections(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <CollectionContext.Provider value={{ collections }}>
      {children}
    </CollectionContext.Provider>
  )
}
