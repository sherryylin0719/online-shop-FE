/* eslint-disable react/react-in-jsx-scope */
import './styles/main.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import LoginPage from './pages/AuthPage/LoginPage'
import CollectionPage from './pages/Collection/CollectionPage'
import CollectionProvider from './components/Context/CollectionContext'
import { AuthProvider } from './components/Context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter basename="/online-shop-FE">
      <AuthProvider>
        <CollectionProvider>
          <Navbar/>
          <Header/>
          <Main>
            <Routes>
              <Route path={'/login'} element={<LoginPage/>}/>
              <Route path={'/collections/:category'} element={<CollectionPage/>}/>
              <Route exact path={'/'} element={<CollectionPage/>}/>
            </Routes>
          </Main>
          <Footer/>
        </CollectionProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
