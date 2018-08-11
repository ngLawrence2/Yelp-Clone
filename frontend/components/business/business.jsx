import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar.jsx';
// import BusinessInfoContainer from './businessInfoContainer';
import BusinessInfo from './businessInfo';
import Footer from '../footer/footer';
// import SideBarContainer from './sideBarInfoContainer';
import SideBarInfo from './sideBarInfo';

class Business extends React.Component {
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

  return (
    <div className="businessShow">
      <div className="topNavBar">
      <SearchNavBar />
      </div>
      <div className="businessInformation">
          <BusinessInfo business={this.props.business} />
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
