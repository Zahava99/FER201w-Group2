import React from 'react'
// import Slider from 'react-slick'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ProductsCarousel } from '../shared/ListOfProduct'

export default function CarouselComponent () {
  return (
    <>
      <Swiper
        className='mySwiper'
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        navigation={true}
        pagination={true}
        loop={true}
        slidesPerView={3}
      >
        {ProductsCarousel.map(productCarouselItem => (
          <SwiperSlide>
            <div className='card mx-2 CarouselCard'>
              <a href='#' title='buzz hover text' className='homePageBody-link'>
                <div className='homePageBody-hover '>
                  <div className='HPB object-fit-fill'>
                    <img
                      src={productCarouselItem.img}
                      className='card-img homePageBody-hover card-img-slider img-fluid'
                    />
                    <div className='HPB-layer'>
                      <h3 className='HPB-text'>{productCarouselItem.title}</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <div className='card mx-2'>
            <a href='#' title='buzz hover text' className='homePageBody-link'>
              <div className='homePageBody-hover '>
                <div className='HPB object-fit-fill'>
                  <img
                    src={imgCardMK1}
                    className='card-img homePageBody-hover card-img-slider img-fluid'
                  />
                  <div className='HPB-layer'>
                    <h3 className='HPB-text'>
                      Lorem ipsum dolor sit amet. Qui quis rerum id nesciunt
                      sunt non
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card mx-2'>
            <a href='#' title='buzz hover text' className='homePageBody-link'>
              <div className='homePageBody-hover '>
                <div className='HPB object-fit-fill'>
                  <img
                    src={imgCardMK1}
                    className='card-img homePageBody-hover card-img-slider img-fluid'
                  />
                  <div className='HPB-layer'>
                    <h3 className='HPB-text'>
                      Lorem ipsum dolor sit amet. Qui quis rerum id nesciunt
                      sunt non
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card mx-2'>
            <a href='#' title='buzz hover text' className='homePageBody-link'>
              <div className='homePageBody-hover '>
                <div className='HPB object-fit-fill'>
                  <img
                    src={imgCardMK1}
                    className='card-img homePageBody-hover card-img-slider img-fluid'
                  />
                  <div className='HPB-layer'>
                    <h3 className='HPB-text'>
                      Lorem ipsum dolor sit amet. Qui quis rerum id nesciunt
                      sunt non
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card mx-2'>
            <a href='#' title='buzz hover text' className='homePageBody-link'>
              <div className='homePageBody-hover '>
                <div className='HPB object-fit-fill'>
                  <img
                    src={imgCardMK1}
                    className='card-img homePageBody-hover card-img-slider img-fluid'
                  />
                  <div className='HPB-layer'>
                    <h3 className='HPB-text'>
                      Lorem ipsum dolor sit amet. Qui quis rerum id nesciunt
                      sunt non
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card mx-2'>
            <a href='#' title='buzz hover text' className='homePageBody-link'>
              <div className='homePageBody-hover '>
                <div className='HPB object-fit-fill'>
                  <img
                    src={imgCardMK1}
                    className='card-img homePageBody-hover card-img-slider img-fluid'
                  />
                  <div className='HPB-layer'>
                    <h3 className='HPB-text'>
                      Lorem ipsum dolor sit amet. Qui quis rerum id nesciunt
                      sunt non
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card mx-2'>
            <a href='#' title='buzz hover text' className='homePageBody-link'>
              <div className='homePageBody-hover '>
                <div className='HPB object-fit-fill'>
                  <img
                    src={imgCardMK1}
                    className='card-img homePageBody-hover card-img-slider img-fluid'
                  />
                  <div className='HPB-layer'>
                    <h3 className='HPB-text'>
                      Lorem ipsum dolor sit amet. Qui quis rerum id nesciunt
                      sunt non
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='card mx-2'>
            <a href='#' title='buzz hover text' className='homePageBody-link'>
              <div className='homePageBody-hover '>
                <div className='HPB object-fit-fill'>
                  <img
                    src={imgCardMK1}
                    className='card-img homePageBody-hover card-img-slider img-fluid'
                  />
                  <div className='HPB-layer'>
                    <h3 className='HPB-text'>
                      Lorem ipsum dolor sit amet. Qui quis rerum id nesciunt
                      sunt non
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}
// {ProductsCarousel.map(productCarouselItem => (
//   <div className='card mx-2'>
//     <a href='#' title='buzz hover text' className='homePageBody-link'>
//       <div className='homePageBody-hover '>
//         <div className='HPB object-fit-fill'>
//           <img
//             src={productCarouselItem.img}
//             className='card-img homePageBody-hover card-img-slider img-fluid'
//           />
//           <div className='HPB-layer'>
//             <h3 className='HPB-text'>{productCarouselItem.title}</h3>
//           </div>
//         </div>
//       </div>
//     </a>
//   </div>
// ))}
//With SwiperReact
{
  ProductsCarousel.map(productCarouselItem => (
    <SwiperSlide>
      <div className='card mx-2'>
        <a href='#' title='buzz hover text' className='homePageBody-link'>
          <div className='homePageBody-hover '>
            <div className='HPB object-fit-fill'>
              <img
                src={productCarouselItem.img}
                className='card-img homePageBody-hover card-img-slider img-fluid'
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
