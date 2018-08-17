import React from 'react';
import {Link} from 'react-router-dom';
import RatingStars from './ratingStars';
class BusinessInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const keyword = Object.keys(this.props.keywords);
    return (
      <div>
        <div className="businessInfo">
          <div className="businessShowContainer">
            <div className="businessTitleHeader">
              <h1>{this.props.business.name}</h1>
                <div className="businessInfoStars"><RatingStars rating={this.props.business.averageRating}/></div>
              <div>
                <div className= "priceKeywordContainer">
                  {this.props.business.price} - {keyword.map( key => <div key={key}>{this.props.keywords[key].name}</div>)}
                </div>
              </div>
            </div>
            <div className="quickBusinessLinks">
                <button className="reviewButton"><Link to ={`/business/${this.props.business.id}/writeReview`} ><span className="fa fa-star quickLinkStar"></span>Write a Review</Link></button>
                <div className="socialMediaLinks">
                  <Link to = {`/business/${this.props.business.id}/upload`}><button><img src={window.images.camera}/>Add Photo</button></Link>
                  <button><img src = {window.images.saveIcon} />Share</button>
                  <button><img src ={window.images.share}/>Save</button>
                </div>
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default BusinessInfo;
