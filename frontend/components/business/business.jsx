import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar.jsx';
import BusinessInfoContainer from './businessInfoContainer';
import Footer from '../footer/footer';
class Business extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  return (
    <div className="businessShow">
      <div className="topNavBar">
      <SearchNavBar />
      </div>
      <div className="businessInformation">
          <BusinessInfoContainer />
      </div>

      <div className="showPageFooter">
        <Footer />
      </div>
    </div>
  )
  }
}

export default Business;
