import React from 'react';
import ReactDOM from 'react-dom';

class MapBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.removeOldMarkers=this.removeOldMarkers.bind(this);
    this.markers = [];
  }

  removeOldMarkers() {
    for(let i = 0 ; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loc.lat !== this.props.loc.lat) {
      this.updateMap(nextProps);
    
    }
  }



  componentDidUpdate(prevProps) {
    this.removeOldMarkers();
    if (this.props.businesses) {
      // let businessIds = Object.keys(this.props.businesses);
      for(let i = 0; i < this.props.businesses.length; i++) {

        let markerLocation = {
          lat: this.props.businesses[i].lat,
          lng: this.props.businesses[i].lng
        }
        const markerPos = new google.maps.LatLng(markerLocation);
        this.markers.push(new google.maps.Marker({
          position:markerPos,
          map:this.map
        }))
        // new google.maps.Marker({
        //   position:markerPos,
        //   map:this.map
        // });
      }
    }
  }


  componentDidMount() {
    this.removeOldMarkers();



    this.updateMap(this.props);

    if(this.props.business) {

      let locations = new google.maps.LatLng(this.props.loc);
      let marker = new google.maps.Marker({
          position: locations,
          map: this.map
        });
    }
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
          // near: that.props.near,
          find: that.props.find,
          mapChange: true
        }

          that.props.saveBounds(bounds);
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
