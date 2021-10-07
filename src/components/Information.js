import React from "react";
import numberWithCommas from "../funtions/numberWithCommas";
import InformationElement from "./InformationList";
const Information = props => (
  <div className="col-12 row  justify-content-center info">
    <div className="col-12 col-md-6 main-info">
      <h1 className="country-name-h title-info" style={{ textAlign: "center" }}>
        {props.country.name}
      </h1>
      <img
        src={props.country.flag}
        alt="flag"
        className="flag-img"
        width="100%"
        height="300"
      />
    </div>
    <div className="col-12 col-md-6 extra-info">
      <h6>
        <span className="title-info">Capital:</span> {props.country.capital}
      </h6>
      <h6>
        <span className="title-info">Region: </span>
        {props.country.region}
      </h6>
      <h6>
        <span className="title-info"> Subregion: </span>
        {props.country.subregion}
      </h6>
      <h6>
        <span className="title-info"> Demonym: </span>
        {props.country.demonym}
      </h6>
      <h6>
        <span className="title-info">Area: </span>
        {numberWithCommas(props.country.area)} Km<sup>2</sup>
      </h6>
      <h6>
        <span className="title-info">Population: </span>
        {numberWithCommas(props.country.population)} people
      </h6>
      <h6>
        <span className="title-info">Calling Codes:</span>
      </h6>

      <InformationElement list={props.country.callingCodes} />
      <h6>
        <span className="title-info"> Languages:</span>
      </h6>
      <InformationElement list={props.country.languages} keyName="name" />
      <h6>
        <span className="title-info">Currency:</span>
      </h6>
      <InformationElement
        list={props.country.currencies}
        keyName="name"
        keySymbol="symbol"
      />
      <h6>
        <span className="title-info">Top Level Domain: </span>
        {props.country.topLevelDomain}
      </h6>
    </div>
  </div>
);
export default Information;
//monetary, languages, flag, calling code, topLevelDomain
