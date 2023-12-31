/* eslint-disable react/react-in-jsx-scope */
import './styles/main.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/AuthPage/LoginPage'
import RegisterPage from './pages/AuthPage/RegisterPage'
import CollectionPage from './pages/Collection/CollectionPage'
import ProductPage from './pages/Product/ProductPage'
import CartPage from './pages/Cart/CartPage'
import NoticePage from './pages/Info/NoticePage'
import PayshippingPage from './pages/Info/PayshippingPage'
import CollectionProvider from './components/Context/CollectionContext'
import CartProvider from './components/Context/CartContext'
import { AuthProvider } from './components/Context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter basename="/online-shop-FE">
      <AuthProvider>
        <CartProvider>
          <CollectionProvider>
            <Navbar/>
            <Header/>
            <Main>
              <Routes>
                <Route path='/payshipping' element={<PayshippingPage/>}/>
                <Route path='/notice' element={<NoticePage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/register' element={<RegisterPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/collections/:category/:productId' element={<ProductPage/>}></Route>
                <Route path='/collections/:category' element={<CollectionPage/>}/>
                <Route exact path='/' element={<CollectionPage/>}/>
              </Routes>
            </Main>
            <Footer/>
          </CollectionProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
