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
      zoom: 13,
    }
    this.map = new google.maps.Map(map, options);

    const marker = new google.maps.Marker({
      position:latlng,
      map: this.map
    });

    if(this.props.updateResults) {
      let that = this;

      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat:north, lng: east },
          southWest: { lat: south, lng: west }
        };
        //this is referring to google maps so this.props.near/find/updateResults is empty
        console.log(that.props.near);
        console.log(that.props.find);
        const values = {
          bounds: bounds,
          near: that.props.near,
          find: that.props.find
        }

         that.props.updateResults(values);

      });
    }
  }


  render() {

    return (
        <div className="map" ref="map"/>
    );
  }
}

export default MapBusiness;
