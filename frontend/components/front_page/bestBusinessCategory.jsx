import React from 'react';
import {Link} from 'react-router-dom';
const BestBusinessCategory = () => {
  return (
    <div>
      <span className= "quickLinkTitle">
        <h2>Find the Best Businesses in Town</h2>
      </span>
      <div className = "quickBusinessLinks">
        <figure>
          <Link to = "#"><img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/homepage/f2b11c811eb6/assets/img/categories/services_promotion/images/hotels.jpg" /></Link>
          <figcaption>Hotels</figcaption>
        </figure>

      </div>
    </div>
  );
}

export default BestBusinessCategory;
