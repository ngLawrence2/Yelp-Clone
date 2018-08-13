import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <SearchNavBar />
        </div>
      </div>
    );
  }
}

export default BusinessIndex;
