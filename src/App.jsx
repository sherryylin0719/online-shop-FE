/* eslint-disable react/react-in-jsx-scope */
import './styles/main.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import CollectionPage from './pages/Collection/CollectionPage'
import CollectionProvider from './components/Context/CollectionContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter basename="/online-shop-FE">
      <CollectionProvider>
        <Navbar/>
        <Header/>
        <Main>
          <Routes>
            <Route path={'/collections/:category'} element={<CollectionPage/>}/>
            <Route exact path={'/'} element={<CollectionPage/>}/>
          </Routes>
        </Main>
        <Footer/>
      </CollectionProvider>
    </BrowserRouter>
  )
}

export default App
