import React from 'react';

// class SideBarInfo extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//
//   render() {
//
//
//     return(
//       <div>
//         More Business Info
//         <h1>{this.props.business.name}</h1>
//         <h1>{this.props.business.hours}</h1>
//         <h2>{this.props.business.price}</h2>
//         <h2>{this.props.business.healthScore}</h2>
//         <h2>{this.props.business.parking}</h2>
//         <h2>{this.props.business.wifi}</h2>
//         <h2>{this.props.business.delivery}</h2>
//         <h2>{this.props.business.takeOut}</h2>
//         <h2>{this.props.business.reservations}</h2>
//       </div>
//     );
//   }
// }

const SideBarInfo = (props) => {
  return (
    <div>
     More Business Info
     <h1>{props.business.name}</h1>
     <h1>{props.business.hours}</h1>
     <h2>{props.business.price}</h2>
     <h2>{props.business.healthScore}</h2>
     <h2>{props.business.parking}</h2>
     <h2>{props.business.wifi}</h2>
     <h2>{props.business.delivery}</h2>
     <h2>{props.business.takeOut}</h2>
     <h2>{props.business.reservations}</h2>
   </div>
  );
}



export default SideBarInfo;
