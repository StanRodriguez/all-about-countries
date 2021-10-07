import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import MapStyleButton from "./MapStyleButton";
const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100%",
        height: 300,
        latitude: props.country.latlng[0],
        longitude: props.country.latlng[1],
        zoom: 4,
        mapStyle: ""
      },
      mapStyleOptions: [
        { name: "Streets", value: "mapbox://styles/mapbox/streets-v9" },
        { name: "Basic", value: "mapbox://styles/mapbox/basic-v9" },
        { name: "Satellite", value: "mapbox://styles/mapbox/satellite-v9" },
        { name: "Dark", value: "mapbox://styles/mapbox/dark-v9" },
        { name: "Bright", value: "mapbox://styles/mapbox/bright-v9" },
        { name: "Light", value: "mapbox://styles/mapbox/light-v9" }
      ]
    };
  }
  handleStyleChange = e => {
    const { value } = e.target;
    this.setState(prevStat => {
      return {
        viewport: {
          ...prevStat.viewport,
          mapStyle: value
        }
      };
    });
  };
  render() {
    const { viewport } = this.state;
    const { country } = this.props;
    const latitude = country.latlng[0];
    const longitude = country.latlng[1];

    return (
      <div className="col-12 map">
        <ReactMapGL
          mapStyle={
            viewport.mapStyle
              ? viewport.mapStyle
              : "mapbox://styles/mapbox/streets-v9"
          }
          width={viewport.width}
          height={viewport.height}
          latitude={latitude}
          longitude={longitude}
          zoom={viewport.zoom}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          onViewportChange={viewport => {
            this.setState(prevState => {
              return {
                viewport: { ...viewport, mapStyle: prevState.viewport.mapStyle }
              };
            });
          }}
        >
          <Marker
            longitude={longitude}
            latitude={latitude}
            offsetLeft={-10}
            offsetTop={0}
          >
            <img
              src={country.flag}
              alt={country.name + " flag"}
              width="20"
              height="15"
            />
          </Marker>
        </ReactMapGL>
        {this.state.mapStyleOptions.map((option, index) => {
          return (
            <MapStyleButton
              key={index}
              option={option}
              name="mapStyleOptions"
              handleStyleChange={this.handleStyleChange}
            />
          );
        })}
        <hr />
      </div>
    );
  }
}

export default Map;
