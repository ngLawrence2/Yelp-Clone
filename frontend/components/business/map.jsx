import React from 'react';
import ReactDOM from 'react-dom';

class MapBusiness extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const map = ReactDOM.findDOMNode(this.refs.map);
    const latlng = new google.maps.LatLng(this.props.loc);
    const options = {
      center: latlng,
      zoom: 17,
    }
    this.map = new google.maps.Map(map, options);
    const marker = new google.maps.Marker({
      position:latlng,
      map: this.map

    });
  }


  render() {

    return (
        <div className="map" ref="map"/>
    );
  }
}

export default MapBusiness;
