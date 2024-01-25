import './App.css'
import Header from './component/Header'
import HomePageBody from './component/HomePageBody'
import HomePageBodySecondHalf from './component/HomePageBodySecondHalf'
import Carousel from './component/CarouselComponent'
import Footer from './component/Footer'
import InteriorDesignApartment from './component/InteriorDesignApartment'
import { Routes, Route } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePageBody />} />
        <Route
          path='/Thiết kế nội thất chung cư'
          element={<InteriorDesignApartment />}
        />
      </Routes>
      <Footer />
    </div>
  )
}
export default App
