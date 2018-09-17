import React from 'react';
import ReactDOM from 'react-dom';

class MapBusiness extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.loc.lat !== this.props.loc.lat) {

      this.updateMap(nextProps);
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.placeMarkers) {
    if (this.props.placeMarkers.length !== prevProps.placeMarkers.length) {

    //  this.updateMap(this.props);
    }
  }
}

  componentDidMount() {
    this.updateMap(this.props);
  }

  updateMap(nextProps) {
    let centerOfMap;
    const map = ReactDOM.findDOMNode(this.refs.map);

    const latlng = new google.maps.LatLng(nextProps.loc);
    const options = {
      center: latlng,
      zoom: 11,
    }
    this.map = new google.maps.Map(map, options);
      let marker;
    if(this.props.placeMarkers) {
        for(let i = 0 ; i < this.props.placeMarkers.length; i++) {
          let markerLocation = {
            lat: this.props.placeMarkers[i].lat,
            lng: this.props.placeMarkers[i].lng
          }
          const markerPos = new google.maps.LatLng(markerLocation);
          new google.maps.Marker({
            position:markerPos,
            map:this.map
          });
        }

    } else {
      marker = new google.maps.Marker({
       position:latlng,
       map: this.map
     });
    }


    if(this.props.updateResults) {
      let that = this;
      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat:north, lng: east },
          southWest: { lat: south, lng: west }
        };
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
