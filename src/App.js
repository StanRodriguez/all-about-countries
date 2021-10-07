import React, { Component } from "react";
import "./App.css";
import Search from "./components/Search";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Route path="/search/:code" component={Search} />
          <Route path="/" exact component={Search} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
