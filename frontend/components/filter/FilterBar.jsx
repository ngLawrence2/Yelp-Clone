import React from 'react';

const FilterBar = (props) => {

  return (
    <div>
      <div className="PriceFilter">
        <button onClick={props.fetchBusinesses}>$</button>
        <button>$$</button>
        <button>$$$</button>
        <button>$$$$</button>
      </div>
      <div className="OpenFilter">
        <button>Open Now</button>
      </div>

      <div className="DistanceFilter">
        <button>Driving(~5 miles)</button>
        <button>Biking(~2 miles)</button>
        <button>Walking(~1 miles)</button>
      </div>
    </div>
  );
}
export default FilterBar;
