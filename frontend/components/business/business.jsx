import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar.jsx';
// import BusinessInfoContainer from './businessInfoContainer';
import BusinessInfo from './businessInfo';
import Footer from '../footer/footer';
import MapBusiness from './map';
// import SideBarContainer from './sideBarInfoContainer';
import SideBarInfo from './sideBarInfo';
import BusinessPhotos from './photos';
import {Link} from 'react-router-dom';

class Business extends React.Component {
  constructor(props) {
    super(props);
    this.openDirections=this.openDirections.bind(this);

  }

  componentWillMount() {
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


    const photoKeys = Object.keys(this.props.photos).slice(0,3);

  return (
    <div className="businessShow">
      <div className="topNavBar">
      <SearchNavBar/>
      </div>
      <div className="businessMapPhotoContainer">
        <div className="businessInformation">
            <BusinessInfo business={this.props.business} keywords={this.props.keywords} />

          <div className="mapPhotoContainer">
              <div className="googleMap" onClick={this.openDirections}>
                <MapBusiness title={this.props.business.name} loc={{lat: this.props.business.lat, lng: this.props.business.lng}}/>
                <div className="caption">
                  {this.props.business.address} <br/>
                {this.props.business.city} {this.props.business.zipCode} CA <br />
                {this.props.business.phone}
                <br />
                <a onClick={this.openDirections}>Get Directions</a>
                </div>


              </div>

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

      <div className="reviewAndSideBarContainer" >
        <div className="reviewContainer">
            ReviewContainer Here

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
