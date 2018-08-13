import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar';
import FilterBar from '../filter/FilterBar';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchBusinesses();
  }

  render() {
    if(!this.props.businesses) {
      return null;
    }
    debugger;
    return (
      <div>
        <div>
          <SearchNavBar />
        </div>

        <div className="filterBar">
          <FilterBar />
        </div>

      </div>
    );
  }
}

export default BusinessIndex;
