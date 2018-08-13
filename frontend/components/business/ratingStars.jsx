import React from 'react';

class RatingStars extends React.Component {
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
    return (
      <div>{this.getStars(this.props.rating)}</div>
    );
  }
}

export default RatingStars;
