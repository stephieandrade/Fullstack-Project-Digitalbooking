import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  static defaultProps = {
    center: {
      lat: 6.145210,
      lng: -75.618842
    },
    zoom: 11
  };
  handleApiLoaded = (map, maps) => {
    const mapDisplay = maps.Map(this.mapRef, {
      zoom: 11,
      center: { ...this.props.center }
    });

    console.log({ map, maps });
    mapDisplay.data.loadGeoJson(
      "https://storage.googleapis.com/mapsdevsite/json/google.json"
    );
    mapDisplay.data.setStyle({
      fillColor: "green",
      strokeWeight: 1
    });
  };
  render() {
    console.log("center", this.props.center);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "100%" }}>
        <GoogleMapReact
          ref={this.mapRef}
          bootstrapURLKeys={{ key: "AIzaSyCuwENWB9D1yZo1W0VONjWq4osmBhL4mF8" }}
          center={this.props.center}
          defaultZoom={11}
          onReady={this.autoCenterMap}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
        >
          {/* <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
