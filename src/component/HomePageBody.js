
import React, { useState, useEffect } from 'react'
import sloganBackgeound from '../assets/images/CropSlogan BackgroundWithSlogan.jpg'
import CarouselComponent from './CarouselComponent'
import HomePageBodySecondHalf from './HomePageBodySecondHalf'
import { Products } from '../shared/ListOfProduct'
import axios from 'axios'
export default function HomePageBody () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://65b46f4341db5efd28668857.mockapi.io/api/InteriorDesignArticle/IDAPost')
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const listOfProductFirst = products.filter(
    productItem => productItem.id >= 1 && productItem.id <= 4
  )
  const listOfProductSecond = products.filter(
    productItem => productItem.id >= 5 && productItem.id <= 8
  )
  const renderProductsFirst = () => {
    return listOfProductFirst.map(productItem => (
      <div className='col mt-0' key={productItem.id}>
        <a href='#' title='buzz hover text' className='homePageBody-link'>
          <div className='homePageBody-hover '>
            <div className='HPB'>
              <img
                src={productItem.img}
                className='card-img homePageBody-hover card-img-bg homePageBody-link'
                alt={productItem.Apartment}
              />
              <div className='HPB-layer'>
                <h3 className='HPB-text'>{productItem.Apartment}</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    ));
  };
  const renderProductsSecond = () => {
    return listOfProductSecond.map(productItem => (
      <div className='col mt-0' key={productItem.id}>
        <a href='#' title='buzz hover text' className='homePageBody-link'>
          <div className='homePageBody-hover '>
            <div className='HPB'>
              <img
                src={productItem.img}
                className='card-img homePageBody-hover card-img-bg homePageBody-link'
                alt={productItem.Apartment}
              />
              <div className='HPB-layer'>
                <h3 className='HPB-text'>{productItem.Apartment}</h3>
              </div>
            </div>
          </div>
        </a>
      </div>
    ));
  };
  return (
    <div className='container-fluid homePagesLogan' id='homePagesLogan'>
      <div>
        <div class='card'>
          <img src={sloganBackgeound} alt='...' class='card-img img-fluid' />
          <div class='card-img-overlay'>
          </div>
        </div>
      </div>
      <div className='HomepageBody-container'>
        <div className='HomepageBody-title'>Dự án đã thực hiện</div>
        <div className='container-fluid'>
          <div className='row row-cols-4 row-cols-md-4 g-4 my-2'>
            {/* {listOfProductFirst.map(productItem => (
              renderProducts()
              // <div className='col mt-0'>
              //   <a
              //     href='#'
              //     title='buzz hover text'
              //     className='homePageBody-link'
              //   >
              //     <div className='homePageBody-hover '>
              //       <div className='HPB'>
              //         <img
              //           src={productItem.img}
              //           className='card-img homePageBody-hover card-img-bg homePageBody-link'
              //         />
              //         <div className='HPB-layer'>
              //           <h3 className='HPB-text'>{productItem.title}</h3>
              //         </div>
              //       </div>
              //     </div>
              //   </a>
              // </div>
            ))} */}
            {renderProductsFirst()}
          </div>
          <div className='row row-cols-4 row-cols-md-4 g-4 my-2 mt-3'>
            {/* {listOfProductSecond.map(productItem => (
              renderProducts()
              // <div className='col mt-0'>
              //   <a
              //     href='#'
              //     title='buzz hover text'
              //     className='homePageBody-link'
              //   >
              //     <div className='homePageBody-hover '>
              //       <div className='HPB'>
              //         <img
              //           src={productItem.img}
              //           className='card-img homePageBody-hover card-img-bg homePageBody-link'
              //         />
              //         <div className='HPB-layer'>
              //           <h3 className='HPB-text'>{productItem.title}</h3>
              //         </div>
              //       </div>
              //     </div>
              //   </a>
              // </div>
            ))} */}
            {renderProductsSecond()}
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
