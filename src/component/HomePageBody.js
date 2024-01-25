// import React from 'react'
// import sloganBackgeound from '../assets/images/Slogan Background.jpg'
// export default function HomePageBody () {
//   return (
//     <div className='container-fluid homePagesLogan' id='homePagesLogan'>
//       <div>
//         {/* <div class='card text'>
//           <h1>Your Space, Your Signature Style!</h1>
//           <img src={sloganBackgeound} className='img-fluid card-img' />
//         </div> */}
//         <div class='card'>
//           <img src={sloganBackgeound} alt='...' class='card-img img-fluid' />
//           <div class='card-img-overlay'>
//             <h4 class='card-title'>Your Space, Your<br/> Signature Style!</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react'
import sloganBackgeound from '../assets/images/CropSlogan BackgroundWithSlogan.jpg'
import CarouselComponent from './CarouselComponent'
import HomePageBodySecondHalf from './HomePageBodySecondHalf'
import { Products } from '../shared/ListOfProduct'
export default function HomePageBody () {
  const listOfProductFirst = Products.filter(
    productItem => productItem.id >= 1 && productItem.id <= 4
  )
  const listOfProductSecond = Products.filter(
    productItem => productItem.id >= 5 && productItem.id <= 8
  )
  return (
    <div className='container-fluid homePagesLogan' id='homePagesLogan'>
      <div>
        {/* <div class='card text'>
          <h1>Your Space, Your Signature Style!</h1>
          <img src={sloganBackgeound} className='img-fluid card-img' />
        </div> */}
        <div class='card'>
          <img src={sloganBackgeound} alt='...' class='card-img img-fluid' />
          <div class='card-img-overlay'>
            {/* <h4 class='card-title'>Your Space, Your<br/> Signature Style!</h4> */}
          </div>
        </div>
      </div>
      <div className='HomepageBody-container'>
        <div className='HomepageBody-title'>Dự án đã thực hiện</div>
        <div className='container-fluid'>
          <div className='row row-cols-4 row-cols-md-4 g-4 my-2'>
            {listOfProductFirst.map(productItem => (
              <div className='col mt-0'>
                <a
                  href='#'
                  title='buzz hover text'
                  className='homePageBody-link'
                >
                  <div className='homePageBody-hover '>
                    <div className='HPB'>
                      <img
                        src={productItem.img}
                        className='card-img homePageBody-hover card-img-bg homePageBody-link'
                      />
                      <div className='HPB-layer'>
                        <h3 className='HPB-text'>{productItem.title}</h3>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <a href='#' title='buzz hover text' className='homePageBody-link'>
                <div className='homePageBody-hover '>
                  <div className='HPB'>
                    <img
                      src={imgCardBackground1}
                      className='card-img homePageBody-hover card-img-bg homePageBody-link'
                    />
                    <div className='HPB-layer'>
                      <h3 className='HPB-text'>Khang</h3>
                    </div>
                  </div>
                </div>
              </a> */}
              </div>
            ))}
            {/* <div className='col mt-0'>
              <a href='#' title='buzz hover text' className='homePageBody-link'>
                <div className='homePageBody-hover '>
                  <div className='HPB'>
                    <img
                      src={imgCardBackground1}
                      className='card-img homePageBody-hover card-img-bg homePageBody-link'
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
            <div className='col mt-0'>
              <a href='#' title='buzz hover text' className='homePageBody-link'>
                <div className='homePageBody-hover '>
                  <div className='HPB'>
                    <img
                      src={imgCardBackground1}
                      className='card-img homePageBody-hover card-img-bg homePageBody-link'
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
            <div className='col mt-0'>
              <a href='#' title='buzz hover text' className='homePageBody-link'>
                <div className='homePageBody-hover '>
                  <div className='HPB'>
                    <img
                      src={imgCardBackground1}
                      className='card-img homePageBody-hover card-img-bg homePageBody-link'
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
            </div> */}
          </div>
          <div className='row row-cols-4 row-cols-md-4 g-4 my-2 mt-3'>
            {listOfProductSecond.map(productItem => (
              <div className='col mt-0'>
                <a
                  href='#'
                  title='buzz hover text'
                  className='homePageBody-link'
                >
                  <div className='homePageBody-hover '>
                    <div className='HPB'>
                      <img
                        src={productItem.img}
                        className='card-img homePageBody-hover card-img-bg homePageBody-link'
                      />
                      <div className='HPB-layer'>
                        <h3 className='HPB-text'>{productItem.title}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            {/*<div className='col mt-0'>
              <a href='#' title='buzz hover text' className='homePageBody-link'>
                <div className='homePageBody-hover '>
                  <div className='HPB'>
                    <img
                      src={imgCardBackground1}
                      className='card-img homePageBody-hover card-img-bg homePageBody-link'
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
            <div className='col mt-0'>
              <a href='#' title='buzz hover text' className='homePageBody-link'>
                <div className='homePageBody-hover '>
                  <div className='HPB'>
                    <img
                      src={imgCardBackground1}
                      className='card-img homePageBody-hover card-img-bg homePageBody-link'
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
            <div className='col mt-0'>
              <a href='#' title='buzz hover text' className='homePageBody-link'>
                <div className='homePageBody-hover '>
                  <div className='HPB'>
                    <img
                      src={imgCardBackground1}
                      className='card-img homePageBody-hover card-img-bg homePageBody-link'
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
            </div> */}
          </div>
          <div className='HomepageBody-btn'>
            <a href='#' className='btn btn-scheme-dark btn-scheme-hover-light'>
              Xem Thêm
            </a>
          </div>
        </div>
        <div className='HomepageBody-title HomepageBody-title-background'>
          Mẫu Thiết Kế
        </div>
      </div>
      <CarouselComponent/>
      <HomePageBodySecondHalf/>
    </div>
  )
}
