import React from 'react';
import {Link} from 'react-router-dom';
const BestBusinessCategory = () => {
  return (
    <div>
      <span className= "quickLinkTitle">
        <h2>Find the Best Businesses in Town</h2>
      </span>
      <div className = "quickBusinessLinks">

        <Link to = "#">
          <span>
            <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/homepage/f2b11c811eb6/assets/img/categories/services_promotion/images/hotels.jpg" />
            <figcaption>Hotels</figcaption>
          </span>
        </Link>

        <Link to = "#">
          <span>
            <img src="https://s3-media1.fl.yelpcdn.com/assets/srv0/homepage/492f86d06b50/assets/img/categories/services_promotion/images/locksmiths.jpg" />
            <figcaption>Locksmiths</figcaption>
          </span>
        </Link>

        <Link to = "#">
          <span>
            <img src="https://s3-media4.fl.yelpcdn.com/assets/srv0/homepage/cbf48ef1f4b2/assets/img/categories/services_promotion/images/movers.jpg" />
            <figcaption>Movers</figcaption>
          </span>
        </Link>

        <Link to = "#">
          <span>
            <img src="https://s3-media3.fl.yelpcdn.com/assets/srv0/homepage/b67fbcf19738/assets/img/categories/services_promotion/images/dryclean.jpg" />
            <figcaption>Dry Cleaning</figcaption>
          </span>
        </Link>

      </div>
    </div>
  );
}

export default BestBusinessCategory;
