import React from 'react';
import SearchNavBar from '../nav_bar/search_nav_bar';
import FilterBar from '../filter/FilterBar';
import SearchItem from './searchItem';
import BusinessContainer from './businessContainer';

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

    const displayAllBusiness = Object.keys(this.props.businesses).map(businessId => {
      return (
        <div key = {businessId}>
          <SearchItem business = {this.props.businesses[businessId]} />
        </div>
      );
    });

    return (
      <div>
        <div>
          <SearchNavBar/>
        </div>

        <div className="filterBar">
          <FilterBar filter={this.props.fetchBusinesses} />
        </div>

        <div className="businessResults">

          <div className="searchRes">
            {displayAllBusiness}
          </div>

          <div className="mapRes">

          </div>

        </div>

      </div>
    );
  }
}

export default BusinessIndex;
