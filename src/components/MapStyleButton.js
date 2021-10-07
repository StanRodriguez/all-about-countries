import React from "react";

const MapStyleButton = props => {
  return (
    <div className="form-check form-check-inline map-style">
      <input
        className="form-check-input"
        onChange={props.handleStyleChange}
        type="radio"
        id={props.option.value}
        name={props.name}
        value={props.option.value}
      />
      <label className="form-check-label" htmlFor={props.option.value}>
        {props.option.name}
      </label>
    </div>
  );
};

export default MapStyleButton;
