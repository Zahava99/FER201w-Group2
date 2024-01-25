import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export default function TEST() {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div>
      <Card style={{ width: showContent ? '100%' : '18rem', transition: 'width 0.5s ease-in-out' }}>
        <Card.Body>
          <Card.Text>
            This is a sample card with some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handleClick}>
            Xem nhanh
          </Button>
          <div className={`content ${showContent ? 'show' : ''}`}>
            <p>Additional content goes here...</p>
            <p>Additional content goes here...Additional content goes here...Additional content goes here...</p>
            <p>Additional content goes here...Additional content goes here...Additional content goes here...Additional content goes here...</p>
            <p>Additional content goes here...Additional content goes here...Additional content goes here...Additional content goes here...Additional content goes here...</p>
            <img src="https://via.placeholder.com/150" alt="additional content" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
// import React, { useState } from 'react';

// export default function TEST() {
//   const [showContent, setShowContent] = useState(false);

//   const handleClick = () => {
//     setShowContent(!showContent);
//     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
//   };
//   // style={{ width: showContent ? '100%' : '18rem', transition: 'width 0.5s ease-in-out' }}
//   // style={{width: '18rem' }}
//   // onclick="document.querySelector('.card').classList.toggle('card-width-expanded')"
//   return (
//     <div class="card card-width TEST">
//   <div class="card-body">
//     <p class="card-text">
//       This is a sample card with some quick example text to build on the card title and make up the bulk of the card's content.
//     </p>
//     <button class="btn btn-primary" onClick={handleClick} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
//       Xem nhanh
//     </button>
//     <div class="collapse" id="collapseExample">
//       <div class="card card-body">
//         <p>Additional content goes here...</p>
//         <p>Additional content goes here...Additional content goes here...Additional content goes here...</p>
//         <p>Additional content goes here...Additional content goes here...Additional content goes here...Additional content goes here...</p>
//         <p>Additional content goes here...Additional content goes here...Additional content goes here...Additional content goes here...Additional content goes here...</p>
//         <img src="https://via.placeholder.com/150" alt="additional content" />
//       </div>
//     </div>
//   </div>
// </div>

//   );
// }
// import React, { useState } from 'react';
// import { Button, Card } from 'react-bootstrap';

// export default function TEST() {
//   const [showContent, setShowContent] = useState(false);

//   const handleClick = () => {
//     setShowContent(!showContent);
//     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
//   };
//   // style={{ width: showContent ? '100%' : '18rem', transition: 'width 0.5s ease-in-out' }}
//   // style={{width: '18rem' }}
//   return (
// <div class="card card-width">
//   <div class="card-body">
//     <p class="card-text">
//       This is a sample card with some quick example text to build on the card title and make up the bulk of the card's content.
//     </p>
//     <button class="btn btn-primary" type="button" onclick="document.querySelector('.card').classList.toggle('card-width-expanded')">
//       Xem nhanh
//     </button>
//     <div class="collapse">
//       <div class="card card-body">
//         <p>Additional content goes here...</p>
//         <p>Additional content goes here...Additional content goes here...Additional content goes here...</p>
//         <p>Additional content goes here...Additional content goes here...Additional content goes here...Additional content goes here...</p>
//         <p>Additional content goes here...Additional content goes here...Additional content goes here...Additional content goes here...Additional content goes here...</p>
//         <img src="https://via.placeholder.com/150" alt="additional content" />
//       </div>
//     </div>
//   </div>
// </div>

//   );
// }
