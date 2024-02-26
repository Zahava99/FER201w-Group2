// import React, { useState, useEffect } from 'react'
// // import Slider from 'react-slick'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import {
//   Navigation,
//   Pagination,
//   Mousewheel,
//   Keyboard,
//   Autoplay
// } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// // import { ProductsCarousel } from '../shared/ListOfProduct'
// import axios from 'axios'

// export default function CarouselComponent () {
//   // const [products, setProducts] = useState([]);
//   const [ProductsCarousel, setProductsCarousel] = useState([]);
//   useEffect(() => {
//     axios.get('https://65b46f4341db5efd28668857.mockapi.io/api/InteriorDesignArticle/IDAPost')
//       .then(response => {
//         setProductsCarousel(response.data);
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
//   return (
//     <>
//       <Swiper
//         className='mySwiper'
//         modules={[Navigation, Pagination]}
//         spaceBetween={10}
//         navigation={true}
//         pagination={true}
//         loop={true}
//         slidesPerView={3}
//       >
//         {ProductsCarousel.map(productCarouselItem => (
//           <SwiperSlide>
//             <div className='card mx-2 CarouselCard'>
//               <a href='#' title='buzz hover text' className='homePageBody-link'>
//                 <div className='homePageBody-hover '>
//                   <div className='HPB object-fit-fill'>
//                     <img
//                       src={productCarouselItem.img}
//                       className='card-img homePageBody-hover card-img-slider img-fluid'
//                     />
//                     <div className='HPB-layer'>
//                       <h3 className='HPB-text'>{productCarouselItem.Investor}</h3>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   )
// }
import React, { useState, useEffect } from 'react'
// import Slider from 'react-slick'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import { ProductsCarousel } from '../shared/ListOfProduct'
import axios from 'axios'
import { ProductsCarousel } from '../shared/ListOfProduct'
export default function CarouselComponent () {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://65b46f4341db5efd28668857.mockapi.io/api/InteriorDesignArticle/IDACarousel'
      )
      .then(response => {
        setProducts(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])
  const renderSlides = () => {
    // Duplicate slides if needed to support loop mode
    const duplicatedSlides = products.concat(products)
    return duplicatedSlides.map((productCarouselItem, index) => (
      <SwiperSlide key={index}>
        <div className='card mx-2 CarouselCard'>
          <a href='#' title='buzz hover text' className='homePageBody-link'>
            <div className='homePageBody-hover '>
              <div className='HPB object-fit-fill'>
                <img
                  src={productCarouselItem.img}
                  className='card-img homePageBody-hover card-img-slider img-fluid'
                  alt={productCarouselItem.title}
                />
                <div className='HPB-layer'>
                  <h3 className='HPB-text'>{productCarouselItem.title}</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </SwiperSlide>
    ))
  }
  return (
    <>
      <Swiper
        className='mySwiper'
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        navigation={true}
        pagination={true}
        // loop={true}
        slidesPerView={3}
      >
        {renderSlides()}
      </Swiper>
    </>
  )
}
