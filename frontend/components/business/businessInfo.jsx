import React from 'react';

class BusinessInfo extends React.Component {
  constructor(props) {
    super(props);
    this.createStars=this.createStars.bind(this);
  }

    componentDidMount() {
      this.props.fetchBusiness(this.props.match.params.business_id);
      console.log('finished');
    }


    createStars() {
      let result = [1,2,3,4,5];
      return (
        result.map(num => num<=this.props.business.rating ? <span key={num}className="fa fa-star checked"></span> : <span key={num} className="fa fa-star unchecked"></span>)
      );

    }

  render() {

    if(!this.props.business) {

      return null;
    }

      console.log(this.props.business.rating);
    return (

      <div>
        <div className="businessInfo">

          <div className="businessShowContainer">

            <div className="businessTitleHeader">
              <h1>{this.props.business.name}</h1>

              <div className="businessRating">
                {this.createStars()}
              </div>

              <div>
                {this.props.business.price}
              </div>
            </div>

            <div className="quickBusinessLinks">
                <button className="reviewButton"><span className="fa fa-star quickLinkStar"></span>Write a Review</button>

                <div className="socialMediaLinks">
                  <button><img src={window.images.camera}/> Add Photo</button>
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
