import React from 'react';

const FilterBar = (props) => {

  return (
    <div className="filterBar">
      <div className="filterButtonContainer">
      <div className="PriceFilter">
        <button onClick={props.fetchBusinesses}>$</button>
        <button>$$</button>
        <button>$$$</button>
        <button>$$$$</button>
      </div>
      <div className="OpenFilter">
        <button>Open Now</button>
      </div>
      </div>

    </div>
  );
}
export default FilterBar;
