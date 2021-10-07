import React, { Component } from "react";
import countries from "../Data";
import Select from "react-select";
import axios from "axios";
import Map from "./Map";
import Information from "./Information";

const COUNTRIES_API_URL = "https://restcountries.eu/rest/v2/alpha/";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      countries,
      selectedCountry: {},
      isGettingData: true
    };
  }
  componentDidMount = () => {
    if (this.props.match.params.code) {
      const code = this.props.match.params.code.toUpperCase();
      countries.forEach(country => {
        if (country.value === code) {
          this.setState({
            selectedOption: country
          });
        }
      });
    }
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  handleSubmit = async e => {
    e.preventDefault() ? e.preventDefault() : (e = null);
    const response = await axios(
      COUNTRIES_API_URL + this.state.selectedOption.value
    );
    this.setState({
      selectedCountry: response.data,
      isGettingData: false
    });
  };

  render() {
    return (
      <div className="search">
        <form
          onSubmit={this.handleSubmit}
          name="searchForm"
          className="form-row search-form"
        >
          <div className="input-group justify-content-center">
            <Select
              autoFocus="true"
              className="col col-md-5"
              placeholder="Select a country"
              options={this.state.countries}
              value={this.state.selectedOption}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </form>
        {this.state.isGettingData ? (
          <h6 style={{ textAlign: "center" }}>
            Select a country you want to know about.
          </h6>
        ) : (
          <div className="row results">
            <Map country={this.state.selectedCountry} />
            <Information country={this.state.selectedCountry} />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
