import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar.jsx';
import {Link} from 'react-router-dom';
import BusinessPhotos from '../business/photos';
import RatingStars from '../business/ratingStars';

class AddPhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBusiness(this.props.match.params.business_id);
  }

  render() {

    if(!this.props.business) {
      return null;
    }

      const photoKeys = Object.keys(this.props.photos);

    return (
      <div>
        <div className="topNavBar">
          <SearchNavBar filters={this.props.filters}/>
        </div>

        <div className="allPhotosHeader">
          Photos for {this.props.business.name}
          <div><Link to ={`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link></div>
          <div><RatingStars rating={this.props.business.rating}/></div>
        </div>

        <div className="currentBusinessContainer">
          {photoKeys.map( photoId => (
            <div className="allPhotos" key={photoId}>
              <BusinessPhotos photoId={photoId} photos={this.props.photos} />
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default AddPhoto;
