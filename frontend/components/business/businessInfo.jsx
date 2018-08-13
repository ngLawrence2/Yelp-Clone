import React from 'react';
import {Link} from 'react-router-dom';

class BusinessInfo extends React.Component {

  constructor(props) {
    super(props);

    this.getStars=this.getStars.bind(this);
  }

    getStars(rating) {
      const ratingsPosition = [
        [0 , -217],
        [0, -195],
        [0,-169],
        [0,-146],
        [0,-120],
        [0,-99],
        [0,-74],
        [0,-49],
        [0,-27],
        [0,-1]
      ];
      const resultPos = ratingsPosition.length-(rating*2);
      const xPos = ratingsPosition[resultPos][0];
      const yPos = ratingsPosition[resultPos][1];
      let position = {
        backgroundPosition: `${xPos}px ${yPos}px`,
        width: '132px',
        height: '22px'
      };
      console.log(position);
      return (
        <div className="currentRating" style={position}></div>
      );
    }




  render() {
    const keyword = Object.keys(this.props.keywords);
    return (
      <div>
        <div className="businessInfo">
          <div className="businessShowContainer">
            <div className="businessTitleHeader">
              <h1>{this.props.business.name}</h1>
                {this.getStars(this.props.business.rating)}
              <div>
                <div className= "priceKeywordContainer">
                  {this.props.business.price} - {keyword.map( key => <div key={key}>{this.props.keywords[key].name}</div>)}
                </div>
              </div>
            </div>
            <div className="quickBusinessLinks">
                <button className="reviewButton"><span className="fa fa-star quickLinkStar"></span>Write a Review</button>
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
