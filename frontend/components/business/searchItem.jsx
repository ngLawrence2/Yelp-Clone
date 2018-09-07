import React from 'react';
import {Link} from 'react-router-dom';
import RatingStars from './ratingStars';

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.getAltImage=this.getAltImage.bind(this);
    this.getReviewPreview=this.getReviewPreview.bind(this);
  }



  getAltImage() {

    if(this.props.business.businessPhoto.length < 50) {
      return "https://st3.depositphotos.com/5266903/14457/v/450/depositphotos_144579495-stock-illustration-house-vector-icon.jpg";
    }else {
      return this.props.business.businessPhoto;
    }
  }

  getReviewPreview() {
    if (this.props.business.reviewPreview!==null) {
      return (
        <div>{`${this.props.business.reviewPreview.slice(0,151)}`}</div>
      );
    }
  }

  render() {
    if(!this.props.business.businessPhoto) {
      return null;
    }
    const displaySetOfKeywords = this.props.business.keywords.slice(0,3).map((k,idx) => {
      return (
        <span className="keywordCategory" key ={idx}>{k}</span>
      );
    })

    this.getAltImage();
    let averageRating = (this.props.business.averageRating * 2 ) / 2;

    return (
      <div className="searchResultContainer">
          <div className="searchResBusinessPhoto"><img src ={this.getAltImage()}/></div>

        <div className="searchResultInfo">
          <div className = "searchBusInfoContainer">
            <div className="searchResultBusinessInfo">
               <div><Link to = {`/businesses/${this.props.business.id}`}>{this.props.business.name}</Link></div>
               <div><RatingStars rating = {averageRating} /></div>
               <div>{this.props.business.price} <span>{displaySetOfKeywords}</span></div>
            </div>

            <div className="searchResultBusinessContact">
              <div className="phoneResult">{this.props.business.phone}</div>
              <div>{this.props.business.address}</div>
            </div>
          </div>

          <div className="reviewPrev">
            <div>
              "{this.getReviewPreview()}..."

              <Link to = {`/businesses/${this.props.business.id}`}>Read More</Link>
            </div>
          </div>
       </div>
      </div>
    );
  }
}

export default SearchItem;
