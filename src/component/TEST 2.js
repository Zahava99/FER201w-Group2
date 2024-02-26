import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselComponent from './CarouselComponent';
import HomePageBodySecondHalf from './HomePageBodySecondHalf';
import { Products } from '../shared/ListOfProduct';

export default function HomePageBody() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('your-api-endpoint')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderProducts = () => {
    return products.map(productItem => (
      <div className='col mt-0' key={productItem.id}>
        <a href='#' title='buzz hover text' className='homePageBody-link'>
          <div className='homePageBody-hover '>
            <div className='HPB'>
              <img
                src={productItem.img}
                className='card-img homePageBody-hover card-img-bg homePageBody-link'
                alt={productItem.title}
              />
              <div className='HPB-layer'>
                <h3 className='HPB-text'>{productItem.title}</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    ));
  };

  return (
    <div className='container-fluid homePagesLogan' id='homePagesLogan'>
      {/* Your other JSX content */}
      <div className='container-fluid'>
        <div className='row row-cols-4 row-cols-md-4 g-4 my-2'>
          {renderProducts()}
        </div>
      </div>
      {/* Your other JSX content */}
      <CarouselComponent />
      <HomePageBodySecondHalf />
    </div>
  );
 }
//           {listOfProductFirst.map(productItem => (
//               renderProducts()
//                <div className='col mt-0'>
//                 <a
//                   href='#'
//                   title='buzz hover text'
//                    className='homePageBody-link'
//                 >
//                   <div className='homePageBody-hover '>
//                     <div className='HPB'>
//                       <img
//                         src={productItem.img}
//                        className='card-img homePageBody-hover card-img-bg homePageBody-link'
//                      />
//                      <div className='HPB-layer'>
//                         <h3 className='HPB-text'>{productItem.title}</h3>
//                       </div>
//                     </div>
//                    </div>
//                  </a>
//                </div>
//             ))}





















































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
// import { ProductsCarousel } from '../shared/ListOfProduct'
// import axios from 'axios'

// export default function CarouselComponent () {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://65b46f4341db5efd28668857.mockapi.io/api/InteriorDesignArticle/IDAPost')
//       .then(response => {
//         setProducts(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
//   const renderProductsCarousel = () => {
//     return products.map(productCarouselItem => (
//       <div className='card mx-2 CarouselCard'>
//       <a href='#' title='buzz hover text' className='homePageBody-link'>
//         <div className='homePageBody-hover '>
//           <div className='HPB object-fit-fill'>
//             <img
//               src={productCarouselItem.img}
//               className='card-img homePageBody-hover card-img-slider img-fluid'
//             />
//             <div className='HPB-layer'>
//               <h3 className='HPB-text'>{productCarouselItem.title}</h3>
//             </div>
//           </div>
//         </div>
//       </a>
//     </div>
//     ));
//   };
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
//             {renderProductsCarousel()}
//             {/* <div className='card mx-2 CarouselCard'>
//               <a href='#' title='buzz hover text' className='homePageBody-link'>
//                 <div className='homePageBody-hover '>
//                   <div className='HPB object-fit-fill'>
//                     <img
//                       src={productCarouselItem.img}
//                       className='card-img homePageBody-hover card-img-slider img-fluid'
//                     />
//                     <div className='HPB-layer'>
//                       <h3 className='HPB-text'>{productCarouselItem.title}</h3>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div> */}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   )
//   // ProductsCarousel.map(productCarouselItem => (
//   //   <SwiperSlide>
//   //     <div className='card mx-2'>
//   //       <a href='#' title='buzz hover text' className='homePageBody-link'>
//   //         <div className='homePageBody-hover '>
//   //           <div className='HPB object-fit-fill'>
//   //             <img
//   //               src={productCarouselItem.img}
//   //               className='card-img homePageBody-hover card-img-slider img-fluid'
//   //             />
//   //             <div className='HPB-layer'>
//   //               <h3 className='HPB-text'>{productCarouselItem.title}</h3>
//   //             </div>
//   //           </div>
//   //         </div>
//   //       </a>
//   //     </div>
//   //   </SwiperSlide>
//   // ))
// }
