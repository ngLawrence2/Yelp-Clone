import React from 'react';

class SideBarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.getPriceEstimate=this.getPriceEstimate.bind(this);

  }

  getPriceEstimate(length) {
    const priceEstimate = ["Under $10", "$11-$30", "$30-$60", "$100+"];
    let repeat = 4 - length;
    const str = "$".repeat(repeat);
    return (
      <div><span className="allPrices">{str}</span>Price Range <span className="priceEstimate">{priceEstimate[length-1]}</span></div>
    );
  }

  render() {
    const currentDate = new Date();
    const day = currentDate.getDay();
    return(
      <div>
        <div className="todayHours">Today: <span className="currentHours">{this.props.business.hours[day]}</span></div>
        <div className="priceRange"><div className="actualPrice">{this.props.business.price}</div> <div>{this.getPriceEstimate(this.props.business.price.length)}</div></div>
        <div className="healthScore">Health Score: {this.props.business.healthScore} out of 100</div >


        <div className="hoursSection">
          <header>Hours</header>
          <div><span className="currentDay">Monday</span> <span className="dayHours">{this.props.business.hours[0]}</span></div>
          <div><span className="currentDay">Tuesday</span> <span className="dayHours">{this.props.business.hours[1]}</span></div>
          <div><span className="currentDay">Wednesday</span> <span className="dayHours">{this.props.business.hours[2]}</span></div>
          <div><span className="currentDay">Thursday</span> <span className="dayHours">{this.props.business.hours[3]}</span></div>
          <div><span className="currentDay">Friday</span> <span className="dayHours">{this.props.business.hours[4]}</span></div>
          <div><span className="currentDay">Saturday</span> <span className="dayHours">{this.props.business.hours[5]}</span></div>
          <div><span className="currentDay">Sunday</span> <span className="dayHours">{this.props.business.hours[6]}</span></div>
        </div>

        <div className="moreInfo"><span>Takes Reservations</span><span className="answers">{this.props.business.reservations}</span></div>
        <div className="moreInfo"><span>Delivery</span><span className="answers">{this.props.business.delivery}</span></div>
        <div className="moreInfo"><span>Take-out</span><span className="answers">{this.props.business.takeOut}</span></div>
        <div className="moreInfo"><span>Accepts Credit Cards</span><span className="answers">{this.props.business.creditCard}</span></div>
      </div>
    );
  }
}

// const SideBarInfo = (props) => {
//   return (
//     <div>
//      More Business Info
//      <h1>{props.business.name}</h1>
//     <h2>{props.business.price}</h2>
//      <h1> Hours </h1>
//      <h1>{props.business.hours}</h1>
//
//
//      <h2>{props.business.healthScore}</h2>
//      <h2>{props.business.parking}</h2>
//      <h2>{props.business.wifi}</h2>
//      <h2>{props.business.delivery}</h2>
//      <h2>{props.business.takeOut}</h2>
//      <h2>{props.business.reservations}</h2>
//    </div>
//   );
// }
//


export default SideBarInfo;
