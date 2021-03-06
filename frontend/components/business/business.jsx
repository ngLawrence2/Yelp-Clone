import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar.jsx';

import BusinessInfo from './businessInfo';
import Footer from '../footer/footer';
import MapBusiness from './map';

import SideBarInfo from './sideBarInfo';
import BusinessPhotos from './photos';
import {Link} from 'react-router-dom';
import SearchNavBarContainer from '../nav_bar/search_nav_bar_container';
import ReviewItem from '../review/reviewItem';

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.openDirections=this.openDirections.bind(this);

  }

  componentWillMount() {
    this.props.fetchBusiness(this.props.match.params.business_id);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.business_id);
  }

  openDirections() {
    let directionUrl = `https://www.google.com/maps/search/?api=1&query=${this.props.business.address}%2C+${this.props.business.city}`;
    window.open(directionUrl);
  }


  render() {
    if(!this.props.business) {
      return null;
    }
    const getCurrentUser = () => {
      if(!this.props.currentUser) {
          return (
            <Link to = "/login">Login to write a review!</Link>
          );
      }else {
        return this.props.currentUser.fname + " " + this.props.currentUser.lname.charAt(0)+".";
      }

    }
    const photoKeys = Object.keys(this.props.photos).slice(0,3);
    const displayReviews = Object.keys(this.props.reviews).map(reviewId => {
      return (
        <div key={reviewId}><ReviewItem review ={this.props.reviews[reviewId]} author={this.props.users[this.props.reviews[reviewId].user_id]}/></div>
      );
    });
  return (
    <div className="businessShow">
      <div className="topNavBar">
      <SearchNavBarContainer find={this.props.filters.find} near={this.props.filters.near}/>
      </div>
      <div className="businessMapPhotoContainer">
        <div className="businessInformation">
            <BusinessInfo business={this.props.business} keywords={this.props.keywords} />

          <div className="mapPhotoContainer">
              <div className="googleMap" onClick={this.openDirections}>
                <MapBusiness title={this.props.business.name} loc={{lat: this.props.business.lat, lng: this.props.business.lng}} business={this.props.business}/>
                <div className="caption">
                  {this.props.business.address} <br/>
                {this.props.business.city} {this.props.business.zipCode} CA <br />
                {this.props.business.phone}
                <br />
                <a onClick={this.openDirections}>Get Directions</a>
                </div>


              </div>

              <div>
              <div className="photoSection">
              {photoKeys.map( photoId => (
                <div className="photos" key={photoId}>
                  <BusinessPhotos photoId={photoId} photos={this.props.photos} />
                </div>
              ))}

              </div>

              <Link to = {`/business/${this.props.business.id}/photos`} className="viewBusinessPhotos" >See all {Object.keys(this.props.photos).length}</Link>

            </div>
        </div>
      </div>


      </div>

      <div className="reviewAndSideBarContainer" >
        <div className="reviewContainer">
          <div className="startReviewContainer">
            <div className="currentUserReviewContainer">
              {getCurrentUser()}
            </div>
            <div className="startReviewBox">
                <div className="linkToStartReview">
                <div className="giveStars"></div>
              <div className="linkReview"> <Link to ={`/business/${this.props.business.id}/writeReview`}>Start your review of {this.props.business.name}</Link></div>
              </div>
            </div>
          </div>
          <div>{displayReviews}</div>
        </div>

        <div className="sideBar">
          <SideBarInfo business={this.props.business}/>
        </div>
      </div>

      <div className="showPageFooter">
        <Footer />
      </div>
    </div>
  )
  }
}

export default Business;
